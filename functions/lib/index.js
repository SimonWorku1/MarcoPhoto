"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupRooms = exports.onRoundDocUpdated = exports.onRoomStateChanged = exports.onPlayerVotekickUpdated = exports.onRoomDeleted = exports.onRoomCreated = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const storage_1 = require("firebase-admin/storage");
const firestore_2 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
const MAIN_ROOM_ID = "main";
// NOTE: Temporarily disable idle-based player removals for playtesting.
// (Set these back to reasonable values before production.)
const PRESENCE_TIMEOUT_MS = 365 * 24 * 60 * 60 * 1000; // 1 year
const WAITING_PLAYER_TIMEOUT_MS = 365 * 24 * 60 * 60 * 1000; // 1 year
const GAME_INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000;
const VOTE_KICK_MIN_THRESHOLD = 2;
// ── Shared game constants (mirrored from src/lib/gameConstants.ts) ────────────
const THEMES = [
    "Nature", "Food & Drink", "Architecture", "Night Life", "Travel",
    "Everyday Life", "Art & Culture", "Sports & Fitness", "Weather",
    "Urban Streets", "Water & Ocean", "Celebrations", "Work & Study",
    "Family & Friends", "Pets & Animals", "Sunsets & Skies", "Markets & Shops",
    "Texture & Patterns", "Motion & Speed", "Silence & Stillness",
];
const CLUE_BANK = [
    "calm", "tense", "lonely", "joyful", "awkward", "nostalgic", "hopeful", "uneasy",
    "broken", "messy", "clean", "dark", "bright", "fragile", "worn", "fresh",
    "hidden", "open", "empty", "crowded", "weird", "normal", "lost", "found",
    "moving", "still", "waiting", "rushing", "stuck", "fleeting", "heavy", "light",
    "sharp", "blurry", "loud", "quiet", "rough", "smooth", "warm", "cold",
    "together", "apart", "watched", "ignored", "contained", "free", "grounded", "floating",
];
const pickClueOptions = (n) => {
    const shuffled = [...CLUE_BANK].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
};
const pickUnusedTheme = (usedThemes) => {
    const available = THEMES.filter((t) => !usedThemes.includes(t));
    const pool = available.length > 0 ? available : THEMES;
    return pool[Math.floor(Math.random() * pool.length)];
};
const makeEmptyRound = (theme, clueOptions) => ({
    roundPhase: "upload",
    theme,
    clueOptions,
    submissions: {},
    marcoSubmission: null,
    marcoConfirmed: [],
    eliminatedPlayerId: null,
    selectedClue: null,
    investigationVotes: {},
    investigatedPlayerId: null,
    advanceToInvestigation: false,
});
// ── Room stats ───────────────────────────────────────────────────────────────
exports.onRoomCreated = (0, firestore_2.onDocumentCreated)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({ count: firestore_1.FieldValue.increment(1), updatedAt: firestore_1.FieldValue.serverTimestamp() }, { merge: true });
});
exports.onRoomDeleted = (0, firestore_2.onDocumentDeleted)("rooms/{roomId}", async () => {
    await db.doc("stats/rooms").set({ count: firestore_1.FieldValue.increment(-1), updatedAt: firestore_1.FieldValue.serverTimestamp() }, { merge: true });
});
// ── Votekick: server-side player removal ─────────────────────────────────────
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
// ── Reset when room goes back to waiting ─────────────────────────────────────
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
    for (const playerDoc of playersSnap.docs) {
        const playerData = playerDoc.data();
        const playerUpdates = {};
        if (((_c = playerData.votekickCount) !== null && _c !== void 0 ? _c : 0) > 0)
            playerUpdates.votekickCount = 0;
        if (wasPlaying) {
            if (playerData.role !== undefined)
                playerUpdates.role = firestore_1.FieldValue.delete();
            playerUpdates.isReady = false;
        }
        if (Object.keys(playerUpdates).length > 0)
            batch.update(playerDoc.ref, playerUpdates);
        const votesSnap = await playerDoc.ref.collection("votes").get();
        for (const voteDoc of votesSnap.docs)
            batch.delete(voteDoc.ref);
    }
    if (wasPlaying) {
        batch.update(roomRef, {
            gamePhase: firestore_1.FieldValue.delete(),
            currentRound: firestore_1.FieldValue.delete(),
            eliminatedPlayerIds: firestore_1.FieldValue.delete(),
            investigatedPlayerIds: firestore_1.FieldValue.delete(),
            usedThemes: firestore_1.FieldValue.delete(),
            winner: firestore_1.FieldValue.delete(),
            marcoCount: firestore_1.FieldValue.delete(),
            rounds: firestore_1.FieldValue.delete(),
            photosPerPlayer: firestore_1.FieldValue.delete(),
        });
        console.log(`[onRoomStateChanged] cleared all game fields for ${roomId}`);
    }
    await batch.commit();
    if (wasPlaying) {
        // Delete all round subdocs so the next game starts with a clean slate
        try {
            const roundsSnap = await db.collection(`rooms/${roomId}/rounds`).get();
            if (!roundsSnap.empty) {
                const roundBatch = db.batch();
                for (const roundDoc of roundsSnap.docs) {
                    // Delete private subcollection docs first
                    const privateSnap = await roundDoc.ref.collection("private").get();
                    for (const privateDoc of privateSnap.docs)
                        roundBatch.delete(privateDoc.ref);
                    roundBatch.delete(roundDoc.ref);
                }
                await roundBatch.commit();
                console.log(`[onRoomStateChanged] deleted ${roundsSnap.size} round doc(s) for ${roomId}`);
            }
        }
        catch (err) {
            console.warn(`[onRoomStateChanged] failed to delete round docs for ${roomId}:`, err);
        }
        // Delete all photos uploaded for this room from Storage
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
// ── Round doc phase transitions ───────────────────────────────────────────────
exports.onRoundDocUpdated = (0, firestore_2.onDocumentUpdated)("rooms/{roomId}/rounds/{roundNum}", async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
    // ── Phase 1: upload → elimination ────────────────────────────────────────
    if (after.roundPhase === "upload") {
        if (roomData.gamePhase !== "round-upload" && roomData.gamePhase !== "round-action")
            return;
        const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
        const submissions = (_c = after.submissions) !== null && _c !== void 0 ? _c : {};
        const eliminatedIds = (_d = roomData.eliminatedPlayerIds) !== null && _d !== void 0 ? _d : [];
        const activePlayerCount = playersSnap.docs.filter((d) => !eliminatedIds.includes(d.id)).length;
        const totalPlayers = activePlayerCount;
        if (Object.keys(submissions).length < totalPlayers)
            return;
        console.log(`[onRoundDocUpdated] All photos submitted — advancing to elimination, round ${roundNum}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "elimination" });
        batch.update(roomRef, { gamePhase: "round-elimination", lastActiveAt: firestore_1.FieldValue.serverTimestamp() });
        await batch.commit();
        return;
    }
    // ── Phase 2: elimination → clue ──────────────────────────────────────────
    if (after.roundPhase === "elimination") {
        if (roomData.gamePhase !== "round-elimination")
            return;
        const marcoCount = (_e = roomData.marcoCount) !== null && _e !== void 0 ? _e : 1;
        const confirmed = (_f = after.marcoConfirmed) !== null && _f !== void 0 ? _f : [];
        if (confirmed.length < marcoCount)
            return;
        const marcoSubmission = after.marcoSubmission;
        if (!marcoSubmission)
            return;
        const { eliminatedPlayerId, marcoPlayerId } = marcoSubmission;
        const submissions = (_g = after.submissions) !== null && _g !== void 0 ? _g : {};
        const marcoPhotoUrl = (_h = submissions[marcoPlayerId]) !== null && _h !== void 0 ? _h : null;
        if (!marcoPhotoUrl) {
            console.warn(`[onRoundDocUpdated] Marco ${marcoPlayerId} has no submission, cannot advance`);
            return;
        }
        const eliminatedIds = (_j = roomData.eliminatedPlayerIds) !== null && _j !== void 0 ? _j : [];
        const newEliminatedIds = [...eliminatedIds, eliminatedPlayerId];
        console.log(`[onRoundDocUpdated] Marco action confirmed — advancing to clue, round ${roundNum}`);
        const batch = db.batch();
        // Write private doc readable only by the eliminated player
        const privateRef = db.doc(`rooms/${roomId}/rounds/${roundNum}/private/reveal`);
        batch.set(privateRef, { marcoPhotoUrl, forPlayerId: eliminatedPlayerId });
        batch.update(roundRef, {
            roundPhase: "clue",
            eliminatedPlayerId,
        });
        batch.update(roomRef, {
            gamePhase: "eliminated-reveal",
            eliminatedPlayerIds: newEliminatedIds,
            lastActiveAt: firestore_1.FieldValue.serverTimestamp(),
        });
        await batch.commit();
        return;
    }
    // ── Phase 3: clue → reveal ───────────────────────────────────────────────
    if (after.roundPhase === "clue" && !before.selectedClue && after.selectedClue) {
        if (roomData.gamePhase !== "eliminated-reveal")
            return;
        console.log(`[onRoundDocUpdated] Clue submitted — advancing to reveal, round ${roundNum}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "reveal" });
        batch.update(roomRef, { gamePhase: "photo-reveal", lastActiveAt: firestore_1.FieldValue.serverTimestamp() });
        await batch.commit();
        return;
    }
    // ── Phase 4: reveal → vote ───────────────────────────────────────────────
    if (after.roundPhase === "reveal" && after.advanceToInvestigation && !before.advanceToInvestigation) {
        // Guard: skip stale/duplicate CF invocations — only advance if room is still in photo-reveal.
        // Without this, a late Phase 4 invocation can overwrite "round-upload" back to "investigation"
        // after Phase 5 has already advanced the game to the next round.
        if (roomData.gamePhase !== "photo-reveal") {
            console.log(`[onRoundDocUpdated] Phase 4 skipped for round ${roundNum} — room gamePhase is ${roomData.gamePhase}, not photo-reveal`);
            return;
        }
        console.log(`[onRoundDocUpdated] Advancing to investigation, round ${roundNum}`);
        const batch = db.batch();
        batch.update(roundRef, { roundPhase: "vote" });
        batch.update(roomRef, { gamePhase: "investigation", lastActiveAt: firestore_1.FieldValue.serverTimestamp() });
        await batch.commit();
        return;
    }
    // ── Phase 5: vote → done ─────────────────────────────────────────────────
    if (after.roundPhase === "vote") {
        if (roomData.gamePhase !== "investigation")
            return;
        const votes = (_k = after.investigationVotes) !== null && _k !== void 0 ? _k : {};
        const playersSnap = await db.collection(`rooms/${roomId}/players`).get();
        const eliminatedIds = (_l = roomData.eliminatedPlayerIds) !== null && _l !== void 0 ? _l : [];
        const eligibleVoters = playersSnap.docs.filter((d) => !eliminatedIds.includes(d.id));
        if (Object.keys(votes).length < eligibleVoters.length)
            return;
        // Tally votes
        const tallies = {};
        for (const targetId of Object.values(votes)) {
            tallies[targetId] = ((_m = tallies[targetId]) !== null && _m !== void 0 ? _m : 0) + 1;
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
            ? [...((_o = roomData.investigatedPlayerIds) !== null && _o !== void 0 ? _o : []), investigatedPlayerId]
            : ((_p = roomData.investigatedPlayerIds) !== null && _p !== void 0 ? _p : []);
        const marcoIds = playersSnap.docs
            .filter((d) => d.data().role === "Marco")
            .map((d) => d.id);
        const allMarcosInvestigated = marcoIds.every((id) => newInvestigatedIds.includes(id));
        // Use the round path param (not roomData.currentRound) so a client-side advance that already
        // incremented currentRound doesn't cause the CF to misread this as the final round.
        const currentRound = parseInt(roundNum);
        const roundLimit = (_q = roomData.rounds) !== null && _q !== void 0 ? _q : 2;
        // Guard: if the client already advanced past this round, skip CF processing to avoid
        // a race where both client and CF both advance and the CF incorrectly ends the game.
        if (((_r = roomData.currentRound) !== null && _r !== void 0 ? _r : 1) > currentRound) {
            console.log(`[onRoundDocUpdated] Round ${roundNum} already advanced by client (room at ${roomData.currentRound}), skipping vote→done CF step`);
            return;
        }
        console.log(`[onRoundDocUpdated] Votes tallied, round ${roundNum}. Tie=${isTie}, investigated=${investigatedPlayerId}, currentRound=${currentRound}, roundLimit=${roundLimit}`);
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
            const priorUsedThemes = (_s = roomData.usedThemes) !== null && _s !== void 0 ? _s : [];
            const nextTheme = pickUnusedTheme(priorUsedThemes);
            const newUsedThemes = priorUsedThemes.length < 20 ? [...priorUsedThemes, nextTheme] : [nextTheme];
            const nextClueOptions = pickClueOptions(10);
            console.log(`[onRoundDocUpdated] Starting round ${nextRound} — theme: ${nextTheme}`);
            const nextRoundRef = db.doc(`rooms/${roomId}/rounds/${nextRound}`);
            batch.set(nextRoundRef, makeEmptyRound(nextTheme, nextClueOptions));
            batch.update(roomRef, {
                gamePhase: "round-upload",
                currentRound: nextRound,
                investigatedPlayerIds: newInvestigatedIds,
                usedThemes: newUsedThemes,
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
