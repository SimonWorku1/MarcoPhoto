import {
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  setDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  collection,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { uploadPhoto } from "./storage";
import { THEMES, pickClueOptions, pickUnusedTheme } from "./gameConstants";

// The Firebase Web SDK does NOT retry runTransaction on `failed-precondition`, only on
// `aborted`. But Firestore returns `failed-precondition` when a document's version at
// commit time doesn't match the version read inside the transaction — i.e. exactly the
// situation where a retry makes sense. This wrapper adds up to 4 manual retries with a
// small jittered backoff so concurrent clients don't all retry in lock-step.
const runTransactionWithRetry = async <T>(
  fn: Parameters<typeof runTransaction<T>>[1],
  maxAttempts = 5,
): Promise<T | undefined> => {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await runTransaction(db, fn);
    } catch (err) {
      if ((err as { code?: string }).code === "failed-precondition" && attempt < maxAttempts - 1) {
        await new Promise(r => setTimeout(r, 80 * (attempt + 1) + Math.random() * 60));
        continue;
      }
      throw err;
    }
  }
};

export type RoomState = "waiting" | "playing";
export type GamePhase =
  | "round-upload"
  | "round-elimination"
  | "eliminated-reveal"
  | "photo-reveal"
  | "investigation"
  | "game-over"
  | "round-action"; // legacy name used by older deployed Cloud Functions (equivalent to "round-upload")

export type RoundData = {
  roundPhase: "upload" | "elimination" | "clue" | "reveal" | "vote" | "done" | "action"; // "action" is a legacy name used by older deployed Cloud Functions (equivalent to "upload")
  theme: string;
  clueOptions: string[];
  submissions: Record<string, string>; // playerId → photoUrl
  marcoSubmission?: { eliminatedPlayerId: string; marcoPlayerId: string } | null;
  marcoConfirmed?: string[];
  eliminatedPlayerId?: string | null;
  selectedClue?: string | null;
  investigationVotes?: Record<string, string>;
  investigatedPlayerId?: string | null;
  advanceToInvestigation?: boolean;
};

export type RoomSummary = {
  id: string;
  state: RoomState;
  playerCount: number;
  createdAt?: unknown;
  marcoCount?: number;
  rounds?: number;
  gamePhase?: GamePhase;
  currentRound?: number;
  eliminatedPlayerIds?: string[];
  investigatedPlayerIds?: string[];
  usedThemes?: string[];
  winner?: "Marco" | "Reg" | null;
};

export type RoomPlayer = {
  id: string;
  name: string;
  isReady?: boolean;
  votekickCount?: number;
  joinedAt?: unknown;
  role?: "Marco" | "Reg";
};

export type RoomData = RoomSummary & {
  waitingSince?: unknown;
  lastActiveAt?: unknown;
};

// rounds = n − 2m − 1: the last round always has (m+1) active Regs vs m Marcos,
// ensuring every round — including the final one — is winnable by the Regs.
const GAME_CONFIG_TABLE: Record<number, { marcoCount: number; rounds: number }> = {
   4: { marcoCount: 1, rounds:  1 },
   5: { marcoCount: 1, rounds:  2 },
   6: { marcoCount: 1, rounds:  3 },
   7: { marcoCount: 1, rounds:  4 },
   8: { marcoCount: 2, rounds:  3 },
   9: { marcoCount: 2, rounds:  4 },
  10: { marcoCount: 2, rounds:  5 },
  11: { marcoCount: 2, rounds:  6 },
  12: { marcoCount: 3, rounds:  5 },
  13: { marcoCount: 3, rounds:  6 },
  14: { marcoCount: 3, rounds:  7 },
  15: { marcoCount: 3, rounds:  8 },
  16: { marcoCount: 4, rounds:  7 },
  17: { marcoCount: 4, rounds:  8 },
  18: { marcoCount: 4, rounds:  9 },
  19: { marcoCount: 4, rounds: 10 },
};

export const getGameConfig = (playerCount: number) => {
  return GAME_CONFIG_TABLE[playerCount] ?? GAME_CONFIG_TABLE[19];
};

const MAIN_ROOM_ID = "main";
const MAX_ROOM_PLAYERS = 19;
const VOTE_KICK_MIN_THRESHOLD = 2;

const requireUid = () => {
  const uid = auth.currentUser?.uid;
  if (!uid) throw new Error("Not signed in.");
  return uid;
};

export const upsertUserProfile = async (displayName: string) => {
  const uid = requireUid();
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, { displayName }, { merge: true });
};

export const getActiveRoomId = async () => {
  const uid = requireUid();
  const userSnap = await getDoc(doc(db, "users", uid));
  if (!userSnap.exists()) return null;
  return (userSnap.data().activeRoomId as string | null) ?? null;
};

export const listenRoom = (roomId: string, onRoom: (room: RoomData | null) => void) => {
  const roomRef = doc(db, "rooms", roomId);
  return onSnapshot(roomRef, (snapshot) => {
    if (!snapshot.exists()) { onRoom(null); return; }
    const data = snapshot.data() as Omit<RoomData, "id">;
    onRoom({ id: snapshot.id, ...data });
  });
};

export const listenRoomPlayers = (
  roomId: string,
  onPlayers: (players: RoomPlayer[]) => void,
) => {
  const playersRef = collection(db, "rooms", roomId, "players");
  const playersQuery = query(playersRef, orderBy("joinedAt", "asc"));
  return onSnapshot(playersQuery, (snapshot) => {
    const players = snapshot.docs.map((docSnap) => {
      const data = docSnap.data() as Omit<RoomPlayer, "id">;
      return { id: docSnap.id, ...data };
    });
    onPlayers(players);
  });
};

export const touchPlayer = async (roomId: string) => {
  const uid = requireUid();
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(playerRef, { lastSeenAt: serverTimestamp() });
};

export const joinMainRoom = async (displayName: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", MAIN_ROOM_ID);
  const userRef = doc(db, "users", uid);
  const playerRef = doc(db, "rooms", MAIN_ROOM_ID, "players", uid);

  return runTransaction(db, async (tx) => {
    const userSnap = await tx.get(userRef);
    const activeRoomId = (userSnap.data()?.activeRoomId as string | null) ?? null;
    if (activeRoomId && activeRoomId !== MAIN_ROOM_ID) {
      throw new Error("You are already in a room.");
    }

    const roomSnap = await tx.get(roomRef);
    const playerSnap = await tx.get(playerRef);
    if (!roomSnap.exists()) {
      tx.set(roomRef, {
        state: "waiting",
        createdAt: serverTimestamp(),
        lastActiveAt: serverTimestamp(),
        playerCount: 1,
        waitingSince: serverTimestamp(),
      });
      tx.set(playerRef, {
        name: displayName,
        isReady: false,
        votekickCount: 0,
        joinedAt: serverTimestamp(),
        lastSeenAt: serverTimestamp(),
      });
    } else {
      const roomData = roomSnap.data() as RoomData;
      const currentCount = roomData.playerCount ?? 0;
      const shouldResetRoom = currentCount < 2;

      if (playerSnap.exists()) {
        tx.set(playerRef, { name: displayName, lastSeenAt: serverTimestamp() }, { merge: true });
        if (shouldResetRoom && roomData.state !== "waiting") {
          tx.update(roomRef, {
            state: "waiting",
            lastActiveAt: serverTimestamp(),
            waitingSince: serverTimestamp(),
          });
        }
      } else {
        if (roomData.state !== "waiting" && !shouldResetRoom) {
          throw new Error("Game already started.");
        }
        if (currentCount >= MAX_ROOM_PLAYERS) {
          throw new Error("Room is full (19 players max).");
        }
        tx.set(playerRef, {
          name: displayName,
          isReady: false,
          votekickCount: 0,
          joinedAt: serverTimestamp(),
          lastSeenAt: serverTimestamp(),
        });
        const roomUpdates: Record<string, unknown> = {
          playerCount: currentCount + 1,
          lastActiveAt: serverTimestamp(),
          waitingSince: currentCount + 1 <= 1 ? serverTimestamp() : roomData.waitingSince ?? null,
        };
        if (shouldResetRoom) roomUpdates.state = "waiting";
        tx.update(roomRef, roomUpdates);
      }
    }

    tx.set(userRef, { displayName, activeRoomId: MAIN_ROOM_ID }, { merge: true });
    return { roomId: MAIN_ROOM_ID };
  });
};

export const leaveRoom = async (roomId: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  const userRef = doc(db, "users", uid);

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (roomSnap.exists()) {
      const roomData = roomSnap.data() as RoomData;
      const nextCount = Math.max((roomData.playerCount ?? 1) - 1, 0);
      const updates: Partial<RoomData> = {
        playerCount: nextCount,
        lastActiveAt: serverTimestamp(),
        waitingSince: nextCount <= 1 ? serverTimestamp() : roomData.waitingSince ?? null,
      };
      if (nextCount < 2) updates.state = "waiting";
      tx.update(roomRef, updates);
    }
    tx.delete(playerRef);
    tx.set(userRef, { activeRoomId: null }, { merge: true });
  });
};

export const voteKickPlayer = async (roomId: string, targetPlayerUid: string) => {
  const uid = requireUid();
  if (uid === targetPlayerUid) throw new Error("You cannot vote kick yourself.");

  const roomRef = doc(db, "rooms", roomId);
  const playersRef = collection(db, "rooms", roomId, "players");
  const voterPlayerRef = doc(playersRef, uid);
  const targetPlayerRef = doc(playersRef, targetPlayerUid);
  const targetVoteRef = doc(db, "rooms", roomId, "players", targetPlayerUid, "votes", uid);

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) throw new Error("Room not found.");
    const voterPlayerSnap = await tx.get(voterPlayerRef);
    if (!voterPlayerSnap.exists()) throw new Error("You are not in this room.");
    const targetPlayerSnap = await tx.get(targetPlayerRef);
    if (!targetPlayerSnap.exists()) throw new Error("Player is no longer in this room.");
    const existingVoteSnap = await tx.get(targetVoteRef);
    if (existingVoteSnap.exists()) throw new Error("You already voted to kick this player.");

    const roomData = roomSnap.data() as RoomData;
    const targetPlayerData = targetPlayerSnap.data() as RoomPlayer;
    const currentCount = roomData.playerCount ?? 0;
    const nextVoteCount = (targetPlayerData.votekickCount ?? 0) + 1;
    const votesNeeded = Math.max(VOTE_KICK_MIN_THRESHOLD, Math.ceil((currentCount - 1) / 2));

    tx.set(targetVoteRef, { voterUid: uid, createdAt: serverTimestamp() });
    tx.update(targetPlayerRef, { votekickCount: nextVoteCount });

    return { kicked: nextVoteCount >= votesNeeded, voteCount: nextVoteCount, votesNeeded };
  });
};

export const setPlayerReady = async (roomId: string, isReady: boolean) => {
  const uid = requireUid();
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(playerRef, { isReady, lastSeenAt: serverTimestamp() });
};

const fisherYatesShuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const listenRound = (
  roomId: string,
  roundNum: number,
  onRound: (round: RoundData | null) => void,
) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(roundNum));
  return onSnapshot(roundRef, (snapshot) => {
    if (!snapshot.exists()) { onRound(null); return; }
    onRound(snapshot.data() as RoundData);
  });
};

export const listenRoundPrivate = (
  roomId: string,
  roundNum: number,
  onPrivate: (data: { marcoPhotoUrl: string; forPlayerId: string } | null) => void,
) => {
  const privateRef = doc(db, "rooms", roomId, "rounds", String(roundNum), "private", "reveal");
  return onSnapshot(privateRef, (snapshot) => {
    if (!snapshot.exists()) { onPrivate(null); return; }
    onPrivate(snapshot.data() as { marcoPhotoUrl: string; forPlayerId: string });
  });
};

// ── Per-round single photo upload ────────────────────────────────────────────

export const submitRoundPhoto = async (roomId: string, round: number, file: File) => {
  const uid = requireUid();
  const path = `marcophotos/${roomId}/${uid}/round/${round}`;
  const url = await uploadPhoto(path, file);
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { [`submissions.${uid}`]: url });
  return url;
};

// Client-side fallback: advances upload → elimination when all players have submitted.
// Uses plain updateDoc (not runTransaction) to avoid failed-precondition contention when
// multiple clients call this simultaneously. The write is idempotent — everyone writes the
// same value — and the Firestore Rule validates the roundPhase transition server-side, so
// the first writer wins and subsequent writers are silently rejected.
export const advanceRoundToElimination = async (roomId: string, round: number) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const roomRef = doc(db, "rooms", roomId);

  const [roundSnap, roomSnap] = await Promise.all([getDoc(roundRef), getDoc(roomRef)]);
  if (!roundSnap.exists() || !roomSnap.exists()) return;
  const rd = roundSnap.data() as RoundData;
  // "action" is the legacy round phase name used by older deployed Cloud Functions
  if (rd.roundPhase !== "upload" && rd.roundPhase !== "action") return;
  const rm = roomSnap.data() as RoomData;
  const eliminatedIds = rm.eliminatedPlayerIds ?? [];
  const activeCount = (rm.playerCount ?? 0) - eliminatedIds.length;
  if (activeCount < 1) return;
  if (Object.keys(rd.submissions ?? {}).length < activeCount) return;

  // Write roundPhase first; the Firestore Rule blocks the transition once it's no longer
  // "upload", so concurrent callers will get permission-denied after the first succeeds.
  try { await updateDoc(roundRef, { roundPhase: "elimination" }); } catch { return; }
  // Update room phase — if this fails (e.g. another client already wrote it) the CF handles it.
  try { await updateDoc(roomRef, { gamePhase: "round-elimination", lastActiveAt: serverTimestamp() }); } catch { /* no-op */ }
};

// Client-side fallback: advances elimination → eliminated-reveal (clue phase) once all Marcos confirmed.
// Also writes the private/reveal doc so the eliminated player can see Marco's photo.
export const advanceRoundFromElimination = async (roomId: string, round: number) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const roomRef = doc(db, "rooms", roomId);
  const privateRef = doc(db, "rooms", roomId, "rounds", String(round), "private", "reveal");
  return runTransactionWithRetry(async (tx) => {
    const roundSnap = await tx.get(roundRef);
    if (!roundSnap.exists()) return;
    const rd = roundSnap.data() as RoundData;
    if (rd.roundPhase !== "elimination") return;
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) return;
    const rm = roomSnap.data() as RoomData;
    const marcoCount = rm.marcoCount ?? 1;
    const confirmed = rd.marcoConfirmed ?? [];
    if (confirmed.length < marcoCount) return;
    const marcoSubmission = rd.marcoSubmission;
    if (!marcoSubmission) return;
    const { eliminatedPlayerId, marcoPlayerId } = marcoSubmission;
    const marcoPhotoUrl = (rd.submissions ?? {})[marcoPlayerId] ?? null;
    if (!marcoPhotoUrl) return;
    const newEliminatedIds = [...(rm.eliminatedPlayerIds ?? []), eliminatedPlayerId];
    tx.set(privateRef, { marcoPhotoUrl, forPlayerId: eliminatedPlayerId });
    tx.update(roundRef, { roundPhase: "clue", eliminatedPlayerId });
    tx.update(roomRef, { gamePhase: "eliminated-reveal", eliminatedPlayerIds: newEliminatedIds, lastActiveAt: serverTimestamp() });
  });
};

// Client-side fallback: advances clue → photo-reveal once eliminated player submits clue word.
export const advanceRoundFromClue = async (roomId: string, round: number) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const roomRef = doc(db, "rooms", roomId);
  const roundSnap = await getDoc(roundRef);
  if (!roundSnap.exists()) return;
  const rd = roundSnap.data() as RoundData;
  if (rd.roundPhase !== "clue" || !rd.selectedClue) return;
  try { await updateDoc(roundRef, { roundPhase: "reveal" }); } catch { return; }
  try { await updateDoc(roomRef, { gamePhase: "photo-reveal", lastActiveAt: serverTimestamp() }); } catch { /* no-op */ }
};

// Client-side fallback: advances reveal → investigation once any player signals ready.
export const advanceRoundFromReveal = async (roomId: string, round: number) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const roomRef = doc(db, "rooms", roomId);
  const roundSnap = await getDoc(roundRef);
  if (!roundSnap.exists()) return;
  const rd = roundSnap.data() as RoundData;
  if (rd.roundPhase !== "reveal" || !rd.advanceToInvestigation) return;
  try { await updateDoc(roundRef, { roundPhase: "vote" }); } catch { return; }
  try { await updateDoc(roomRef, { gamePhase: "investigation", lastActiveAt: serverTimestamp() }); } catch { /* no-op */ }
};

// Client-side fallback: advances vote → done/next-round once all eligible players have voted.
export const advanceRoundFromVote = async (
  roomId: string,
  round: number,
  players: RoomPlayer[],
) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const roomRef = doc(db, "rooms", roomId);
  return runTransactionWithRetry(async (tx) => {
    const roundSnap = await tx.get(roundRef);
    if (!roundSnap.exists()) return;
    const rd = roundSnap.data() as RoundData;
    if (rd.roundPhase !== "vote") {
      // Old CF already advanced this round. Ensure the next round has a theme
      // (the old CF creates round docs without a theme field).
      const roomSnap = await tx.get(roomRef);
      if (!roomSnap.exists()) return;
      const rm = roomSnap.data() as RoomData;
      const nextRound = rm.currentRound ?? 1;
      if (nextRound > round) {
        const nextRoundRef = doc(db, "rooms", roomId, "rounds", String(nextRound));
        const nextSnap = await tx.get(nextRoundRef);
        if (nextSnap.exists()) {
          const nextRd = nextSnap.data() as RoundData;
          // The old CF creates round docs without theme or clueOptions — patch both if missing.
          const patch: Record<string, unknown> = {};
          if (!nextRd.theme) patch.theme = THEMES[Math.floor(Math.random() * THEMES.length)];
          if (!nextRd.clueOptions || (nextRd.clueOptions as string[]).length === 0) patch.clueOptions = pickClueOptions(10);
          if (Object.keys(patch).length > 0) tx.update(nextRoundRef, patch);
        }
      }
      return;
    }
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) return;
    const rm = roomSnap.data() as RoomData;
    const eliminatedIds = rm.eliminatedPlayerIds ?? [];
    const eligibleVoters = players.filter((p) => !eliminatedIds.includes(p.id));
    const votes = rd.investigationVotes ?? {};
    if (Object.keys(votes).length < eligibleVoters.length) return;

    // Tally votes
    const tallies: Record<string, number> = {};
    for (const targetId of Object.values(votes)) {
      tallies[targetId] = (tallies[targetId] ?? 0) + 1;
    }
    let maxVotes = 0;
    let topTargets: string[] = [];
    for (const [targetId, count] of Object.entries(tallies)) {
      if (count > maxVotes) { maxVotes = count; topTargets = [targetId]; }
      else if (count === maxVotes) { topTargets.push(targetId); }
    }
    const investigatedPlayerId = topTargets.length === 1 ? topTargets[0] : null;
    const currentInvestigated = rm.investigatedPlayerIds ?? [];
    const newInvestigatedIds = investigatedPlayerId
      ? [...currentInvestigated, investigatedPlayerId]
      : currentInvestigated;

    const marcoIds = players.filter((p) => p.role === "Marco").map((p) => p.id);
    const allMarcosInvestigated = marcoIds.length > 0 && marcoIds.every((id) => newInvestigatedIds.includes(id));
    const currentRound = rm.currentRound ?? 1;
    const roundLimit = rm.rounds ?? 2;

    tx.update(roundRef, { roundPhase: "done", investigatedPlayerId: investigatedPlayerId ?? null });

    if (allMarcosInvestigated) {
      tx.update(roomRef, { gamePhase: "game-over", winner: "Reg", investigatedPlayerIds: newInvestigatedIds, lastActiveAt: serverTimestamp() });
    } else if (currentRound >= roundLimit) {
      tx.update(roomRef, { gamePhase: "game-over", winner: "Marco", investigatedPlayerIds: newInvestigatedIds, lastActiveAt: serverTimestamp() });
    } else {
      const nextRound = currentRound + 1;
      const priorUsedThemes = rm.usedThemes ?? [];
      const theme = pickUnusedTheme(priorUsedThemes);
      const newUsedThemes = priorUsedThemes.length < 20 ? [...priorUsedThemes, theme] : [theme];
      const clueOptions = pickClueOptions(10);
      const nextRoundRef = doc(db, "rooms", roomId, "rounds", String(nextRound));
      tx.set(nextRoundRef, {
        roundPhase: "upload", theme, clueOptions,
        submissions: {}, marcoSubmission: null, marcoConfirmed: [],
        eliminatedPlayerId: null, selectedClue: null,
        investigationVotes: {}, investigatedPlayerId: null, advanceToInvestigation: false,
      });
      tx.update(roomRef, { gamePhase: "round-upload", currentRound: nextRound, investigatedPlayerIds: newInvestigatedIds, usedThemes: newUsedThemes, lastActiveAt: serverTimestamp() });
    }
  });
};

// ── Marco elimination actions ─────────────────────────────────────────────────

export const submitMarcoElimination = async (
  roomId: string,
  round: number,
  eliminatedPlayerId: string,
) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, {
    marcoSubmission: { eliminatedPlayerId, marcoPlayerId: uid },
    marcoConfirmed: [uid],
  });
};

export const confirmMarcoElimination = async (roomId: string, round: number) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { marcoConfirmed: arrayUnion(uid) });
};

// ── Eliminated player clue word ───────────────────────────────────────────────

export const submitClueWord = async (roomId: string, round: number, word: string) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { selectedClue: word });
};

// ── Shared round actions ──────────────────────────────────────────────────────

export const advanceToInvestigation = async (roomId: string, round: number) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { advanceToInvestigation: true });
};

export const submitInvestigationVote = async (
  roomId: string,
  round: number,
  targetUid: string,
) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { [`investigationVotes.${uid}`]: targetUid });
};

// ── Start game ────────────────────────────────────────────────────────────────

export const startGame = async (roomId: string) => {
  requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const playersRef = collection(db, "rooms", roomId, "players");

  // Pick theme + clue options before the transaction — safe because the
  // transaction guard ensures only one client's transaction proceeds.
  const theme = pickUnusedTheme([]);
  const clueOptions = pickClueOptions(10);
  const round1Ref = doc(db, "rooms", roomId, "rounds", "1");

  return runTransactionWithRetry(async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) throw new Error("Room not found.");
    const roomData = roomSnap.data() as RoomData;

    // Guard: if another client's transaction already started the game, bail out.
    if (roomData.state === "playing") return;

    const playersSnap = await getDocs(query(playersRef, orderBy("joinedAt", "asc")));
    if (playersSnap.size < 4) throw new Error("Need at least 4 players to start.");
    const everyoneReady = playersSnap.docs.every((d) => d.data().isReady === true);
    if (!everyoneReady) throw new Error("All players must be ready first.");

    const { marcoCount, rounds } = getGameConfig(playersSnap.size);
    const shuffledIds = fisherYatesShuffle(playersSnap.docs.map((d) => d.id));

    for (let i = 0; i < shuffledIds.length; i++) {
      const playerRef = doc(db, "rooms", roomId, "players", shuffledIds[i]);
      tx.update(playerRef, { role: i < marcoCount ? "Marco" : "Reg" });
    }

    // Create round 1 doc atomically with the game start
    tx.set(round1Ref, {
      roundPhase: "upload",
      theme,
      clueOptions,
      submissions: {},
      marcoSubmission: null,
      marcoConfirmed: [],
      eliminatedPlayerId: null,
      selectedClue: null,
      investigationVotes: {},
      investigatedPlayerId: null,
      advanceToInvestigation: false,
    });

    tx.update(roomRef, {
      state: "playing",
      marcoCount,
      rounds,
      gamePhase: "round-upload",
      currentRound: 1,
      eliminatedPlayerIds: [],
      investigatedPlayerIds: [],
      usedThemes: [theme],
      winner: null,
      lastActiveAt: serverTimestamp(),
    });
  });
};
