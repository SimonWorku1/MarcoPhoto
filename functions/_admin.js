/**
 * Shared Firebase Admin SDK initializer for local scripts.
 * Automatically picks up service-account.json from the project root.
 */
const fs = require("fs");
const path = require("path");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const PROJECT_ID = "marcophoto-9cb75";

const envKey = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const defaultKey = path.resolve(__dirname, "../service-account.json");
const keyPath = envKey ?? (fs.existsSync(defaultKey) ? defaultKey : null);

if (!keyPath) {
  console.error(`
✗  No service-account key found.

To get one (takes ~30 seconds):
  1. Open: https://console.firebase.google.com/project/${PROJECT_ID}/settings/serviceaccounts/adminsdk
  2. Click "Generate new private key" and save the file as:
       ${defaultKey}

The file is already listed in .gitignore so it won't be committed.
`);
  process.exit(1);
}

initializeApp({ credential: cert(keyPath), projectId: PROJECT_ID });

module.exports = { db: getFirestore(), FieldValue, PROJECT_ID, ROOM_ID: "main" };
