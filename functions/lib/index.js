"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupRooms = exports.onRoundDocUpdated = exports.onPlayerPhotosUploaded = exports.onRoomStateChanged = exports.onPlayerVotekickUpdated = exports.onRoomDeleted = exports.onRoomCreated = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const storage_1 = require("firebase-admin/storage");
const firestore_2 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const MAIN_ROOM_ID = "main";
const PRESENCE_TIMEOUT_MS = 30 * 1000;
const WAITING_PLAYER_TIMEOUT_MS = 10 * 60 * 1000;
const GAME_INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000;
const VOTE_KICK_MIN_THRESHOLD = 2;
const makeEmptyRound = () => ({
    roundPhase: "action",
    eliminatedPlayerId: null,
    privatePhotoUrl: null,
    marcoSubmissions: {},
    marcoConfirmed: [],
    publicPhotoUrls: {},
    eliminatedClue: null,
    investigationVotes: {},
    investigatedPlayerId: null,
    advanceToInvestigation: false,
});
// ── Room stats ──────────────────────────────────────────────────────────────
exports.onRoomCreated = (0, firestore_2.onDocumentCreated)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({ count: firestore_1.FieldValue.increment(1), updatedAt: firestore_1.FieldValue.serverTimestamp() }, { merge: true });
});
exports.onRoomDeleted = (0, firestore_2.onDocumentDeleted)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({ count: firestore_1.FieldValue.increment(-1), updatedAt: firestore_1.FieldValue.serverTimestamp() }, { merge: true });
});
// ── Votekick: server-side player removal ────────────────────────────────────
exports.onPlayerVotekickUpdated = (0, firestore_2.onDocumentUpdated)("rooms/{roomId}/players/{playerId}", async (event) => {
    var _a, _b, _c, _d, _e, _f;
    const before = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before.data();
    const after = (_b = event.data) === null || _b === void 0 ? void 0 : _b.after.data();
    if (!before || !after)
        return;
    const beforeCount = (_c = before.votekickCount) !== null && _c !== void 0 ? _c : 0;
    const afterCount = (_d = after.votekickCount) !== null && _d !== void 0 ? _d : 0;
    if (afterCount <= beforeCount)
        return;
    const { roomId, playerId } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists)
        return;
    const roomData = roomSnap.data();
    const playerCount = (_e = roomData.playerCount) !== null && _e !== void 0 ? _e : 0;
    const votesNeeded = Math.max(VOTE_KICK_MIN_THRESHOLD, Math.ceil((playerCount - 1) / 2));
    console.log(`[onPlayerVotekickUpdated] ${playerId}: ${beforeCount}->${afterCount}, need ${votesNeeded}`);
    if (afterCount < votesNeeded)
        return;
    const nextCount = Math.max(playerCount - 1, 0);
    const batch = db.batch();
    batch.delete(db.doc(`rooms/${roomId}/players/${playerId}`));
    batch.set(db.doc(`users/${playerId}`), { activeRoomId: null }, { merge: true });
    const roomUpdates = {
        playerCount: nextCount,
        lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
        waitingSince: nextCount <= 1 ? firestore_1.FieldValue.serverTimestamp() : (_f = roomData.waitingSince) !== null && _f !== void 0 ? _f : null,
    };
    if (nextCount < 2)
        roomUpdates.state = "waiting";
    batch.update(roomRef, roomUpdates);
    await batch.commit();
    console.log(`[onPlayerVotekickUpdated] kicked ${playerId}, playerCount now ${nextCount}`);
});
// ── Votekick count reset when room goes back to waiting ─────────────────────
exports.onRoomStateChanged = (0, firestore_2.onDocumentUpdated)("rooms/{roomId}", async (event) => {
    var _a, _b, _c;
    const before = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before.data();
    const after = (_b = event.data) === null || _b === void 0 ? void 0 : _b.after.data();
    if (!before || !after || before.state === after.state || after.state !== "waiting")
        return;
    const { roomId } = event.params;
    const wasPlaying = before.state === "playing";
    console.log(`[onRoomStateChanged] ${roomId} → waiting (wasPlaying=${wasPlaying}), clearing state`);
    const roomRef = db.doc(`rooms/${roomId}`);
    const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
    const batch = db.batch();
    // Always reset votekick data on all remaining players
    for (const playerDoc of playersSnap.docs) {
        const playerData = playerDoc.data();
        const playerUpdates = {};
        if (((_c = playerData.votekickCount) !== null && _c !== void 0 ? _c : 0) > 0)
            playerUpdates.votekickCount = 0;
        // Clear game-specific fields if the game was in progress
        if (wasPlaying) {
            if (playerData.role !== undefined)
                playerUpdates.role = firestore_1.FieldValue.delete();
            if (playerData.photoUrls !== undefined)
                playerUpdates.photoUrls = firestore_1.FieldValue.delete();
            if (playerData.usedPhotoUrls !== undefined)
                playerUpdates.usedPhotoUrls = firestore_1.FieldValue.delete();
            if (playerData.hasUploadedPhotos !== undefined)
                playerUpdates.hasUploadedPhotos = firestore_1.FieldValue.delete();
            playerUpdates.isReady = false;
        }
        if (Object.keys(playerUpdates).length > 0) {
            batch.update(playerDoc.ref, playerUpdates);
        }
        const votesSnap = await playerDoc.ref.collection("votes").get();
        for (const voteDoc of votesSnap.docs)
            batch.delete(voteDoc.ref);
    }
    // Clear game fields from the room doc
    if (wasPlaying) {
        batch.update(roomRef, {
            gamePhase: firestore_1.FieldValue.delete(),
            currentRound: firestore_1.FieldValue.delete(),
            eliminatedPlayerIds: firestore_1.FieldValue.delete(),
            investigatedPlayerIds: firestore_1.FieldValue.delete(),
            winner: firestore_1.FieldValue.delete(),
            marcoCount: firestore_1.FieldValue.delete(),
            rounds: firestore_1.FieldValue.delete(),
            photosPerPlayer: firestore_1.FieldValue.delete(),
        });
        console.log(`[onRoomStateChanged] cleared all game fields for ${roomId}`);
    }
    await batch.commit();
    // Delete all photos uploaded for this room from Storage
    if (wasPlaying) {
        try {
            const bucket = (0, storage_1.getStorage)().bucket();
            await bucket.deleteFiles({ prefix: `marcophotos/${roomId}/` });
            console.log(`[onRoomStateChanged] deleted storage photos for ${roomId}`);
        }
        catch (err) {
            console.warn(`[onRoomStateChanged] failed to delete storage photos for ${roomId}:`, err);
        }
    }
});
// ── Photo upload complete → start round 1 ───────────────────────────────────
exports.onPlayerPhotosUploaded = (0, firestore_2.onDocumentUpdated)("rooms/{roomId}/players/{playerId}", async (event) => {
    var _a, _b;
    const before = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before.data();
    const after = (_b = event.data) === null || _b === void 0 ? void 0 : _b.after.data();
    if (!before || !after)
        return;
    if (before.hasUploadedPhotos === after.hasUploadedPhotos)
        return;
    if (!after.hasUploadedPhotos)
        return;
    const { roomId } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists)
        return;
    const roomData = roomSnap.data();
    if (roomData.state !== "playing" || roomData.gamePhase)
        return;
    const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
    const allUploaded = playersSnap.docs.every((d) => d.data().hasUploadedPhotos === true);
    if (!allUploaded) {
        console.log(`[onPlayerPhotosUploaded] waiting for more players to upload`);
        return;
    }
    const round1Ref = db.doc(`rooms/${roomId}/rounds/1`);
    await round1Ref.set(makeEmptyRound());
    await roomRef.update({
        gamePhase: "round-action",
        currentRound: 1,
        eliminatedPlayerIds: [],
        investigatedPlayerIds: [],
        winner: null,
        lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
    });
    console.log(`[onPlayerPhotosUploaded] all uploaded — round 1 started for ${roomId}`);
});
// ── Round doc phase transitions ──────────────────────────────────────────────
exports.onRoundDocUpdated = (0, firestore_2.onDocumentUpdated)("rooms/{roomId}/rounds/{roundNum}", async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const before = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before.data();
    const after = (_b = event.data) === null || _b === void 0 ? void 0 : _b.after.data();
    if (!before || !after)
        return;
    const { roomId, roundNum } = event.params;
    const roomRef = db.doc(`rooms/${roomId}`);
    const roundRef = event.data.after.ref;
    const roomSnap = await roomRef.get();
    if (!roomSnap.exists)
        return;
    const roomData = roomSnap.data();
    // ── Phase 1 → 2: all Marcos confirmed + all active Regs submitted ────────
    if (after.roundPhase === "action") {
        const marcoCount = (_c = roomData.marcoCount) !== null && _c !== void 0 ? _c : 1;
        const confirmed = (_d = after.marcoConfirmed) !== null && _d !== void 0 ? _d : [];
        if (confirmed.length < marcoCount)
            return;
        const confirmedMarcoId = confirmed[0];
        const confirmedSubmission = (_e = after.marcoSubmissions) === null || _e === void 0 ? void 0 : _e[confirmedMarcoId];
        if (!confirmedSubmission)
            return;
        const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
        const eliminatedIds = (_f = roomData.eliminatedPlayerIds) !== null && _f !== void 0 ? _f : [];
        const activeRegs = playersSnap.docs.filter((d) => d.data().role !== "Marco" && !eliminatedIds.includes(d.id));
        const publicPhotoUrls = (_g = after.publicPhotoUrls) !== null && _g !== void 0 ? _g : {};
        const allRegsSubmitted = activeRegs.every((d) => !!publicPhotoUrls[d.id]);
        if (!allRegsSubmitted)
            return;
        console.log(`[onRoundDocUpdated] All actions complete — advancing to clue, round ${roundNum}`);
        const newEliminatedIds = [...eliminatedIds, confirmedSubmission.eliminatedPlayerId];
        const batch = db.batch();
        batch.update(roundRef, {
            roundPhase: "clue",
            eliminatedPlayerId: confirmedSubmission.eliminatedPlayerId,
            privatePhotoUrl: confirmedSubmission.privatePhotoUrl,
            [`publicPhotoUrls.${confirmedMarcoId}`]: confirmedSubmission.publicPhotoUrl,
        });
        batch.update(roomRef, {
            gamePhase: "eliminated-reveal",
            eliminatedPlayerIds: newEliminatedIds,
            lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
        });
        await batch.commit();
        return;
    }
    // ── Phase 2 → 3: eliminated clue submitted ───────────────────────────────
    if (after.roundPhase === "clue" && !before.eliminatedClue && after.eliminatedClue) {
        console.log(`[onRoundDocUpdated] Clue submitted — advancing to reveal, round ${roundNum}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "reveal" });
        batch.update(roomRef, { gamePhase: "photo-reveal", lastActiveAt: firestore_1.FieldValue.serverTimestamp() });
        await batch.commit();
        return;
    }
    // ── Phase 3 → 4: advance to investigation ────────────────────────────────
    if (after.roundPhase === "reveal" && after.advanceToInvestigation && !before.advanceToInvestigation) {
        console.log(`[onRoundDocUpdated] Advancing to investigation, round ${roundNum}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "vote" });
        batch.update(roomRef, { gamePhase: "investigation", lastActiveAt: firestore_1.FieldValue.serverTimestamp() });
        await batch.commit();
        return;
    }
    // ── Phase 4: tally investigation votes ───────────────────────────────────
    if (after.roundPhase === "vote") {
        const votes = (_h = after.investigationVotes) !== null && _h !== void 0 ? _h : {};
        const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
        const eliminatedIds = (_j = roomData.eliminatedPlayerIds) !== null && _j !== void 0 ? _j : [];
        const eligibleVoters = playersSnap.docs.filter((d) => !eliminatedIds.includes(d.id));
        if (Object.keys(votes).length < eligibleVoters.length)
            return;
        // Tally
        const tallies = {};
        for (const targetId of Object.values(votes)) {
            tallies[targetId] = ((_k = tallies[targetId]) !== null && _k !== void 0 ? _k : 0) + 1;
        }
        let maxVotes = 0;
        let topTargets = [];
        for (const [targetId, count] of Object.entries(tallies)) {
            if (count > maxVotes) {
                maxVotes = count;
                topTargets = [targetId];
            }
            else if (count === maxVotes) {
                topTargets.push(targetId);
            }
        }
        const isTie = topTargets.length > 1;
        const investigatedPlayerId = isTie ? null : topTargets[0];
        const newInvestigatedIds = investigatedPlayerId
            ? [...((_l = roomData.investigatedPlayerIds) !== null && _l !== void 0 ? _l : []), investigatedPlayerId]
            : ((_m = roomData.investigatedPlayerIds) !== null && _m !== void 0 ? _m : []);
        const marcoIds = playersSnap.docs
            .filter((d) => d.data().role === "Marco")
            .map((d) => d.id);
        const allMarcosInvestigated = marcoIds.every((id) => newInvestigatedIds.includes(id));
        const currentRound = (_o = roomData.currentRound) !== null && _o !== void 0 ? _o : 1;
        const roundLimit = (_p = roomData.rounds) !== null && _p !== void 0 ? _p : 3;
        console.log(`[onRoundDocUpdated] Votes tallied, round ${roundNum}. Tie=${isTie}, investigated=${investigatedPlayerId}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "done", investigatedPlayerId: investigatedPlayerId !== null && investigatedPlayerId !== void 0 ? investigatedPlayerId : null });
        if (allMarcosInvestigated) {
            console.log(`[onRoundDocUpdated] Regs win!`);
            batch.update(roomRef, {
                gamePhase: "game-over",
                winner: "Reg",
                investigatedPlayerIds: newInvestigatedIds,
                lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
            });
        }
        else if (currentRound >= roundLimit) {
            console.log(`[onRoundDocUpdated] Marcos win — rounds exhausted`);
            batch.update(roomRef, {
                gamePhase: "game-over",
                winner: "Marco",
                investigatedPlayerIds: newInvestigatedIds,
                lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
            });
        }
        else {
            const nextRound = currentRound + 1;
            console.log(`[onRoundDocUpdated] Starting round ${nextRound}`);
            const nextRoundRef = db.doc(`rooms/${roomId}/rounds/${nextRound}`);
            batch.set(nextRoundRef, makeEmptyRound());
            batch.update(roomRef, {
                gamePhase: "round-action",
                currentRound: nextRound,
                investigatedPlayerIds: newInvestigatedIds,
                lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
            });
        }
        await batch.commit();
    }
});
// ── Cleanup stale players ────────────────────────────────────────────────────
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
    if (roomsSnap.empty)
        return;
    const gameInactivityCutoff = firestore_1.Timestamp.fromDate(new Date(Date.now() - GAME_INACTIVITY_TIMEOUT_MS));
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
            const isStalePresence = !playerData.lastSeenAt || playerData.lastSeenAt.toMillis() <= presenceCutoff.toMillis();
            const isWaitingTimeout = roomIsWaiting && !!playerData.joinedAt &&
                playerData.joinedAt.toMillis() <= waitingPlayerCutoff.toMillis();
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
        const isGameInactive = roomData.state === "playing" &&
            !!roomData.lastActiveAt &&
            roomData.lastActiveAt.toMillis() <= gameInactivityCutoff.toMillis();
        const shouldResetState = (roomData.state === "playing" && remainingPlayers.length < 2) || isGameInactive;
        if (isGameInactive) {
            console.log(`[cleanupRooms] game in ${roomDoc.id} inactive for 10+ min — resetting to waiting`);
        }
        if (hasWrites || shouldUpdateCount || shouldResetState) {
            const updates = {
                playerCount: remainingPlayers.length,
                lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
                waitingSince: remainingPlayers.length <= 1
                    ? firestore_1.FieldValue.serverTimestamp()
                    : (_b = roomData.waitingSince) !== null && _b !== void 0 ? _b : null,
            };
            if (shouldResetState)
                updates.state = "waiting";
            batch.update(roomDoc.ref, updates);
            hasWrites = true;
        }
        if (hasWrites)
            await batch.commit();
    }
});
