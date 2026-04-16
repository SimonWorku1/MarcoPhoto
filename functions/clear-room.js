#!/usr/bin/env node
/**
 * clear-room.js  —  npm run clear
 *
 * Kicks every player out of the room and wipes all game data.
 * Everyone is sent back to the home screen on their device.
 * The room is left empty and ready for a fresh lobby.
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
  console.log(`\n🚪  Clearing room "${ROOM_ID}" (all players removed)…\n`);

  const roomRef = db.collection("rooms").doc(ROOM_ID);
  const roomSnap = await roomRef.get();
  if (!roomSnap.exists) {
    console.error(`  ✗  Room "${ROOM_ID}" not found.`);
    process.exit(1);
  }

  // 1. Delete all round documents (and nested private/ subcollections) first
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

  // 2. Delete all player documents — this triggers the client-side kick detection,
  //    sending every connected device back to the home screen.
  const playersSnap = await roomRef.collection("players").get();
  if (!playersSnap.empty) {
    const batch = db.batch();
    playersSnap.docs.forEach((d) => batch.delete(d.ref));
    await batch.commit();
    console.log(`  ✓  ${playersSnap.size} player(s) removed`);
  } else {
    console.log("  ✓  No players to remove");
  }

  // 3. Reset room document to a clean empty state
  await roomRef.update({
    state: "waiting",
    playerCount: 0,
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
  console.log("  ✓  Room wiped clean");

  console.log("\n✅  Done! Everyone has been sent to the home screen.\n");
}

main().catch((err) => {
  console.error("\n✗  Clear failed:", err.message);
  process.exit(1);
});
