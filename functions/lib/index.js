"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupRooms = exports.onRoomDeleted = exports.onRoomCreated = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const firestore_2 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const WAITING_WINDOW_MS = 10 * 60 * 1000;
exports.onRoomCreated = (0, firestore_2.onDocumentCreated)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({
        count: firestore_1.FieldValue.increment(1),
        updatedAt: firestore_1.FieldValue.serverTimestamp(),
    }, { merge: true });
});
exports.onRoomDeleted = (0, firestore_2.onDocumentDeleted)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({
        count: firestore_1.FieldValue.increment(-1),
        updatedAt: firestore_1.FieldValue.serverTimestamp(),
    }, { merge: true });
});
exports.cleanupRooms = (0, scheduler_1.onSchedule)("every 5 minutes", async () => {
    const cutoff = firestore_1.Timestamp.fromDate(new Date(Date.now() - WAITING_WINDOW_MS));
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
