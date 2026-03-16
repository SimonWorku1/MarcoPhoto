"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupRooms = exports.onRoomDeleted = exports.onRoomCreated = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const firestore_2 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const MAIN_ROOM_ID = "main";
const PRESENCE_TIMEOUT_MS = 30 * 1000;
const WAITING_PLAYER_TIMEOUT_MS = 10 * 60 * 1000;
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
exports.cleanupRooms = (0, scheduler_1.onSchedule)("every 1 minutes", async () => {
    var _a, _b;
    const presenceCutoff = firestore_1.Timestamp.fromDate(new Date(Date.now() - PRESENCE_TIMEOUT_MS));
    const waitingPlayerCutoff = firestore_1.Timestamp.fromDate(new Date(Date.now() - WAITING_PLAYER_TIMEOUT_MS));
    const mainRoomRef = db.collection("rooms").doc(MAIN_ROOM_ID);
    const mainRoomSnap = await mainRoomRef.get();
    if (!mainRoomSnap.exists) {
        await mainRoomRef.set({
            state: "waiting",
            createdAt: firestore_1.FieldValue.serverTimestamp(),
            lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
            playerCount: 0,
            waitingSince: firestore_1.FieldValue.serverTimestamp(),
        });
    }
    const roomsSnap = await db.collection("rooms").get();
    if (roomsSnap.empty) {
        return;
    }
    for (const roomDoc of roomsSnap.docs) {
        const roomData = roomDoc.data();
        const playersSnap = await roomDoc.ref
            .collection("players")
            .orderBy("joinedAt", "asc")
            .get();
        const roomIsWaiting = roomData.state !== "playing";
        const batch = db.batch();
        let hasWrites = false;
        if (Object.prototype.hasOwnProperty.call(roomData, "hostUid")) {
            batch.update(roomDoc.ref, { hostUid: firestore_1.FieldValue.delete() });
            hasWrites = true;
        }
        const remainingPlayers = [];
        for (const playerDoc of playersSnap.docs) {
            const playerData = playerDoc.data();
            const lastSeenAt = playerData.lastSeenAt;
            const joinedAt = playerData.joinedAt;
            const isStalePresence = !lastSeenAt || lastSeenAt.toMillis() <= presenceCutoff.toMillis();
            const isWaitingTimeout = roomIsWaiting &&
                !!joinedAt &&
                joinedAt.toMillis() <= waitingPlayerCutoff.toMillis();
            if (isStalePresence || isWaitingTimeout) {
                batch.delete(playerDoc.ref);
                batch.set(db.doc(`users/${playerDoc.id}`), { activeRoomId: null }, { merge: true });
                hasWrites = true;
            }
            else {
                if (Object.prototype.hasOwnProperty.call(playerData, "isHost")) {
                    batch.update(playerDoc.ref, { isHost: firestore_1.FieldValue.delete() });
                    hasWrites = true;
                }
                remainingPlayers.push(playerDoc);
            }
        }
        const shouldUpdateCount = ((_a = roomData.playerCount) !== null && _a !== void 0 ? _a : remainingPlayers.length) !== remainingPlayers.length;
        const shouldResetState = roomData.state === "playing" && remainingPlayers.length < 2;
        if (hasWrites || shouldUpdateCount || shouldResetState) {
            const updates = {
                playerCount: remainingPlayers.length,
                lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
                waitingSince: remainingPlayers.length <= 1
                    ? firestore_1.FieldValue.serverTimestamp()
                    : (_b = roomData.waitingSince) !== null && _b !== void 0 ? _b : null,
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
