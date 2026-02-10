import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  updateDoc,
  where,
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
  joinedAt?: unknown;
};

export type RoomData = RoomSummary & {
  waitingSince?: unknown;
};

const requireUid = () => {
  const uid = auth.currentUser?.uid;
  if (!uid) {
    throw new Error("Not signed in.");
  }
  return uid;
};

export const getActiveRoomId = async () => {
  const uid = requireUid();
  const userSnap = await getDoc(doc(db, "users", uid));
  if (!userSnap.exists()) {
    return null;
  }
  return (userSnap.data().activeRoomId as string | null) ?? null;
};

export const listenRoomsWaiting = (
  onRooms: (rooms: RoomSummary[]) => void,
) => {
  const roomsRef = collection(db, "rooms");
  const waitingQuery = query(
    roomsRef,
    where("state", "==", "waiting"),
    orderBy("createdAt", "desc"),
  );

  return onSnapshot(waitingQuery, (snapshot) => {
    const rooms = snapshot.docs.map((docSnap) => {
      const data = docSnap.data() as Omit<RoomSummary, "id">;
      return { id: docSnap.id, ...data };
    });
    onRooms(rooms);
  });
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

export const createRoom = async (displayName: string) => {
  const uid = requireUid();
  const roomsRef = collection(db, "rooms");
  const roomRef = doc(roomsRef);
  const userRef = doc(db, "users", uid);
  const playerRef = doc(db, "rooms", roomRef.id, "players", uid);

  return runTransaction(db, async (tx) => {
    const userSnap = await tx.get(userRef);
    if (userSnap.exists() && userSnap.data().activeRoomId) {
      throw new Error("You are already in a room.");
    }

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
      joinedAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
    });

    tx.set(
      userRef,
      {
        displayName,
        activeRoomId: roomRef.id,
      },
      { merge: true },
    );

    return { roomId: roomRef.id, isHost: true };
  });
};

export const joinRoom = async (roomId: string, displayName: string) => {
  const uid = requireUid();
  const roomRef = doc(db, "rooms", roomId);
  const userRef = doc(db, "users", uid);
  const playerRef = doc(db, "rooms", roomId, "players", uid);

  return runTransaction(db, async (tx) => {
    const roomSnap = await tx.get(roomRef);
    if (!roomSnap.exists()) {
      throw new Error("Room no longer exists.");
    }
    const roomData = roomSnap.data() as RoomData;
    if (roomData.state !== "waiting") {
      throw new Error("Room is no longer accepting players.");
    }

    const userSnap = await tx.get(userRef);
    if (userSnap.exists() && userSnap.data().activeRoomId) {
      throw new Error("You are already in a room.");
    }

    tx.set(playerRef, {
      name: displayName,
      isHost: false,
      joinedAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
    });

    const nextCount = (roomData.playerCount ?? 0) + 1;
    tx.update(roomRef, {
      playerCount: nextCount,
      lastActiveAt: serverTimestamp(),
      waitingSince: nextCount <= 1 ? serverTimestamp() : null,
    });

    tx.set(
      userRef,
      {
        displayName,
        activeRoomId: roomId,
      },
      { merge: true },
    );

    return { roomId, isHost: false };
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
      tx.update(roomRef, {
        playerCount: nextCount,
        lastActiveAt: serverTimestamp(),
        waitingSince: nextCount <= 1 ? serverTimestamp() : roomData.waitingSince ?? null,
      });
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
  await updateDoc(roomRef, {
    state: "playing",
    lastActiveAt: serverTimestamp(),
  });
};

export const listRoomsWaitingOnce = async () => {
  const roomsRef = collection(db, "rooms");
  const waitingQuery = query(
    roomsRef,
    where("state", "==", "waiting"),
    orderBy("createdAt", "desc"),
  );
  const snapshot = await getDocs(waitingQuery);
  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data() as Omit<RoomSummary, "id">;
    return { id: docSnap.id, ...data };
  });
};
