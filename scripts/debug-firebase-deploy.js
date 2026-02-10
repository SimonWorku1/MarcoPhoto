import { execSync } from "node:child_process";

const ENDPOINT =
  "http://127.0.0.1:7244/ingest/4988ccff-451a-4fe9-8186-fb8250a36e70";
const RUN_ID = "firebase-deploy-01";

const log = async (payload) => {
  try {
    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        timestamp: Date.now(),
      }),
    });
  } catch (_) {
    // ignore logging failures
  }
};

const runCommand = async (command, hypothesisId) => {
  let stdout = "";
  let error = null;
  try {
    stdout = execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (err) {
    error = {
      message: err?.message,
      stdout: err?.stdout?.toString?.(),
      stderr: err?.stderr?.toString?.(),
      status: err?.status,
    };
  }

  await log({
    runId: RUN_ID,
    hypothesisId,
    location: "scripts/debug-firebase-deploy.js:28",
    message: "firebase_cli_command",
    data: {
      command,
      stdout: stdout?.slice(0, 4000) || null,
      error,
    },
  });
};

const main = async () => {
  // #region agent log
  await log({
    runId: RUN_ID,
    hypothesisId: "H1",
    location: "scripts/debug-firebase-deploy.js:45",
    message: "start_debug",
    data: { cwd: process.cwd() },
  });
  // #endregion

  // #region agent log
  await runCommand("firebase login:list", "H2");
  // #endregion

  // #region agent log
  await runCommand("firebase projects:list", "H1");
  // #endregion

  // #region agent log
  await runCommand("firebase use", "H1");
  // #endregion

  // #region agent log
  await runCommand(
    "firebase firestore:databases:list --project marcophoto-9cb75 --json",
    "H3",
  );
  // #endregion

  // #region agent log
  await runCommand(
    "firebase deploy --only functions --project marcophoto-9cb75 --json",
    "H4",
  );
  // #endregion
};

main();
