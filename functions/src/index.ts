import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentDeleted } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

initializeApp();

const db = getFirestore();
const PRESENCE_TIMEOUT_MS = 30 * 1000;

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
  const cutoff = Timestamp.fromDate(new Date(Date.now() - PRESENCE_TIMEOUT_MS));
  const roomsSnap = await db.collection("rooms").get();

  if (roomsSnap.empty) {
    return;
  }

  for (const roomDoc of roomsSnap.docs) {
    const roomData = roomDoc.data() as {
      hostUid?: string;
      playerCount?: number;
      waitingSince?: Timestamp | null;
    };
    const playersSnap = await roomDoc.ref
      .collection("players")
      .orderBy("joinedAt", "asc")
      .get();
    const batch = db.batch();
    let hasWrites = false;

    const remainingPlayers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
    for (const playerDoc of playersSnap.docs) {
      const playerData = playerDoc.data() as { lastSeenAt?: Timestamp };
      const lastSeenAt = playerData.lastSeenAt;
      const isStale =
        !lastSeenAt || lastSeenAt.toMillis() <= cutoff.toMillis();
      if (isStale) {
        batch.delete(playerDoc.ref);
        batch.set(
          db.doc(`users/${playerDoc.id}`),
          { activeRoomId: null },
          { merge: true },
        );
        hasWrites = true;
      } else {
        remainingPlayers.push(playerDoc);
      }
    }

    if (remainingPlayers.length === 0) {
      batch.delete(roomDoc.ref);
      hasWrites = true;
    } else {
      const currentHostUid = roomData.hostUid ?? remainingPlayers[0].id;
      const hasHost = remainingPlayers.some((player) => player.id === currentHostUid);
      const nextHostUid = hasHost ? currentHostUid : remainingPlayers[0].id;
      const shouldUpdateCount =
        (roomData.playerCount ?? remainingPlayers.length) !== remainingPlayers.length;
      const shouldUpdateHost = nextHostUid !== roomData.hostUid;

      if (hasWrites || shouldUpdateCount || shouldUpdateHost) {
        const updates: Record<string, unknown> = {
          playerCount: remainingPlayers.length,
          lastActiveAt: FieldValue.serverTimestamp(),
          waitingSince:
            remainingPlayers.length <= 1
              ? FieldValue.serverTimestamp()
              : roomData.waitingSince ?? null,
        };
        if (shouldUpdateHost) {
          updates.hostUid = nextHostUid;
        }
        batch.update(roomDoc.ref, updates);
        hasWrites = true;
        if (shouldUpdateHost) {
          const nextHostDoc = remainingPlayers.find((player) => player.id === nextHostUid);
          if (nextHostDoc) {
            batch.update(nextHostDoc.ref, { isHost: true });
          }
        }
      }
    }

    if (hasWrites) {
      await batch.commit();
    }
  }
});
