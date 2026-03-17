import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

initializeApp();

const db = getFirestore();
const MAIN_ROOM_ID = "main";
const PRESENCE_TIMEOUT_MS = 30 * 1000;
const WAITING_PLAYER_TIMEOUT_MS = 10 * 60 * 1000;
const VOTE_KICK_MIN_THRESHOLD = 2;

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

export const onPlayerVotekickUpdated = onDocumentUpdated(
  "rooms/{roomId}/players/{playerId}",
  async (event) => {
    const before = event.data?.before.data() as { votekickCount?: number } | undefined;
    const after = event.data?.after.data() as { votekickCount?: number } | undefined;

    if (!before || !after) return;

    const beforeCount = before.votekickCount ?? 0;
    const afterCount = after.votekickCount ?? 0;

    console.log(`[onPlayerVotekickUpdated] votekickCount ${beforeCount} -> ${afterCount}`);

    if (afterCount <= beforeCount) return;

    const { roomId, playerId } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists) return;

    const roomData = roomSnap.data() as { playerCount?: number; state?: string; waitingSince?: Timestamp | null };
    const playerCount = roomData.playerCount ?? 0;
    const votesNeeded = Math.max(VOTE_KICK_MIN_THRESHOLD, Math.ceil((playerCount - 1) / 2));

    console.log(`[onPlayerVotekickUpdated] playerCount=${playerCount} votesNeeded=${votesNeeded} afterCount=${afterCount}`);

    if (afterCount < votesNeeded) {
      console.log(`[onPlayerVotekickUpdated] threshold not reached, skipping kick`);
      return;
    }

    console.log(`[onPlayerVotekickUpdated] kicking player ${playerId}`);

    const nextCount = Math.max(playerCount - 1, 0);
    const batch = db.batch();
    batch.delete(db.doc(`rooms/${roomId}/players/${playerId}`));
    batch.set(db.doc(`users/${playerId}`), { activeRoomId: null }, { merge: true });

    const roomUpdates: Record<string, unknown> = {
      playerCount: nextCount,
      lastActiveAt: FieldValue.serverTimestamp(),
      waitingSince: nextCount <= 1 ? FieldValue.serverTimestamp() : roomData.waitingSince ?? null,
    };
    if (nextCount < 2) {
      roomUpdates.state = "waiting";
    }
    batch.update(roomRef, roomUpdates);

    await batch.commit();
    console.log(`[onPlayerVotekickUpdated] player ${playerId} kicked, new playerCount=${nextCount}`);
  },
);

export const onRoomStateChanged = onDocumentUpdated("rooms/{roomId}", async (event) => {
  const before = event.data?.before.data() as { state?: string } | undefined;
  const after = event.data?.after.data() as { state?: string } | undefined;

  if (!before || !after) return;
  if (before.state === after.state) return;
  if (after.state !== "waiting") return;

  const { roomId } = event.params;
  console.log(`[onRoomStateChanged] room ${roomId} transitioned to waiting — resetting votekick data`);

  const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
  if (playersSnap.empty) return;

  const batch = db.batch();
  for (const playerDoc of playersSnap.docs) {
    const data = playerDoc.data() as { votekickCount?: number };
    if ((data.votekickCount ?? 0) > 0) {
      batch.update(playerDoc.ref, { votekickCount: 0 });
    }
    const votesSnap = await playerDoc.ref.collection("votes").get();
    for (const voteDoc of votesSnap.docs) {
      batch.delete(voteDoc.ref);
    }
  }

  await batch.commit();
  console.log(`[onRoomStateChanged] votekick data reset for room ${roomId}`);
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
