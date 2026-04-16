#!/usr/bin/env node
/**
 * reset-room.js  —  npm run reset
 *
 * Resets the game back to a fresh lobby.
 * Players STAY in the room — they just need to ready up again.
 * All rounds, roles, scores, and game progress are wiped.
 */

const { db, FieldValue, ROOM_ID } = require("./_admin");

async function deleteCollection(colRef) {
  const snap = await colRef.get();
  if (snap.empty) return 0;
  const batch = db.batch();
  snap.docs.forEach((d) => batch.delete(d.ref));
  await batch.commit();
  return snap.size;
}

async function main() {
  console.log(`\n🔄  Resetting room "${ROOM_ID}" (players stay, game resets)…\n`);

  const roomRef = db.collection("rooms").doc(ROOM_ID);
  const roomSnap = await roomRef.get();
  if (!roomSnap.exists) {
    console.error(`  ✗  Room "${ROOM_ID}" not found.`);
    process.exit(1);
  }

  // 1. Reset room document
  await roomRef.update({
    state: "waiting",
    gamePhase: FieldValue.delete(),
    currentRound: FieldValue.delete(),
    rounds: FieldValue.delete(),
    marcoCount: FieldValue.delete(),
    eliminatedPlayerIds: FieldValue.delete(),
    investigatedPlayerIds: FieldValue.delete(),
    winner: FieldValue.delete(),
    lastActiveAt: FieldValue.serverTimestamp(),
    waitingSince: FieldValue.serverTimestamp(),
  });
  console.log("  ✓  Room document reset to waiting state");

  // 2. Reset all players (clear role & ready state, keep them in the room)
  const playersSnap = await roomRef.collection("players").get();
  if (!playersSnap.empty) {
    const batch = db.batch();
    playersSnap.docs.forEach((d) =>
      batch.update(d.ref, {
        role: FieldValue.delete(),
        isReady: false,
        votekickCount: FieldValue.delete(),
      }),
    );
    await batch.commit();
    console.log(`  ✓  ${playersSnap.size} player(s) reset`);
  }

  // 3. Delete all round documents (and nested private/ subcollections)
  const roundsSnap = await roomRef.collection("rounds").get();
  if (!roundsSnap.empty) {
    for (const roundDoc of roundsSnap.docs) {
      await deleteCollection(roundDoc.ref.collection("private"));
    }
    const batch = db.batch();
    roundsSnap.docs.forEach((d) => batch.delete(d.ref));
    await batch.commit();
    console.log(`  ✓  ${roundsSnap.size} round(s) deleted`);
  }

  console.log("\n✅  Done! Players are in the lobby — ready up to start a new game.\n");
}

main().catch((err) => {
  console.error("\n✗  Reset failed:", err.message);
  process.exit(1);
});
