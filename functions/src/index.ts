import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

initializeApp();

const db = getFirestore();
const MAIN_ROOM_ID = "main";
const PRESENCE_TIMEOUT_MS = 30 * 1000;
const WAITING_PLAYER_TIMEOUT_MS = 10 * 60 * 1000;
const GAME_INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000;
const VOTE_KICK_MIN_THRESHOLD = 2;

// ── Shared game constants (mirrored from src/lib/gameConstants.ts) ────────────

const THEMES = [
  "Nature", "Food & Drink", "Architecture", "Night Life", "Travel",
  "Everyday Life", "Art & Culture", "Sports & Fitness", "Weather",
  "Urban Streets", "Water & Ocean", "Celebrations", "Work & Study",
  "Family & Friends", "Pets & Animals", "Sunsets & Skies", "Markets & Shops",
  "Texture & Patterns", "Motion & Speed", "Silence & Stillness",
];

const CLUE_BANK = [
  "calm", "tense", "lonely", "joyful", "awkward", "nostalgic", "hopeful", "uneasy",
  "broken", "messy", "clean", "dark", "bright", "fragile", "worn", "fresh",
  "hidden", "open", "empty", "crowded", "weird", "normal", "lost", "found",
  "moving", "still", "waiting", "rushing", "stuck", "fleeting", "heavy", "light",
  "sharp", "blurry", "loud", "quiet", "rough", "smooth", "warm", "cold",
  "together", "apart", "watched", "ignored", "contained", "free", "grounded", "floating",
];

const pickClueOptions = (n: number): string[] => {
  const shuffled = [...CLUE_BANK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};

const pickTheme = (): string => THEMES[Math.floor(Math.random() * THEMES.length)];

// ── Types ─────────────────────────────────────────────────────────────────────

type RoomDataServer = {
  state?: string;
  gamePhase?: string;
  playerCount?: number;
  marcoCount?: number;
  rounds?: number;
  currentRound?: number;
  eliminatedPlayerIds?: string[];
  investigatedPlayerIds?: string[];
  waitingSince?: Timestamp | null;
};

type RoundDataServer = {
  roundPhase?: string;
  theme?: string;
  clueOptions?: string[];
  submissions?: Record<string, string>;
  marcoSubmission?: { eliminatedPlayerId: string; marcoPlayerId: string } | null;
  marcoConfirmed?: string[];
  eliminatedPlayerId?: string | null;
  selectedClue?: string | null;
  investigationVotes?: Record<string, string>;
  investigatedPlayerId?: string | null;
  advanceToInvestigation?: boolean;
};

const makeEmptyRound = (theme: string, clueOptions: string[]) => ({
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

const sendDebugLog = (
  hypothesisId: string,
  location: string,
  message: string,
  data: Record<string, unknown>,
) => {
  // #region agent log
  fetch("http://127.0.0.1:7405/ingest/d453ec47-2b73-4a1b-bd86-9e13d383d1b3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "d485e8",
    },
    body: JSON.stringify({
      sessionId: "d485e8",
      runId: "repro2",
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
};

// ── Room stats ───────────────────────────────────────────────────────────────

export const onRoomCreated = onDocumentCreated("rooms/{roomId}", async () => {
  await db.doc("stats/rooms").set(
    { count: FieldValue.increment(1), updatedAt: FieldValue.serverTimestamp() },
    { merge: true },
  );
});

export const onRoomDeleted = onDocumentDeleted("rooms/{roomId}", async () => {
  await db.doc("stats/rooms").set(
    { count: FieldValue.increment(-1), updatedAt: FieldValue.serverTimestamp() },
    { merge: true },
  );
});

// ── Votekick: server-side player removal ─────────────────────────────────────

export const onPlayerVotekickUpdated = onDocumentUpdated(
  "rooms/{roomId}/players/{playerId}",
  async (event) => {
    const before = event.data?.before.data() as { votekickCount?: number } | undefined;
    const after = event.data?.after.data() as { votekickCount?: number } | undefined;
    if (!before || !after) return;

    const beforeCount = before.votekickCount ?? 0;
    const afterCount = after.votekickCount ?? 0;
    if (afterCount <= beforeCount) return;

    const { roomId, playerId } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists) return;

    const roomData = roomSnap.data() as RoomDataServer;
    const playerCount = roomData.playerCount ?? 0;
    const votesNeeded = Math.max(VOTE_KICK_MIN_THRESHOLD, Math.ceil((playerCount - 1) / 2));

    console.log(`[onPlayerVotekickUpdated] ${playerId}: ${beforeCount}->${afterCount}, need ${votesNeeded}`);
    if (afterCount < votesNeeded) return;

    const nextCount = Math.max(playerCount - 1, 0);
    const batch = db.batch();
    batch.delete(db.doc(`rooms/${roomId}/players/${playerId}`));
    batch.set(db.doc(`users/${playerId}`), { activeRoomId: null }, { merge: true });

    const roomUpdates: Record<string, unknown> = {
      playerCount: nextCount,
      lastActiveAt: FieldValue.serverTimestamp(),
      waitingSince: nextCount <= 1 ? FieldValue.serverTimestamp() : roomData.waitingSince ?? null,
    };
    if (nextCount < 2) roomUpdates.state = "waiting";
    batch.update(roomRef, roomUpdates);
    await batch.commit();
    console.log(`[onPlayerVotekickUpdated] kicked ${playerId}, playerCount now ${nextCount}`);
  },
);

// ── Reset when room goes back to waiting ─────────────────────────────────────

export const onRoomStateChanged = onDocumentUpdated("rooms/{roomId}", async (event) => {
  const before = event.data?.before.data() as { state?: string } | undefined;
  const after = event.data?.after.data() as { state?: string } | undefined;
  if (!before || !after || before.state === after.state || after.state !== "waiting") return;

  const { roomId } = event.params;
  const wasPlaying = before.state === "playing";
  console.log(`[onRoomStateChanged] ${roomId} → waiting (wasPlaying=${wasPlaying}), clearing state`);

  const roomRef = db.doc(`rooms/${roomId}`);
  const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
  const batch = db.batch();

  for (const playerDoc of playersSnap.docs) {
    const playerData = playerDoc.data() as { votekickCount?: number; role?: string };
    const playerUpdates: Record<string, unknown> = {};
    if ((playerData.votekickCount ?? 0) > 0) playerUpdates.votekickCount = 0;
    if (wasPlaying) {
      if (playerData.role !== undefined) playerUpdates.role = FieldValue.delete();
      playerUpdates.isReady = false;
    }
    if (Object.keys(playerUpdates).length > 0) batch.update(playerDoc.ref, playerUpdates);
    const votesSnap = await playerDoc.ref.collection("votes").get();
    for (const voteDoc of votesSnap.docs) batch.delete(voteDoc.ref);
  }

  if (wasPlaying) {
    batch.update(roomRef, {
      gamePhase: FieldValue.delete(),
      currentRound: FieldValue.delete(),
      eliminatedPlayerIds: FieldValue.delete(),
      investigatedPlayerIds: FieldValue.delete(),
      winner: FieldValue.delete(),
      marcoCount: FieldValue.delete(),
      rounds: FieldValue.delete(),
      photosPerPlayer: FieldValue.delete(),
    });
    console.log(`[onRoomStateChanged] cleared all game fields for ${roomId}`);
  }

  await batch.commit();

  if (wasPlaying) {
    // Delete all round subdocs so the next game starts with a clean slate
    try {
      const roundsSnap = await db.collection(`rooms/${roomId}/rounds`).get();
      if (!roundsSnap.empty) {
        const roundBatch = db.batch();
        for (const roundDoc of roundsSnap.docs) {
          // Delete private subcollection docs first
          const privateSnap = await roundDoc.ref.collection("private").get();
          for (const privateDoc of privateSnap.docs) roundBatch.delete(privateDoc.ref);
          roundBatch.delete(roundDoc.ref);
        }
        await roundBatch.commit();
        console.log(`[onRoomStateChanged] deleted ${roundsSnap.size} round doc(s) for ${roomId}`);
      }
    } catch (err) {
      console.warn(`[onRoomStateChanged] failed to delete round docs for ${roomId}:`, err);
    }

    // Delete all photos uploaded for this room from Storage
    try {
      const bucket = getStorage().bucket();
      await bucket.deleteFiles({ prefix: `marcophotos/${roomId}/` });
      console.log(`[onRoomStateChanged] deleted storage photos for ${roomId}`);
    } catch (err) {
      console.warn(`[onRoomStateChanged] failed to delete storage photos for ${roomId}:`, err);
    }
  }
});

// ── Round doc phase transitions ───────────────────────────────────────────────

export const onRoundDocUpdated = onDocumentUpdated(
  "rooms/{roomId}/rounds/{roundNum}",
  async (event) => {
    const before = event.data?.before.data() as RoundDataServer | undefined;
    const after = event.data?.after.data() as RoundDataServer | undefined;
    if (!before || !after) return;

    const { roomId, roundNum } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roundRef = event.data!.after.ref;
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists) return;
    const roomData = roomSnap.data() as RoomDataServer;

    // ── Phase 1: upload → elimination ────────────────────────────────────────
    if (after.roundPhase === "upload") {
      const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
      const submissions = after.submissions ?? {};
      const totalPlayers = playersSnap.size;
      // #region agent log — Firestore breadcrumb readable by client
      await roundRef.update({
        _dbgFunctionRan: {
          at: FieldValue.serverTimestamp(),
          uploadCount: Object.keys(submissions).length,
          totalPlayers,
          roundPhase: after.roundPhase ?? null,
        },
      }).catch(() => {});
      // #endregion

      if (Object.keys(submissions).length < totalPlayers) return;

      console.log(`[onRoundDocUpdated] All photos submitted — advancing to elimination, round ${roundNum}`);
      const batch = db.batch();
      batch.update(roundRef, { roundPhase: "elimination" });
      batch.update(roomRef, { gamePhase: "round-elimination", lastActiveAt: FieldValue.serverTimestamp() });
      await batch.commit();
      return;
    }

    // ── Phase 2: elimination → clue ──────────────────────────────────────────
    if (after.roundPhase === "elimination") {
      const marcoCount = roomData.marcoCount ?? 1;
      const confirmed = after.marcoConfirmed ?? [];
      if (confirmed.length < marcoCount) return;

      const marcoSubmission = after.marcoSubmission;
      if (!marcoSubmission) return;

      const { eliminatedPlayerId, marcoPlayerId } = marcoSubmission;
      const submissions = after.submissions ?? {};
      const marcoPhotoUrl = submissions[marcoPlayerId] ?? null;

      if (!marcoPhotoUrl) {
        console.warn(`[onRoundDocUpdated] Marco ${marcoPlayerId} has no submission, cannot advance`);
        return;
      }

      const eliminatedIds = roomData.eliminatedPlayerIds ?? [];
      const newEliminatedIds = [...eliminatedIds, eliminatedPlayerId];

      console.log(`[onRoundDocUpdated] Marco action confirmed — advancing to clue, round ${roundNum}`);
      const batch = db.batch();

      // Write private doc readable only by the eliminated player
      const privateRef = db.doc(`rooms/${roomId}/rounds/${roundNum}/private/reveal`);
      batch.set(privateRef, { marcoPhotoUrl, forPlayerId: eliminatedPlayerId });

      batch.update(roundRef, {
        roundPhase: "clue",
        eliminatedPlayerId,
      });
      batch.update(roomRef, {
        gamePhase: "eliminated-reveal",
        eliminatedPlayerIds: newEliminatedIds,
        lastActiveAt: FieldValue.serverTimestamp(),
      });
      await batch.commit();
      return;
    }

    // ── Phase 3: clue → reveal ───────────────────────────────────────────────
    if (after.roundPhase === "clue" && !before.selectedClue && after.selectedClue) {
      console.log(`[onRoundDocUpdated] Clue submitted — advancing to reveal, round ${roundNum}`);
      const batch = db.batch();
      batch.update(roundRef, { roundPhase: "reveal" });
      batch.update(roomRef, { gamePhase: "photo-reveal", lastActiveAt: FieldValue.serverTimestamp() });
      await batch.commit();
      return;
    }

    // ── Phase 4: reveal → vote ───────────────────────────────────────────────
    if (after.roundPhase === "reveal" && after.advanceToInvestigation && !before.advanceToInvestigation) {
      console.log(`[onRoundDocUpdated] Advancing to investigation, round ${roundNum}`);
      const batch = db.batch();
      batch.update(roundRef, { roundPhase: "vote" });
      batch.update(roomRef, { gamePhase: "investigation", lastActiveAt: FieldValue.serverTimestamp() });
      await batch.commit();
      return;
    }

    // ── Phase 5: vote → done ─────────────────────────────────────────────────
    if (after.roundPhase === "vote") {
      const votes = after.investigationVotes ?? {};
      const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
      const eliminatedIds = roomData.eliminatedPlayerIds ?? [];
      const eligibleVoters = playersSnap.docs.filter((d) => !eliminatedIds.includes(d.id));

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
      const isTie = topTargets.length > 1;
      const investigatedPlayerId = isTie ? null : topTargets[0];

      const newInvestigatedIds = investigatedPlayerId
        ? [...(roomData.investigatedPlayerIds ?? []), investigatedPlayerId]
        : (roomData.investigatedPlayerIds ?? []);

      const marcoIds = playersSnap.docs
        .filter((d) => d.data().role === "Marco")
        .map((d) => d.id);
      const allMarcosInvestigated = marcoIds.every((id) => newInvestigatedIds.includes(id));
      const currentRound = roomData.currentRound ?? 1;
      const roundLimit = roomData.rounds ?? 2;

      console.log(`[onRoundDocUpdated] Votes tallied, round ${roundNum}. Tie=${isTie}, investigated=${investigatedPlayerId}`);

      const batch = db.batch();
      batch.update(roundRef, { roundPhase: "done", investigatedPlayerId: investigatedPlayerId ?? null });

      if (allMarcosInvestigated) {
        console.log(`[onRoundDocUpdated] Regs win!`);
        batch.update(roomRef, {
          gamePhase: "game-over",
          winner: "Reg",
          investigatedPlayerIds: newInvestigatedIds,
          lastActiveAt: FieldValue.serverTimestamp(),
        });
      } else if (currentRound >= roundLimit) {
        console.log(`[onRoundDocUpdated] Marcos win — rounds exhausted`);
        batch.update(roomRef, {
          gamePhase: "game-over",
          winner: "Marco",
          investigatedPlayerIds: newInvestigatedIds,
          lastActiveAt: FieldValue.serverTimestamp(),
        });
      } else {
        const nextRound = currentRound + 1;
        const nextTheme = pickTheme();
        const nextClueOptions = pickClueOptions(10);
        console.log(`[onRoundDocUpdated] Starting round ${nextRound} — theme: ${nextTheme}`);
        const nextRoundRef = db.doc(`rooms/${roomId}/rounds/${nextRound}`);
        batch.set(nextRoundRef, makeEmptyRound(nextTheme, nextClueOptions));
        batch.update(roomRef, {
          gamePhase: "round-upload",
          currentRound: nextRound,
          investigatedPlayerIds: newInvestigatedIds,
          lastActiveAt: FieldValue.serverTimestamp(),
        });
      }
      await batch.commit();
    }
  },
);

// ── Cleanup stale players ────────────────────────────────────────────────────

export const cleanupRooms = onSchedule("every 1 minutes", async () => {
  const presenceCutoff = Timestamp.fromDate(new Date(Date.now() - PRESENCE_TIMEOUT_MS));
  const waitingPlayerCutoff = Timestamp.fromDate(new Date(Date.now() - WAITING_PLAYER_TIMEOUT_MS));
  const mainRoomRef = db.collection("rooms").doc(MAIN_ROOM_ID);
  const mainRoomSnap = await mainRoomRef.get();
  if (!mainRoomSnap.exists) {
    await mainRoomRef.set({
      state: "waiting",
      createdAt: FieldValue.serverTimestamp(),
      lastActiveAt: FieldValue.serverTimestamp(),
      playerCount: 0,
      waitingSince: FieldValue.serverTimestamp(),
    });
  }
  const roomsSnap = await db.collection("rooms").get();
  if (roomsSnap.empty) return;

  const gameInactivityCutoff = Timestamp.fromDate(new Date(Date.now() - GAME_INACTIVITY_TIMEOUT_MS));

  for (const roomDoc of roomsSnap.docs) {
    const roomData = roomDoc.data() as {
      playerCount?: number;
      waitingSince?: Timestamp | null;
      lastActiveAt?: Timestamp | null;
      state?: string;
      hostUid?: unknown;
    };
    const playersSnap = await roomDoc.ref
      .collection("players")
      .orderBy("joinedAt", "asc")
      .get();
    const roomIsWaiting = roomData.state !== "playing";
    const batch = db.batch();
    let hasWrites = false;

    if (Object.prototype.hasOwnProperty.call(roomData, "hostUid")) {
      batch.update(roomDoc.ref, { hostUid: FieldValue.delete() });
      hasWrites = true;
    }

    const remainingPlayers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
    for (const playerDoc of playersSnap.docs) {
      const playerData = playerDoc.data() as { lastSeenAt?: Timestamp; joinedAt?: Timestamp };
      const isStalePresence =
        !playerData.lastSeenAt || playerData.lastSeenAt.toMillis() <= presenceCutoff.toMillis();
      const isWaitingTimeout =
        roomIsWaiting && !!playerData.joinedAt &&
        playerData.joinedAt.toMillis() <= waitingPlayerCutoff.toMillis();

      if (isStalePresence || isWaitingTimeout) {
        batch.delete(playerDoc.ref);
        batch.set(db.doc(`users/${playerDoc.id}`), { activeRoomId: null }, { merge: true });
        hasWrites = true;
      } else {
        if (Object.prototype.hasOwnProperty.call(playerData, "isHost")) {
          batch.update(playerDoc.ref, { isHost: FieldValue.delete() });
          hasWrites = true;
        }
        remainingPlayers.push(playerDoc);
      }
    }

    const shouldUpdateCount =
      (roomData.playerCount ?? remainingPlayers.length) !== remainingPlayers.length;
    const isGameInactive =
      roomData.state === "playing" &&
      !!roomData.lastActiveAt &&
      roomData.lastActiveAt.toMillis() <= gameInactivityCutoff.toMillis();
    const shouldResetState =
      (roomData.state === "playing" && remainingPlayers.length < 2) || isGameInactive;
    if (isGameInactive) {
      console.log(`[cleanupRooms] game in ${roomDoc.id} inactive for 10+ min — resetting to waiting`);
    }

    if (hasWrites || shouldUpdateCount || shouldResetState) {
      const updates: Record<string, unknown> = {
        playerCount: remainingPlayers.length,
        lastActiveAt: FieldValue.serverTimestamp(),
        waitingSince:
          remainingPlayers.length <= 1
            ? FieldValue.serverTimestamp()
            : roomData.waitingSince ?? null,
      };
      if (shouldResetState) updates.state = "waiting";
      batch.update(roomDoc.ref, updates);
      hasWrites = true;
    }

    if (hasWrites) await batch.commit();
  }
});
