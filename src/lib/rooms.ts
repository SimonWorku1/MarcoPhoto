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
  collection,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export type RoomState = "waiting" | "playing";

export type RoomSummary = {
  id: string;
  hostUid: string;
  state: RoomState;
  playerCount: number;
  createdAt?: unknown;
};

export type RoomPlayer = {
  id: string;
  name: string;
  isHost: boolean;
  isReady?: boolean;
  joinedAt?: unknown;
};

export type RoomData = RoomSummary & {
  waitingSince?: unknown;
  lastActiveAt?: unknown;
};

const MAIN_ROOM_ID = "main";
const MAX_ROOM_PLAYERS = 15;

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
    let isHost = false;

    if (!roomSnap.exists()) {
      isHost = true;
      tx.set(roomRef, {
        hostUid: uid,
        state: "waiting",
        createdAt: serverTimestamp(),
        lastActiveAt: serverTimestamp(),
        playerCount: 1,
        waitingSince: serverTimestamp(),
      });
      tx.set(playerRef, {
        name: displayName,
        isHost: true,
        isReady: false,
        joinedAt: serverTimestamp(),
        lastSeenAt: serverTimestamp(),
      });
    } else {
      const roomData = roomSnap.data() as RoomData;
      if (roomData.state !== "waiting") {
        throw new Error("Game already started.");
      }

      isHost = roomData.hostUid === uid;
      if (!playerSnap.exists()) {
        const currentCount = roomData.playerCount ?? 0;
        if (currentCount >= MAX_ROOM_PLAYERS) {
          throw new Error("Room is full (15 players max).");
        }
        tx.set(playerRef, {
          name: displayName,
          isHost,
          isReady: false,
          joinedAt: serverTimestamp(),
          lastSeenAt: serverTimestamp(),
        });
        tx.update(roomRef, {
          playerCount: currentCount + 1,
          lastActiveAt: serverTimestamp(),
          waitingSince: currentCount + 1 <= 1 ? serverTimestamp() : roomData.waitingSince ?? null,
        });
      } else {
        tx.set(
          playerRef,
          {
            name: displayName,
            lastSeenAt: serverTimestamp(),
          },
          { merge: true },
        );
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

    return { roomId: MAIN_ROOM_ID, isHost };
  });
};

export const leaveRoom = async (roomId: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const playerRef = doc(db, "rooms", roomId, "players", uid);
  const userRef = doc(db, "users", uid);
  const playersRef = collection(db, "rooms", roomId, "players");
  const playersSnap = await getDocs(query(playersRef, orderBy("joinedAt", "asc")));
  const nextHostDoc = playersSnap.docs.find((docSnap) => docSnap.id !== uid) ?? null;

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
      if (nextCount > 0 && roomData.hostUid === uid && nextHostDoc) {
        updates.hostUid = nextHostDoc.id;
      }
      tx.update(roomRef, updates);
      if (nextCount > 0 && roomData.hostUid === uid && nextHostDoc) {
        tx.update(nextHostDoc.ref, { isHost: true });
      }
    }

    tx.delete(playerRef);
    const userSnap = await tx.get(userRef);
    if (userSnap.exists()) {
      tx.set(
        userRef,
        {
          activeRoomId: null,
        },
        { merge: true },
      );
    }
  });
};

export const kickPlayer = async (roomId: string, playerUid: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const playerRef = doc(db, "rooms", roomId, "players", playerUid);
  const playerUserRef = doc(db, "users", playerUid);

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) {
      throw new Error("Room not found.");
    }
    const roomData = roomSnap.data() as RoomData;
    if (roomData.hostUid !== uid) {
      throw new Error("Only the host can kick players.");
    }
    if (playerUid === uid) {
      throw new Error("Host cannot kick themselves.");
    }

    const nextCount = Math.max((roomData.playerCount ?? 1) - 1, 0);
    tx.update(roomRef, {
      playerCount: nextCount,
      lastActiveAt: serverTimestamp(),
      waitingSince: nextCount <= 1 ? serverTimestamp() : roomData.waitingSince ?? null,
    });
    tx.delete(playerRef);
    tx.set(
      playerUserRef,
      {
        activeRoomId: null,
      },
      { merge: true },
    );
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

export const startGame = async (roomId: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const roomSnap = await getDoc(roomRef);
  if (!roomSnap.exists()) {
    throw new Error("Room not found.");
  }
  if ((roomSnap.data() as RoomData).hostUid !== uid) {
    throw new Error("Only the host can start the game.");
  }
  const playersRef = collection(db, "rooms", roomId, "players");
  const playersSnap = await getDocs(query(playersRef, orderBy("joinedAt", "asc")));
  if (playersSnap.empty) {
    throw new Error("Need at least one player.");
  }
  const everyoneReady = playersSnap.docs.every((docSnap) => docSnap.data().isReady === true);
  if (!everyoneReady) {
    throw new Error("All players must be ready first.");
  }
  await updateDoc(roomRef, {
    state: "playing",
    lastActiveAt: serverTimestamp(),
  });
};
