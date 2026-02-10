import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentDeleted } from "firebase-functions/v2/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

initializeApp();

const db = getFirestore();
const WAITING_WINDOW_MS = 10 * 60 * 1000;

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

export const cleanupRooms = onSchedule("every 5 minutes", async () => {
  const cutoff = Timestamp.fromDate(new Date(Date.now() - WAITING_WINDOW_MS));
  const roomsSnap = await db
    .collection("rooms")
    .where("playerCount", "<=", 1)
    .where("waitingSince", "<=", cutoff)
    .get();

  if (roomsSnap.empty) {
    return;
  }

  for (const roomDoc of roomsSnap.docs) {
    const playersSnap = await roomDoc.ref.collection("players").get();
    const batch = db.batch();
    playersSnap.docs.forEach((playerDoc) => batch.delete(playerDoc.ref));
    batch.delete(roomDoc.ref);
    await batch.commit();
  }
});
