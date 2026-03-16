import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentDeleted } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

initializeApp();

const db = getFirestore();
const MAIN_ROOM_ID = "main";
const PRESENCE_TIMEOUT_MS = 30 * 1000;
const WAITING_PLAYER_TIMEOUT_MS = 10 * 60 * 1000;

export const onRoomCreated = onDocumentCreated("rooms/{roomId}", async () => {
  await db.doc("stats/rooms").set(
    {
      count: FieldValue.increment(1),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true },
  );
});

export const onRoomDeleted = onDocumentDeleted("rooms/{roomId}", async () => {
  await db.doc("stats/rooms").set(
    {
      count: FieldValue.increment(-1),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true },
  );
});

export const cleanupRooms = onSchedule("every 1 minutes", async () => {
  const presenceCutoff = Timestamp.fromDate(new Date(Date.now() - PRESENCE_TIMEOUT_MS));
  const waitingPlayerCutoff = Timestamp.fromDate(
    new Date(Date.now() - WAITING_PLAYER_TIMEOUT_MS),
  );
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

  if (roomsSnap.empty) {
    return;
  }

  for (const roomDoc of roomsSnap.docs) {
    const roomData = roomDoc.data() as {
      playerCount?: number;
      waitingSince?: Timestamp | null;
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
      const playerData = playerDoc.data() as {
        lastSeenAt?: Timestamp;
        joinedAt?: Timestamp;
      };
      const lastSeenAt = playerData.lastSeenAt;
      const joinedAt = playerData.joinedAt;
      const isStalePresence =
        !lastSeenAt || lastSeenAt.toMillis() <= presenceCutoff.toMillis();
      const isWaitingTimeout =
        roomIsWaiting &&
        !!joinedAt &&
        joinedAt.toMillis() <= waitingPlayerCutoff.toMillis();

      if (isStalePresence || isWaitingTimeout) {
        batch.delete(playerDoc.ref);
        batch.set(
          db.doc(`users/${playerDoc.id}`),
          { activeRoomId: null },
          { merge: true },
        );
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
    const shouldResetState = roomData.state === "playing" && remainingPlayers.length < 2;

    if (hasWrites || shouldUpdateCount || shouldResetState) {
      const updates: Record<string, unknown> = {
        playerCount: remainingPlayers.length,
        lastActiveAt: FieldValue.serverTimestamp(),
        waitingSince:
          remainingPlayers.length <= 1
            ? FieldValue.serverTimestamp()
            : roomData.waitingSince ?? null,
      };
      if (shouldResetState) {
        updates.state = "waiting";
      }
      batch.update(roomDoc.ref, updates);
      hasWrites = true;
    }

    if (hasWrites) {
      await batch.commit();
    }
  }
});
