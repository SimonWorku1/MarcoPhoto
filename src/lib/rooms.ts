import {
  doc,
  deleteField,
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

export type RoomState = "waiting" | "playing";
export type GamePhase =
  | "round-action"
  | "eliminated-reveal"
  | "photo-reveal"
  | "investigation"
  | "game-over";

export type MarcoSubmission = {
  eliminatedPlayerId: string;
  privatePhotoUrl: string;
  publicPhotoUrl: string;
};

export type RoundData = {
  roundPhase?: "action" | "clue" | "reveal" | "vote" | "done";
  eliminatedPlayerId?: string;
  privatePhotoUrl?: string;
  marcoSubmissions?: Record<string, MarcoSubmission>;
  marcoConfirmed?: string[];
  publicPhotoUrls?: Record<string, string>;
  eliminatedClue?: string;
  investigationVotes?: Record<string, string>;
  investigatedPlayerId?: string;
  advanceToInvestigation?: boolean;
};

export type RoomSummary = {
  id: string;
  state: RoomState;
  playerCount: number;
  createdAt?: unknown;
  marcoCount?: number;
  rounds?: number;
  photosPerPlayer?: number;
  gamePhase?: GamePhase;
  currentRound?: number;
  eliminatedPlayerIds?: string[];
  investigatedPlayerIds?: string[];
  winner?: "Marco" | "Reg" | null;
};

export type RoomPlayer = {
  id: string;
  name: string;
  isReady?: boolean;
  votekickCount?: number;
  joinedAt?: unknown;
  role?: "Marco" | "Reg";
  photoUrls?: string[];
  usedPhotoUrls?: string[];
  hasUploadedPhotos?: boolean;
};

export type RoomData = RoomSummary & {
  waitingSince?: unknown;
  lastActiveAt?: unknown;
};

export const getGameConfig = (playerCount: number) => {
  if (playerCount >= 16) return { marcoCount: 4, rounds: 12, photosPerPlayer: 24 };
  if (playerCount >= 12) return { marcoCount: 3, rounds: 9, photosPerPlayer: 18 };
  if (playerCount >= 8) return { marcoCount: 2, rounds: 6, photosPerPlayer: 12 };
  return { marcoCount: 1, rounds: 3, photosPerPlayer: 6 };
};

const MAIN_ROOM_ID = "main";
const MAX_ROOM_PLAYERS = 19;
const VOTE_KICK_MIN_THRESHOLD = 2;

const requireUid = () => {
  const uid = auth.currentUser?.uid;
  if (!uid) {
    throw new Error("Not signed in.");
  }
  return uid;
};

export const upsertUserProfile = async (displayName: string) => {
  const uid = requireUid();
  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    {
      displayName,
    },
    { merge: true },
  );
};

export const getActiveRoomId = async () => {
  const uid = requireUid();
  const userSnap = await getDoc(doc(db, "users", uid));
  if (!userSnap.exists()) {
    return null;
  }
  return (userSnap.data().activeRoomId as string | null) ?? null;
};

export const listenRoom = (roomId: string, onRoom: (room: RoomData | null) => void) => {
  const roomRef = doc(db, "rooms", roomId);
  return onSnapshot(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      onRoom(null);
      return;
    }
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
  await updateDoc(playerRef, {
    lastSeenAt: serverTimestamp(),
  });
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
        // Existing player rejoining — always allowed regardless of game state
        tx.set(
          playerRef,
          { name: displayName, lastSeenAt: serverTimestamp() },
          { merge: true },
        );
        if (shouldResetRoom && roomData.state !== "waiting") {
          tx.update(roomRef, {
            state: "waiting",
            lastActiveAt: serverTimestamp(),
            waitingSince: serverTimestamp(),
          });
        }
      } else {
        // New player trying to join
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

    tx.set(
      userRef,
      {
        displayName,
        activeRoomId: MAIN_ROOM_ID,
      },
      { merge: true },
    );

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
      if (nextCount < 2) {
        updates.state = "waiting";
      }
      tx.update(roomRef, updates);
    }

    tx.delete(playerRef);
    tx.set(
      userRef,
      {
        activeRoomId: null,
      },
      { merge: true },
    );
  });
};

export const voteKickPlayer = async (roomId: string, targetPlayerUid: string) => {
  const uid = requireUid();
  if (uid === targetPlayerUid) {
    throw new Error("You cannot vote kick yourself.");
  }

  const roomRef = doc(db, "rooms", roomId);
  const playersRef = collection(db, "rooms", roomId, "players");
  const voterPlayerRef = doc(playersRef, uid);
  const targetPlayerRef = doc(playersRef, targetPlayerUid);
  const targetVoteRef = doc(db, "rooms", roomId, "players", targetPlayerUid, "votes", uid);

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) {
      throw new Error("Room not found.");
    }
    const voterPlayerSnap = await tx.get(voterPlayerRef);
    if (!voterPlayerSnap.exists()) {
      throw new Error("You are not in this room.");
    }
    const targetPlayerSnap = await tx.get(targetPlayerRef);
    if (!targetPlayerSnap.exists()) {
      throw new Error("Player is no longer in this room.");
    }
    const existingVoteSnap = await tx.get(targetVoteRef);
    if (existingVoteSnap.exists()) {
      throw new Error("You already voted to kick this player.");
    }

    const roomData = roomSnap.data() as RoomData;
    const targetPlayerData = targetPlayerSnap.data() as RoomPlayer;
    const currentCount = roomData.playerCount ?? 0;
    const nextVoteCount = (targetPlayerData.votekickCount ?? 0) + 1;
    const votesNeeded = Math.max(
      VOTE_KICK_MIN_THRESHOLD,
      Math.ceil((currentCount - 1) / 2),
    );

    // Cast vote and increment count — the Cloud Function handles the actual deletion
    // when the threshold is reached, avoiding client-side permission issues.
    tx.set(targetVoteRef, {
      voterUid: uid,
      createdAt: serverTimestamp(),
    });
    tx.update(targetPlayerRef, { votekickCount: nextVoteCount });

    return { kicked: nextVoteCount >= votesNeeded, voteCount: nextVoteCount, votesNeeded };
  });
};

export const setPlayerReady = async (roomId: string, isReady: boolean) => {
  const uid = requireUid();
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(playerRef, {
    isReady,
    lastSeenAt: serverTimestamp(),
  });
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
    if (!snapshot.exists()) {
      onRound(null);
      return;
    }
    onRound(snapshot.data() as RoundData);
  });
};

export const uploadPhotoPool = async (roomId: string, files: File[]) => {
  const uid = requireUid();
  const photoUrls: string[] = [];
  for (let i = 0; i < files.length; i++) {
    const path = `marcophotos/${roomId}/${uid}/pool/${i}`;
    const url = await uploadPhoto(path, files[i]);
    photoUrls.push(url);
  }
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(playerRef, {
    photoUrls,
    usedPhotoUrls: [],
    hasUploadedPhotos: true,
  });
};

export const submitMarcoAction = async (
  roomId: string,
  round: number,
  eliminatedPlayerId: string,
  privatePhotoUrl: string,
  publicPhotoUrl: string,
) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  // Submitting counts as confirming your own proposal; reset other confirmations
  await updateDoc(roundRef, {
    [`marcoSubmissions.${uid}`]: { eliminatedPlayerId, privatePhotoUrl, publicPhotoUrl },
    marcoConfirmed: [uid],
  });
  await updateDoc(playerRef, {
    usedPhotoUrls: arrayUnion(privatePhotoUrl, publicPhotoUrl),
  });
};

export const confirmMarcoAction = async (roomId: string, round: number) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, {
    marcoConfirmed: arrayUnion(uid),
  });
};

export const submitRegPhoto = async (
  roomId: string,
  round: number,
  photoUrl: string,
) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(roundRef, {
    [`publicPhotoUrls.${uid}`]: photoUrl,
  });
  await updateDoc(playerRef, {
    usedPhotoUrls: arrayUnion(photoUrl),
  });
};

export const submitMarcoPublicPhoto = async (
  roomId: string,
  round: number,
  photoUrl: string,
) => {
  const uid = requireUid();
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  await updateDoc(roundRef, {
    [`publicPhotoUrls.${uid}`]: photoUrl,
  });
  await updateDoc(playerRef, {
    usedPhotoUrls: arrayUnion(photoUrl),
  });
};

export const submitEliminatedClue = async (
  roomId: string,
  round: number,
  clue: string,
) => {
  const roundRef = doc(db, "rooms", roomId, "rounds", String(round));
  await updateDoc(roundRef, { eliminatedClue: clue });
};

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
  await updateDoc(roundRef, {
    [`investigationVotes.${uid}`]: targetUid,
  });
};

export const startGame = async (roomId: string) => {
  requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const playersRef = collection(db, "rooms", roomId, "players");

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) {
      throw new Error("Room not found.");
    }
    const roomData = roomSnap.data() as RoomData;

    // Guard: if another client's transaction already started the game, bail out.
    // Without this, all clients run concurrent transactions with different shuffles
    // and the last one to commit overwrites the Marco assignment, resulting in all Regs.
    if (roomData.state === "playing") return;

    const playersSnap = await getDocs(query(playersRef, orderBy("joinedAt", "asc")));
    if (playersSnap.size < 4) {
      throw new Error("Need at least 4 players to start.");
    }
    const everyoneReady = playersSnap.docs.every((d) => d.data().isReady === true);
    if (!everyoneReady) {
      throw new Error("All players must be ready first.");
    }

    const { marcoCount, rounds, photosPerPlayer } = getGameConfig(playersSnap.size);
    const shuffledIds = fisherYatesShuffle(playersSnap.docs.map((d) => d.id));

    for (let i = 0; i < shuffledIds.length; i++) {
      const playerRef = doc(db, "rooms", roomId, "players", shuffledIds[i]);
      tx.update(playerRef, { role: i < marcoCount ? "Marco" : "Reg" });
    }

    // Reset all stale game state from any previous game so old eliminated players
    // and round data can't bleed into the new game (fixes: old eliminatedPlayerIds showing).
    tx.update(roomRef, {
      state: "playing",
      marcoCount,
      rounds,
      photosPerPlayer,
      gamePhase: deleteField(),
      currentRound: deleteField(),
      eliminatedPlayerIds: deleteField(),
      investigatedPlayerIds: deleteField(),
      winner: deleteField(),
      lastActiveAt: serverTimestamp(),
    });
  });
};
