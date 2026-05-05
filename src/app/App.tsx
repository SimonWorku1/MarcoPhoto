import React, { useEffect, useMemo, useRef, useState } from "react";
import { BubbleButton } from "./components/BubbleButton";
import { RoundProgressBar } from "./components/RoundProgressBar";
import { AdSenseBanner } from "./components/AdSenseBanner";
import logo from "../assets/marco-photo-logo.png";
import { auth, ensureAnonymousAuth } from "../lib/firebase";
import {
  advanceRoundFromClue,
  advanceRoundFromElimination,
  advanceRoundFromReveal,
  advanceRoundFromVote,
  advanceRoundToElimination,
  advanceToInvestigation,
  confirmMarcoElimination,
  getActiveRoomId,
  joinMainRoom,
  leaveRoom,
  listenRoom,
  listenRoomPlayers,
  listenRound,
  listenRoundPrivate,
  setPlayerReady,
  startGame,
  submitClueWord,
  submitInvestigationVote,
  submitMarcoElimination,
  submitRoundPhoto,
  touchPlayer,
  upsertUserProfile,
  voteKickPlayer,
  type RoomData,
  type RoomPlayer,
  type RoundData,
} from "../lib/rooms";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";

type GameScreen =
  | "menu"
  | "lobby"
  | "role-reveal"
  | "round-theme"
  | "round-upload"
  | "round-elimination"
  | "eliminated-reveal"
  | "photo-reveal"
  | "investigation"
  | "game-over";
type Role = "Marco" | "Reg";

const NAME_STORAGE_KEY = "marcoPlayerName";

type MathQuestion = { question: string; answer: number };

const createMathQuestion = (): MathQuestion => {
  const tier = Math.random();
  let a: number, b: number, answer: number, question: string;
  if (tier < 0.4) {
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 20) + 1;
    answer = a + b;
    question = `${a} + ${b}`;
  } else if (tier < 0.7) {
    a = Math.floor(Math.random() * 20) + 10;
    b = Math.floor(Math.random() * (a - 1)) + 1;
    answer = a - b;
    question = `${a} − ${b}`;
  } else {
    a = Math.floor(Math.random() * 9) + 2;
    b = Math.floor(Math.random() * 9) + 2;
    answer = a * b;
    question = `${a} × ${b}`;
  }
  return { question, answer };
};

function MathSection({
  mathQ,
  mathInput,
  mathScore,
  mathFeedback,
  onInput,
  subtitle,
}: {
  mathQ: MathQuestion;
  mathInput: string;
  mathScore: number;
  mathFeedback: "correct" | null;
  onInput: (val: string) => void;
  subtitle?: string;
}) {
  return (
    <div className="space-y-4">
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-sm space-y-5">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Math Challenge</p>
          <p className="text-sm font-semibold text-blue-500">Score: {mathScore}</p>
        </div>
        <p className="text-5xl sm:text-6xl font-bold text-center">{mathQ.question} = ?</p>
        <input
          type="number"
          inputMode="numeric"
          value={mathInput}
          onChange={(e) => onInput(e.target.value)}
          placeholder="Answer"
          autoFocus
          className={`w-full text-center text-2xl border-2 rounded-full p-3 transition-colors ${
            mathFeedback === "correct"
              ? "border-green-400 bg-green-50 text-green-700"
              : "border-gray-300"
          }`}
        />
        {mathFeedback === "correct" && (
          <p className="text-green-600 font-semibold text-center text-lg">✓ Correct!</p>
        )}
      </div>
    </div>
  );
}

async function ensureJpeg(file: File): Promise<File> {
  const isHeic =
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    file.name.toLowerCase().endsWith(".heic") ||
    file.name.toLowerCase().endsWith(".heif");
  if (!isHeic) return file;
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error(
      "This browser can't read HEIC/HEIF photos. Open the app in Safari, or save your photos as JPEG before selecting them."
    );
  }
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0);
  bitmap.close();
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Canvas export failed"))), "image/jpeg", 0.85)
  );
  return new File([blob], file.name.replace(/\.(heic|heif)$/i, ".jpg"), { type: "image/jpeg" });
}

export default function App() {
  const [screen, setScreen] = useState<GameScreen>("menu");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [room, setRoom] = useState<RoomData | null>(null);
  const [players, setPlayers] = useState<RoomPlayer[]>([]);
  const [roundData, setRoundData] = useState<RoundData | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [savedName, setSavedName] = useState("");
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [hasRevealedRole, setHasRevealedRole] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [kickCandidate, setKickCandidate] = useState<RoomPlayer | null>(null);

  // Per-round single photo upload
  const roundPhotoInputRef = useRef<HTMLInputElement>(null);
  const roundCameraInputRef = useRef<HTMLInputElement>(null);
  const [roundPhotoFile, setRoundPhotoFile] = useState<File | null>(null);
  const [isRoundUploading, setIsRoundUploading] = useState(false);
  const [roundUploadError, setRoundUploadError] = useState<string | null>(null);

  // Eliminated player UI state
  const [showAllPhotosForEliminated, setShowAllPhotosForEliminated] = useState(false);

  // Marco elimination state
  const [marcoEliminationTarget, setMarcoEliminationTarget] = useState<string | null>(null);

  // Eliminated player clue selection
  const [selectedClueWord, setSelectedClueWord] = useState<string | null>(null);

  // Private reveal data (Marco photo URL shown only to eliminated player)
  const [privateRevealData, setPrivateRevealData] = useState<{
    marcoPhotoUrl: string;
    forPlayerId: string;
  } | null>(null);

  // Client-side theme reveal gate: track which round's theme has been acknowledged
  const [themeAcknowledgedRound, setThemeAcknowledgedRound] = useState(0);

  // Investigation vote state + persisted result for the result screen
  const [myVote, setMyVote] = useState<string | null>(null);
  const [savedInvestigatedPlayerId, setSavedInvestigatedPlayerId] = useState<string | null>(null);
  const [savedVoteComplete, setSavedVoteComplete] = useState(false);

  // Rules modal state
  const [showRules, setShowRules] = useState(false);
  const [rulesTab, setRulesTab] = useState<"rules" | "setup" | "flow">("rules");

  // Math question state (busywork for non-Marco players during round-elimination)
  const [mathQ, setMathQ] = useState<MathQuestion>(() => createMathQuestion());
  const [mathInput, setMathInput] = useState("");
  const [mathScore, setMathScore] = useState(0);
  const [mathFeedback, setMathFeedback] = useState<"correct" | null>(null);

  // Nudge button: shown after 12 s of no phase change during active game screens
  const phaseChangedAtRef = useRef<number>(Date.now());
  const [showNudge, setShowNudge] = useState(false);
  // Tracks whether this client has been confirmed in the players list at least
  // once for the current roomId. Used to distinguish "listener not yet loaded"
  // (false positive) from "genuinely removed / kicked" (true positive).
  const hasBeenInRoomRef = useRef(false);

  const uid = auth.currentUser?.uid;
  const currentPlayer = players.find((p) => p.id === uid) ?? null;
  const isCurrentPlayerReady = currentPlayer?.isReady === true;
  const isNameValid = useMemo(() => /[a-z0-9]/i.test(nameInput), [nameInput]);
  const canJoinGame = isNameSaved && isNameValid && authReady && !isBusy;
  const everyoneReady = players.length >= 4 && players.every((p) => p.isReady === true);
  const voteKickThreshold = Math.max(2, Math.ceil((players.length - 1) / 2));
  const eliminatedIds = room?.eliminatedPlayerIds ?? [];
  const activePlayers = players.filter((p) => !eliminatedIds.includes(p.id));
  const isEliminated = uid ? eliminatedIds.includes(uid) : false;
  const effectiveRole = (role ?? currentPlayer?.role ?? null) as Role | null;

  // Marco elimination derived state
  const existingProposal = roundData?.marcoSubmission ?? null;
  const hasSubmitted = uid ? roundData?.marcoSubmission?.marcoPlayerId === uid : false;
  const hasConfirmed = uid ? (roundData?.marcoConfirmed ?? []).includes(uid) : false;
  const marcoEligibleTargets = activePlayers.filter((p) => p.role !== "Marco");

  // ── Auth setup ────────────────────────────────────────────────────────────
  useEffect(() => {
    const storedName = localStorage.getItem(NAME_STORAGE_KEY);
    if (storedName) {
      setNameInput(storedName);
      setSavedName(storedName);
      setIsNameSaved(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    ensureAnonymousAuth()
      .then(async () => {
        if (!isMounted) return;
        setAuthReady(true);
        const activeRoomId = await getActiveRoomId();
        if (activeRoomId) {
          setRoomId(activeRoomId);
          setScreen("lobby");
        }
      })
      .catch((err: Error) => {
        if (isMounted) { setAuthReady(false); setError(err.message); }
      });
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (!authReady || !isNameSaved || !savedName) return;
    let isMounted = true;
    upsertUserProfile(savedName).catch((err: Error) => {
      if (isMounted) setError(err.message);
    });
    return () => { isMounted = false; };
  }, [authReady, isNameSaved, savedName]);

  // ── Room + players subscription ───────────────────────────────────────────
  useEffect(() => {
    if (!roomId) { setRoom(null); setPlayers([]); return; }
    const unsubRoom = listenRoom(roomId, (nextRoom) => {
      setRoom(nextRoom);
      if (!nextRoom) { setRoomId(null); setScreen("menu"); }
    });
    const unsubPlayers = listenRoomPlayers(roomId, setPlayers);
    return () => { unsubRoom(); unsubPlayers(); };
  }, [roomId]);

  // ── Round subscription ────────────────────────────────────────────────────
  useEffect(() => {
    if (!roomId || !room?.currentRound) { setRoundData(null); return; }
    const unsubRound = listenRound(roomId, room.currentRound, setRoundData);
    return () => unsubRound();
  }, [roomId, room?.currentRound]);

  // ── Detect kick / clear: redirect to menu if removed from the room ────────
  useEffect(() => {
    if (!roomId || !uid || !room) {
      // Room gone or not yet joined — reset the confirmation flag.
      hasBeenInRoomRef.current = false;
      return;
    }
    const isInRoom = players.some((p) => p.id === uid);
    if (isInRoom) {
      // Confirmed present — flag that we've genuinely been in this room.
      hasBeenInRoomRef.current = true;
      return;
    }
    // Not in the players list. Only act if we were confirmed in the room before
    // (guards against the brief window after setRoomId before the first snapshot).
    if (!hasBeenInRoomRef.current) return;

    // We were in the room and are now gone — kicked, cleared, or timed out.
    // Full reload clears stale React state (e.g. game-over stuck with wrong winner).
    hasBeenInRoomRef.current = false;
    window.location.reload();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, uid, players, room]);

  // ── Client-side upload→elimination transition (Cloud Function fallback) ───────
  useEffect(() => {
    if (!roomId || !room?.currentRound) return;
    if (room.gamePhase !== "round-upload" && room.gamePhase !== "round-action") return;
    if (!roundData || (roundData.roundPhase !== "upload" && roundData.roundPhase !== "action")) return;
    const submissions = roundData.submissions ?? {};
    const subCount = Object.keys(submissions).length;
    if (subCount < activePlayers.length || players.length < 4) return;
    advanceRoundToElimination(roomId, room.currentRound).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, roundData?.roundPhase, roundData?.submissions, players.length, room?.eliminatedPlayerIds?.length]);

  // ── Client-side elimination→eliminated-reveal transition (Cloud Function fallback) ───
  useEffect(() => {
    if (!roomId || !room?.currentRound || room.gamePhase !== "round-elimination") return;
    if (!roundData || roundData.roundPhase !== "elimination") return;
    const confirmed = roundData.marcoConfirmed ?? [];
    const marcoCount = room.marcoCount ?? 1;
    if (confirmed.length < marcoCount || !roundData.marcoSubmission) return;
    advanceRoundFromElimination(roomId, room.currentRound).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, room?.marcoCount, roundData?.roundPhase, roundData?.marcoConfirmed, roundData?.marcoSubmission]);

  // ── Client-side clue→photo-reveal transition (Cloud Function fallback) ───────
  useEffect(() => {
    if (!roomId || !room?.currentRound || room.gamePhase !== "eliminated-reveal") return;
    if (!roundData || roundData.roundPhase !== "clue") return;
    if (!roundData.selectedClue) return;
    advanceRoundFromClue(roomId, room.currentRound).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, roundData?.roundPhase, roundData?.selectedClue]);

  // ── Auto-advance to investigation once everyone votes on photo-reveal ────────
  useEffect(() => {
    if (!roomId || !room?.currentRound || room.gamePhase !== "photo-reveal") return;
    if (!roundData || roundData.roundPhase !== "reveal") return;
    if (roundData.advanceToInvestigation) return; // already triggered
    const votes = roundData.investigationVotes ?? {};
    const eligible = activePlayers;
    if (eligible.length === 0 || Object.keys(votes).length < eligible.length) return;
    advanceToInvestigation(roomId, room.currentRound).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, roundData?.roundPhase, roundData?.advanceToInvestigation, roundData?.investigationVotes, activePlayers.length]);

  // ── Client-side reveal→investigation transition (Cloud Function fallback) ────
  useEffect(() => {
    if (!roomId || !room?.currentRound || room.gamePhase !== "photo-reveal") return;
    if (!roundData || roundData.roundPhase !== "reveal") return;
    if (!roundData.advanceToInvestigation) return;
    advanceRoundFromReveal(roomId, room.currentRound).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, roundData?.roundPhase, roundData?.advanceToInvestigation]);

  // ── Client-side vote→done/next-round transition (Cloud Function fallback) ────
  useEffect(() => {
    if (!roomId || !room?.currentRound || room.gamePhase !== "investigation") return;
    if (!roundData || roundData.roundPhase !== "vote") return;
    const votes = roundData.investigationVotes ?? {};
    const eliminatedIds = room.eliminatedPlayerIds ?? [];
    const eligibleVoters = players.filter((p) => !eliminatedIds.includes(p.id));
    if (Object.keys(votes).length < eligibleVoters.length) return;

    // Compute winner client-side immediately so every client saves the result NOW,
    // before currentRound advances (which would switch the roundData subscription and
    // lose the investigatedPlayerId before it can be read from Firestore).
    const tallies: Record<string, number> = {};
    for (const targetId of Object.values(votes)) {
      tallies[targetId] = (tallies[targetId] ?? 0) + 1;
    }
    let maxVotes = 0;
    let topTargets: string[] = [];
    for (const [targetId, count] of Object.entries(tallies)) {
      if (count > maxVotes) { maxVotes = count; topTargets = [targetId]; }
      else if (count === maxVotes) { topTargets.push(targetId); }
    }
    // Only set a winner when there is a strict majority; ties produce no investigation result.
    const computedWinnerId = topTargets.length === 1 ? topTargets[0] : null;
    if (computedWinnerId) setSavedInvestigatedPlayerId(computedWinnerId);
    setSavedVoteComplete(true);

    advanceRoundFromVote(roomId, room.currentRound, players).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, room?.currentRound, room?.gamePhase, roundData?.roundPhase, roundData?.investigationVotes, players]);

  // ── Private reveal subscription (only when eliminated player on eliminated-reveal) ──
  useEffect(() => {
    if (
      !roomId ||
      !room?.currentRound ||
      screen !== "eliminated-reveal" ||
      !uid ||
      uid !== roundData?.eliminatedPlayerId
    ) {
      setPrivateRevealData(null);
      return;
    }
    const unsub = listenRoundPrivate(roomId, room.currentRound, (data) => {
      if (data && data.forPlayerId === uid) setPrivateRevealData(data);
    });
    return () => unsub();
  }, [roomId, room?.currentRound, screen, uid, roundData?.eliminatedPlayerId]);

  // ── Heartbeat ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!roomId) return;
    let isActive = true;
    const sendHeartbeat = async () => {
      try { await touchPlayer(roomId); } catch { if (!isActive) return; }
    };
    sendHeartbeat();
    const interval = window.setInterval(sendHeartbeat, 5 * 60_000);
    return () => { isActive = false; window.clearInterval(interval); };
  }, [roomId]);

  // ── Screen transitions driven by server state ─────────────────────────────
  useEffect(() => {
    if (!room) return;

    // Room was reset (or is a fresh lobby) — snap everyone back to the lobby
    // and clear all local game state so a new game starts clean.
    if (room.state === "waiting") {
      if (screen === "lobby" || screen === "menu") return;
      setRole(null);
      setHasRevealedRole(false);
      setThemeAcknowledgedRound(0);
      setSavedInvestigatedPlayerId(null);
      setSavedVoteComplete(false);
      setMyVote(null);
      setRoundPhotoFile(null);
      setRoundUploadError(null);
      setScreen("lobby");
      return;
    }

    if (room.state === "playing") {
      // "round-action" is the legacy phase name used by older deployed Cloud Functions; treat as "round-upload"
      if (room.gamePhase === "round-upload" || room.gamePhase === "round-action") {
        // Don't auto-navigate away from the investigation result screen; wait for Continue
        if (screen === "investigation") return;
        if (!hasRevealedRole) { setScreen("role-reveal"); return; }
        // Show theme reveal once per round before photo upload
        if ((room.currentRound ?? 1) > themeAcknowledgedRound) {
          if (screen !== "round-theme") setScreen("round-theme");
          return;
        }
        if (screen !== "round-upload") {
          setRoundPhotoFile(null);
          setRoundUploadError(null);
          setIsRoundUploading(false);
          setScreen("round-upload");
        }
        return;
      }
      if (room.gamePhase === "round-elimination") {
        if (screen !== "round-elimination") {
          setMarcoEliminationTarget(null);
          setScreen("round-elimination");
        }
        return;
      }
      if (room.gamePhase === "eliminated-reveal" && screen !== "eliminated-reveal") {
        setScreen("eliminated-reveal");
        setSelectedClueWord(null);
        setShowAllPhotosForEliminated(false);
        return;
      }
      if (room.gamePhase === "photo-reveal" && screen !== "photo-reveal") {
        setScreen("photo-reveal");
        return;
      }
      if (room.gamePhase === "investigation" && screen !== "investigation" && screen !== "round-theme") {
        setScreen("investigation");
        setMyVote(null);
        return;
      }
      if (room.gamePhase === "game-over") {
        if (screen === "investigation") return; // Wait for Continue on investigation result screen
        if (screen !== "game-over") setScreen("game-over");
        return;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.state, room?.gamePhase, hasRevealedRole, themeAcknowledgedRound]);

  // ── Persist investigation result so it survives currentRound advancing ──────
  useEffect(() => {
    if (roundData?.investigatedPlayerId) {
      setSavedInvestigatedPlayerId(roundData.investigatedPlayerId);
    }
  }, [roundData?.investigatedPlayerId]);

  useEffect(() => {
    // Only reset myVote on round change; savedInvestigatedPlayerId must NOT be cleared here
    // because the investigation screen stays visible while currentRound has already advanced,
    // and clearing it immediately would wipe the result the user needs to see.
    setMyVote(null);
  }, [room?.currentRound]);

  // ── Reset math + per-round state on each new round ────────────────────────
  useEffect(() => {
    if (screen === "round-upload" || screen === "round-elimination" || screen === "round-theme") {
      setMathQ(createMathQuestion());
      setMathScore(0);
      setMathInput("");
      setMathFeedback(null);
    }
  }, [screen, room?.currentRound]);

  // ── Auto-start when everyone ready ───────────────────────────────────────
  useEffect(() => {
    if (!roomId || screen !== "lobby" || room?.state !== "waiting" || !everyoneReady || isBusy) return;
    let isCancelled = false;
    const autoStart = async () => {
      try { await startGame(roomId); } catch (err) {
        if (!isCancelled) setError((err as Error).message);
      }
    };
    autoStart();
    return () => { isCancelled = true; };
  }, [roomId, room?.state, screen, everyoneReady, isBusy]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleSaveName = async () => {
    setError(null);
    const trimmed = nameInput.trim();
    if (!trimmed || !isNameValid) { setError("Name must contain at least one letter or number."); return; }
    setIsBusy(true);
    try {
      await ensureAnonymousAuth();
      await upsertUserProfile(trimmed);
      setSavedName(trimmed);
      setIsNameSaved(true);
      localStorage.setItem(NAME_STORAGE_KEY, trimmed);
    } catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleJoinGame = async () => {
    setError(null); setIsBusy(true);
    try {
      const result = await joinMainRoom(savedName);
      setRoomId(result.roomId);
      setScreen("lobby");
    } catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleToggleReady = async () => {
    if (!roomId) return;
    setError(null); setIsBusy(true);
    try { await setPlayerReady(roomId, !isCurrentPlayerReady); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleLeaveRoom = async () => {
    if (!roomId) return;
    if (!window.confirm("Leave the room?")) return;
    setError(null); setIsBusy(true);
    // Clear before Firestore delete so the kick-detection effect does not also fire.
    hasBeenInRoomRef.current = false;
    try {
      await leaveRoom(roomId);
      window.location.reload();
    } catch (err) {
      hasBeenInRoomRef.current = true;
      setError((err as Error).message);
      setIsBusy(false);
    }
  };

  const handleRevealRole = () => {
    if (!currentPlayer?.role) return;
    setRole(currentPlayer.role as Role);
  };

  // ── Per-round photo upload ─────────────────────────────────────────────────
  const handleRoundPhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setRoundUploadError(null);
    setIsRoundUploading(true);
    try {
      const converted = await ensureJpeg(file);
      setRoundPhotoFile(converted);
    } catch (err) {
      setRoundUploadError((err as Error).message);
    } finally {
      setIsRoundUploading(false);
      e.target.value = "";
    }
  };

  const handleUploadRoundPhoto = async () => {
    if (!roomId || !room?.currentRound || !roundPhotoFile) return;
    setIsRoundUploading(true);
    setRoundUploadError(null);
    try {
      await submitRoundPhoto(roomId, room.currentRound, roundPhotoFile);
      // Keep isRoundUploading=true after success to prevent re-submission while
      // waiting for the Firestore listener to confirm roundData.submissions[uid].
    } catch (err) {
      setRoundUploadError((err as Error).message);
      setIsRoundUploading(false); // Only reset on failure so the user can retry
    }
  };

  // ── Marco elimination ─────────────────────────────────────────────────────
  const handleSubmitMarcoElimination = async () => {
    if (!roomId || !room?.currentRound || !marcoEliminationTarget) return;
    setError(null); setIsBusy(true);
    try { await submitMarcoElimination(roomId, room.currentRound, marcoEliminationTarget); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleConfirmMarcoElimination = async () => {
    if (!roomId || !room?.currentRound) return;
    setError(null); setIsBusy(true);
    try { await confirmMarcoElimination(roomId, room.currentRound); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Eliminated clue word ──────────────────────────────────────────────────
  const handleSubmitClueWord = async () => {
    if (!roomId || !room?.currentRound || !selectedClueWord) return;
    setError(null); setIsBusy(true);
    try { await submitClueWord(roomId, room.currentRound, selectedClueWord); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Nudge: reset timer whenever phase/screen advances ────────────────────
  useEffect(() => {
    phaseChangedAtRef.current = Date.now();
    setShowNudge(false);
  }, [room?.gamePhase, room?.currentRound, roundData?.roundPhase, screen]);

  useEffect(() => {
    const activeScreens: GameScreen[] = [
      "round-upload", "round-elimination", "eliminated-reveal", "photo-reveal", "investigation",
    ];
    if (!activeScreens.includes(screen)) { setShowNudge(false); return; }
    const check = () => {
      if (Date.now() - phaseChangedAtRef.current >= 12_000) setShowNudge(true);
    };
    const id = window.setInterval(check, 2_000);
    return () => window.clearInterval(id);
  }, [screen]);

  // ── Nudge handler: re-runs the correct advance check for the current phase ──
  const handleNudge = async () => {
    if (!roomId || !room?.currentRound) return;
    setError(null);
    const phase = room.gamePhase;
    try {
      if (phase === "round-upload" || phase === "round-action") {
        await advanceRoundToElimination(roomId, room.currentRound);
      } else if (phase === "round-elimination") {
        await advanceRoundFromElimination(roomId, room.currentRound);
      } else if (phase === "eliminated-reveal") {
        await advanceRoundFromClue(roomId, room.currentRound);
      } else if (phase === "photo-reveal") {
        await advanceRoundFromReveal(roomId, room.currentRound);
      } else if (phase === "investigation") {
        await advanceRoundFromVote(roomId, room.currentRound, players);
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // ── Photo reveal advance ──────────────────────────────────────────────────
  const handleAdvanceToInvestigation = async () => {
    if (!roomId || !room?.currentRound) return;
    setError(null); setIsBusy(true);
    try { await advanceToInvestigation(roomId, room.currentRound); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Investigation result: continue to next round or game-over ───────────────
  const handleContinueFromInvestigation = async () => {
    setSavedInvestigatedPlayerId(null);
    setSavedVoteComplete(false);
    const phase = room?.gamePhase;
    if (phase === "game-over") { setScreen("game-over"); return; }
    if (phase === "round-action" || phase === "round-upload") {
      // Old CF or client already advanced; navigate to the new round
      if (!hasRevealedRole) { setScreen("role-reveal"); return; }
      setScreen("round-theme");
      return;
    }
    // Still in investigation — advance client-side (no CF running)
    if (roomId && room?.currentRound) {
      setIsBusy(true); setError(null);
      try {
        await advanceRoundFromVote(roomId, room.currentRound, players);
        // advanceRoundFromVote sets round-upload or game-over; screen nav is guarded,
        // so navigate manually based on the new state
        setScreen("round-theme");
      } catch (err) { setError((err as Error).message); }
      finally { setIsBusy(false); }
    }
  };

  // ── Investigation vote (also used on photo-reveal for pre-voting) ─────────
  const handleVote = async (targetUid: string) => {
    if (!roomId || !room?.currentRound || myVote) return;
    setMyVote(targetUid);
    setError(null);
    try { await submitInvestigationVote(roomId, room.currentRound, targetUid); }
    catch (err) { setError((err as Error).message); setMyVote(null); }
  };

  // ── Vote kick ─────────────────────────────────────────────────────────────
  const handleKick = (player: RoomPlayer) => {
    if (!roomId || player.id === uid) return;
    setKickCandidate(player);
  };

  const confirmKick = async () => {
    if (!roomId || !kickCandidate) return;
    setError(null); setIsBusy(true);
    try {
      const result = await voteKickPlayer(roomId, kickCandidate.id);
      setKickCandidate(null);
      if (!result.kicked) {
        setError(`${kickCandidate.name} has ${result.voteCount}/${result.votesNeeded} votes.`);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally { setIsBusy(false); }
  };

  // ── Derived display helpers ───────────────────────────────────────────────
  const playerName = (id: string) => players.find((p) => p.id === id)?.name ?? id;
  const eliminatedPlayer = roundData?.eliminatedPlayerId
    ? players.find((p) => p.id === roundData.eliminatedPlayerId)
    : null;
  const submissionsGrid = Object.entries(roundData?.submissions ?? {});


  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8">
      <div className="w-full max-w-5xl text-center">

        {/* ── MENU ─────────────────────────────────────────────────────── */}
        {screen === "menu" && (
          <div className="space-y-6 sm:space-y-8">
            <img src={logo} alt="Marco Photo" className="w-full h-auto max-w-lg mx-auto mb-2 sm:mb-4" />
            <p className="text-base sm:text-lg lg:text-2xl mb-6 sm:mb-8">Get ready for a fun game!</p>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="w-full max-w-sm space-y-3">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => { setNameInput(e.target.value); setIsNameSaved(false); }}
                  placeholder="Enter your name"
                  className="border-2 border-gray-300 p-2 w-full text-center rounded-full"
                />
                <BubbleButton onClick={handleSaveName} disabled={!isNameValid || isBusy}>
                  {isNameSaved ? "Name Saved" : "Save Name"}
                </BubbleButton>
              </div>
              <BubbleButton onClick={handleJoinGame} disabled={!canJoinGame}>Join Game</BubbleButton>
              <p className="text-sm text-gray-500">One shared lobby, up to 19 players.</p>
              {!isNameValid && nameInput.length > 0 && (
                <p className="text-sm text-red-500">Name must contain at least one letter or number.</p>
              )}
              {!authReady && <p className="text-sm text-red-500">Waiting for sign-in...</p>}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <AdSenseBanner className="pt-2 opacity-90" />
          </div>
        )}

        {/* ── LOBBY ────────────────────────────────────────────────────── */}
        {screen === "lobby" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Game Lobby</h1>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-blue-500">Main Lobby</p>
              <p className="text-sm text-gray-500 mt-2">{players.length}/19 players joined</p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <p className="text-base sm:text-lg mb-4">Players</p>
              <div className="space-y-2">
                {players.map((player) => (
                  <div key={player.id} className="flex items-center justify-between border-b last:border-b-0 pb-2">
                    <span className="text-base sm:text-lg">
                      {player.name}{player.id === uid ? " (You)" : ""}
                    </span>
                    <div className="flex items-center gap-3">
                      {player.isReady && <span className="text-xs uppercase tracking-wide text-green-600">Ready</span>}
                      {player.id !== uid && (
                        <button type="button" onClick={() => handleKick(player)} disabled={isBusy}
                          className="text-sm font-semibold text-red-600 hover:text-red-700 disabled:text-red-300">
                          Vote Kick
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base sm:text-lg">
              {room?.state === "playing" ? "Game in progress."
                : players.length < 4 ? `Waiting for players… ${players.length}/4 minimum to start.`
                : everyoneReady ? "Everyone is ready. Starting game..."
                : "Waiting for everyone to ready up..."}
            </p>
            {room?.state !== "playing" && (
              <BubbleButton onClick={handleToggleReady} disabled={isBusy || !currentPlayer}>
                {isCurrentPlayerReady ? "Not Ready" : "Ready"}
              </BubbleButton>
            )}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <AdSenseBanner className="pt-2 opacity-90" />
          </div>
        )}

        {/* ── ROLE REVEAL ──────────────────────────────────────────────── */}
        {screen === "role-reveal" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl mb-4">Your Role</h1>
            {role ? (
              <>
                <div className={`text-4xl sm:text-6xl lg:text-8xl p-6 sm:p-10 rounded-3xl shadow-2xl ${
                  role === "Marco" ? "bg-blue-500 text-white" : "bg-white text-blue-500 border-4 border-blue-500"
                }`}>
                  {role === "Marco" ? "🏊 Marco 🏊" : "🧍 Reg 🧍"}
                </div>
                <p className="text-lg sm:text-2xl mt-6">
                  {role === "Marco" ? "You're a Marco! Pick targets and deceive the Regs." : "You're a Reg. Find the Marcos!"}
                </p>
                {role === "Marco" && (() => {
                  const fellowMarcos = players.filter((p) => p.role === "Marco" && p.id !== uid);
                  return fellowMarcos.length > 0 ? (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-left">
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Fellow Marcos</p>
                      <ul className="space-y-1">
                        {fellowMarcos.map((p) => (
                          <li key={p.id} className="text-base sm:text-lg font-medium text-blue-800">{p.name}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null;
                })()}
                <BubbleButton onClick={() => setHasRevealedRole(true)}>
                  Enter Game
                </BubbleButton>
              </>
            ) : (
              <BubbleButton onClick={handleRevealRole} disabled={!currentPlayer?.role}>
                Reveal Role
              </BubbleButton>
            )}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── ROUND THEME ──────────────────────────────────────────────── */}
        {screen === "round-theme" && (
          <div className="space-y-6 sm:space-y-8">
            <RoundProgressBar currentRound={room?.currentRound ?? 1} totalRounds={room?.rounds ?? 1} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Theme Reveal</h1>
            {roundData ? (
              <>
                <div className="bg-blue-500 text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                  <p className="text-sm uppercase tracking-widest mb-2 opacity-80">This round's theme</p>
                  <p className="text-4xl sm:text-6xl font-bold">{roundData.theme}</p>
                </div>
                <p className="text-base sm:text-lg text-gray-600">
                  Take a photo that fits this theme — you'll upload it next.
                </p>
                <BubbleButton onClick={() => setThemeAcknowledgedRound(room?.currentRound ?? 0)}>
                  Let's Go!
                </BubbleButton>
              </>
            ) : (
              <p className="text-gray-500">Loading theme…</p>
            )}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── ROUND UPLOAD ─────────────────────────────────────────────── */}
        {screen === "round-upload" && (
          <div className="space-y-6 sm:space-y-8">
            <RoundProgressBar currentRound={room?.currentRound ?? 1} totalRounds={room?.rounds ?? 1} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Upload Your Photo</h1>
            {roundData && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl px-4 py-3 inline-block">
                <p className="text-sm text-blue-500 uppercase tracking-wide">Theme</p>
                <p className="text-2xl font-bold text-blue-700">{roundData.theme}</p>
              </div>
            )}

            {isEliminated ? (
              // Eliminated players sit out — don't upload
              <div className="space-y-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
                  <p className="text-xl font-semibold text-red-700">You've been eliminated</p>
                  <p className="text-gray-500 mt-1">Sit back and watch this round unfold.</p>
                </div>
                <p className="text-gray-500">
                  {Object.keys(roundData?.submissions ?? {}).length}/{activePlayers.length} players submitted
                </p>
              </div>
            ) : uid && roundData?.submissions?.[uid] ? (
              // Already uploaded — show preview and wait
              <div className="space-y-4">
                <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                  <p className="text-xl text-green-700 font-semibold">Photo submitted!</p>
                  <p className="text-gray-600 mt-1">
                    {Object.keys(roundData.submissions).length}/{activePlayers.length} players submitted
                  </p>
                </div>
                <img
                  src={roundData.submissions[uid]}
                  alt="Your round photo"
                  className="mx-auto max-w-xs rounded-3xl shadow-lg"
                />
                <p className="text-gray-500">Waiting for everyone else to upload…</p>
              </div>
            ) : (
              // Not yet uploaded
              <div className="space-y-4">
                <p className="text-base sm:text-lg">
                  Select one photo from your camera roll that fits the theme.
                </p>
                <input
                  ref={roundPhotoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleRoundPhotoChange}
                />
                <input
                  ref={roundCameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={handleRoundPhotoChange}
                />
                {roundPhotoFile && (
                  <img
                    src={URL.createObjectURL(roundPhotoFile)}
                    alt="Preview"
                    className="mx-auto max-w-xs rounded-3xl shadow"
                  />
                )}
                {roundUploadError && <p className="text-sm text-red-500">{roundUploadError}</p>}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-3 justify-center flex-wrap">
                    <BubbleButton
                      onClick={() => roundPhotoInputRef.current?.click()}
                      disabled={isRoundUploading}
                    >
                      {roundPhotoFile ? "Change Photo" : "Select Photo"}
                    </BubbleButton>
                    <BubbleButton
                      onClick={() => roundCameraInputRef.current?.click()}
                      disabled={isRoundUploading}
                    >
                      Take Photo
                    </BubbleButton>
                  </div>
                  {roundPhotoFile && (
                    <BubbleButton onClick={handleUploadRoundPhoto} disabled={isRoundUploading}>
                      {isRoundUploading ? "Uploading…" : "Upload Photo"}
                    </BubbleButton>
                  )}
                </div>
              </div>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy || isRoundUploading}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── ROUND ELIMINATION ────────────────────────────────────────── */}
        {screen === "round-elimination" && (
          <div className="space-y-6 sm:space-y-8">
            <RoundProgressBar currentRound={room?.currentRound ?? 1} totalRounds={room?.rounds ?? 1} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">
              {effectiveRole === "Marco" && !isEliminated ? "Pick Your Target" : "Waiting…"}
            </h1>

            {/* Marco: see full grid + pick target */}
            {effectiveRole === "Marco" && !isEliminated && (
              <div className="space-y-6">
                {/* Submissions grid for Marco's reference */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">All submitted photos</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {submissionsGrid.map(([playerId, url]) => (
                      <div key={playerId} className="space-y-1">
                        <img
                          src={url}
                          alt={playerName(playerId)}
                          className="w-full aspect-square object-cover rounded-2xl shadow"
                        />
                        <p className="text-xs text-center text-gray-600 truncate font-medium">
                          {playerName(playerId)}{playerId === uid ? " (you)" : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Existing proposal from another Marco */}
                {existingProposal && !hasSubmitted && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 text-left">
                    <p className="font-semibold text-blue-700 mb-2">
                      {playerName(existingProposal.marcoPlayerId)} proposes eliminating:{" "}
                      <strong>{playerName(existingProposal.eliminatedPlayerId)}</strong>
                    </p>
                    {!hasConfirmed ? (
                      <BubbleButton onClick={handleConfirmMarcoElimination} disabled={isBusy} className="mt-2">
                        Confirm This Plan
                      </BubbleButton>
                    ) : (
                      <p className="text-green-600 font-semibold mt-2">
                        You confirmed. Waiting for other Marcos…
                      </p>
                    )}
                  </div>
                )}

                {/* Own submission status */}
                {hasSubmitted && (
                  <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                    <p className="text-green-700 font-semibold">
                      Your plan submitted: eliminate <strong>{playerName(roundData?.marcoSubmission?.eliminatedPlayerId ?? "")}</strong>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {(roundData?.marcoConfirmed ?? []).length}/{room?.marcoCount ?? 1} Marcos confirmed.
                    </p>
                  </div>
                )}

                {/* Target picker (always visible for Marco to override) */}
                <div className="space-y-3 text-left">
                  <p className="font-semibold">
                    {hasSubmitted ? "Override target:" : "Who to eliminate:"}
                  </p>
                  <div className="space-y-1">
                    {marcoEligibleTargets.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setMarcoEliminationTarget(p.id)}
                        className={`w-full px-4 py-3 rounded-full text-left border-2 transition-all ${
                          marcoEliminationTarget === p.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                  {marcoEliminationTarget && (
                    <BubbleButton onClick={handleSubmitMarcoElimination} disabled={isBusy}>
                      {hasSubmitted ? "Update Plan" : "Submit Plan"}
                    </BubbleButton>
                  )}
                </div>
              </div>
            )}

            {/* Regs and previously-eliminated players: busywork math */}
            {(effectiveRole === "Reg" || isEliminated) && (
              <MathSection
                mathQ={mathQ}
                mathInput={mathInput}
                mathScore={mathScore}
                mathFeedback={mathFeedback}
                onInput={(val) => {
                  setMathInput(val);
                  if (parseInt(val, 10) === mathQ.answer) {
                    setMathScore((s) => s + 1);
                    setMathFeedback("correct");
                    setTimeout(() => {
                      setMathFeedback(null);
                      setMathQ(createMathQuestion());
                      setMathInput("");
                    }, 600);
                  }
                }}
                subtitle="Stay busy while the Marcos decide…"
              />
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── ELIMINATED REVEAL ────────────────────────────────────────── */}
        {screen === "eliminated-reveal" && (
          <div className="space-y-6 sm:space-y-8">
            <RoundProgressBar currentRound={room?.currentRound ?? 1} totalRounds={room?.rounds ?? 1} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Player Eliminated</h1>
            <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6">
              <p className="text-xl font-semibold text-red-700">
                {eliminatedPlayer?.name ?? "Unknown"} has been eliminated this round.
              </p>
            </div>

            {/* Eliminated player: sees Marco photo and picks a clue word */}
            {uid === roundData?.eliminatedPlayerId && (
              <div className="space-y-5">
                <p className="text-base sm:text-lg font-semibold">
                  This is the Marco's photo — only you can see it:
                </p>
                {privateRevealData ? (
                  <img
                    src={privateRevealData.marcoPhotoUrl}
                    alt="Marco's photo (private)"
                    className="mx-auto max-w-xs rounded-3xl shadow-lg border-4 border-blue-400"
                  />
                ) : (
                  <p className="text-gray-400">Loading private photo…</p>
                )}

                {/* Toggle to view all submitted photos for reference */}
                <button
                  type="button"
                  onClick={() => setShowAllPhotosForEliminated((v) => !v)}
                  className="text-sm font-semibold text-blue-500 hover:text-blue-600 underline"
                >
                  {showAllPhotosForEliminated ? "Hide all photos" : "View all photos"}
                </button>
                {showAllPhotosForEliminated && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">All submitted photos</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {submissionsGrid.map(([playerId, url]) => {
                        const isMarco = playerId === roundData?.marcoSubmission?.marcoPlayerId;
                        return (
                          <div key={playerId} className="space-y-1">
                            <div className={`rounded-2xl overflow-hidden shadow ${isMarco ? "ring-4 ring-blue-400" : ""}`}>
                              <img
                                src={url}
                                alt={playerName(playerId)}
                                className="w-full aspect-square object-cover"
                              />
                            </div>
                            <p className="text-xs text-center text-gray-600 truncate font-medium">
                              {playerName(playerId)}{playerId === uid ? " (you)" : ""}{isMarco ? " 🏊" : ""}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {roundData?.selectedClue ? (
                  <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                    <p className="text-green-700">
                      Clue submitted: <strong className="text-2xl">{roundData.selectedClue}</strong>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Pick one word to describe the Marco's photo to the group:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {(roundData?.clueOptions ?? []).map((word) => (
                        <button
                          key={word}
                          type="button"
                          onClick={() => setSelectedClueWord(word)}
                          className={`px-4 py-2 rounded-full border-2 text-base font-medium transition-all ${
                            selectedClueWord === word
                              ? "border-blue-500 bg-blue-500 text-white scale-105"
                              : "border-gray-300 bg-white text-gray-700 hover:border-blue-300"
                          }`}
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                    {selectedClueWord && (
                      <BubbleButton onClick={handleSubmitClueWord} disabled={isBusy}>
                        Submit Clue: "{selectedClueWord}"
                      </BubbleButton>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Everyone else: waiting for the clue */}
            {uid !== roundData?.eliminatedPlayerId && (
              <div className="space-y-3">
                {roundData?.selectedClue ? (
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6">
                    <p className="text-gray-700">
                      {eliminatedPlayer?.name ?? "They"}'s clue:{" "}
                      <strong className="text-2xl">{roundData.selectedClue}</strong>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Waiting for {eliminatedPlayer?.name ?? "the eliminated player"} to choose their clue…
                  </p>
                )}
              </div>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── PHOTO REVEAL ─────────────────────────────────────────────── */}
        {screen === "photo-reveal" && (
          <div className="space-y-6 sm:space-y-8">
            <RoundProgressBar currentRound={room?.currentRound ?? 1} totalRounds={room?.rounds ?? 1} />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Photos This Round</h1>

            {/* Clue banner */}
            {roundData?.selectedClue && (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-5">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                  {eliminatedPlayer?.name}'s clue
                </p>
                <p className="text-4xl sm:text-5xl font-bold text-gray-800">{roundData.selectedClue}</p>
              </div>
            )}

            {/* Full submissions grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {submissionsGrid.map(([playerId, url]) => (
                <div key={playerId} className="space-y-1">
                  <img
                    src={url}
                    alt={playerName(playerId)}
                    className="w-full aspect-square object-cover rounded-2xl shadow"
                  />
                  <p className="text-sm text-center text-gray-600 truncate font-medium">
                    {playerName(playerId)}
                  </p>
                </div>
              ))}
            </div>

            {/* Investigation pre-vote: pick who you suspect is Marco */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-semibold text-gray-700">
                Who do you want to investigate?
              </p>
              {isEliminated ? (
                <p className="text-gray-400 text-sm">You've been eliminated and cannot vote.</p>
              ) : (myVote || roundData?.investigationVotes?.[uid ?? ""]) ? (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-5">
                  <p className="text-blue-700 font-semibold">
                    You voted for {playerName(myVote ?? roundData?.investigationVotes?.[uid ?? ""] ?? "")}.
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {Object.keys(roundData?.investigationVotes ?? {}).length}/{activePlayers.length} voted
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {activePlayers.filter((p) => p.id !== uid).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleVote(p.id)}
                      className="w-full px-4 py-3 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── INVESTIGATION ────────────────────────────────────────────── */}
        {screen === "investigation" && (() => {
          // Compute the winner directly from the votes currently in roundData so this screen
          // never gets stuck in "Investigating…" waiting for an async flag to be set.
          const currentVotes = roundData?.investigationVotes ?? {};
          const allVotesIn = activePlayers.length > 0 &&
            Object.keys(currentVotes).length >= activePlayers.length;
          const computedWinnerId = (() => {
            if (!allVotesIn) return null;
            const tallies: Record<string, number> = {};
            for (const v of Object.values(currentVotes)) tallies[v] = (tallies[v] ?? 0) + 1;
            let max = 0; let tops: string[] = [];
            for (const [id, count] of Object.entries(tallies)) {
              if (count > max) { max = count; tops = [id]; }
              else if (count === max) tops.push(id);
            }
            return tops.length === 1 ? tops[0] : null;
          })();
          // voteComplete is true as soon as all votes are in (or once saved/Firestore confirms done).
          const voteComplete = allVotesIn || savedVoteComplete || roundData?.roundPhase === "done";
          const investigatedId =
            savedInvestigatedPlayerId ??
            roundData?.investigatedPlayerId ??
            computedWinnerId;
          const investigatedPlayer = investigatedId ? players.find((p) => p.id === investigatedId) : null;

          return (
            <div className="space-y-6 sm:space-y-8">
              <RoundProgressBar
                currentRound={Math.min(room?.currentRound ?? 1, room?.rounds ?? 1)}
                totalRounds={room?.rounds ?? 1}
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">Investigation</h1>

              {voteComplete && investigatedPlayer ? (
                <>
                  {/* Result card — intentionally neutral; Marco/not-Marco is only revealed at game-over */}
                  <div className="rounded-3xl p-8 shadow-xl text-center space-y-3 bg-blue-50 border-4 border-blue-200">
                    <p className="text-lg text-gray-600">You investigated</p>
                    <p className="text-4xl font-bold text-gray-900">{investigatedPlayer.name}</p>
                  </div>

                  <BubbleButton onClick={handleContinueFromInvestigation} disabled={isBusy}>
                    Continue
                  </BubbleButton>
                </>
              ) : voteComplete ? (
                <>
                  <div className="rounded-3xl p-8 shadow-xl text-center space-y-3 bg-gray-50 border-4 border-gray-200">
                    <p className="text-2xl font-bold text-gray-700">No majority</p>
                    <p className="text-gray-500">The votes were split — nobody was investigated this round.</p>
                  </div>

                  <BubbleButton onClick={handleContinueFromInvestigation} disabled={isBusy}>
                    Continue
                  </BubbleButton>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-xl text-gray-500">Investigating…</p>
                </div>
              )}

              {error && <p className="text-sm text-red-500">{error}</p>}
              <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
            </div>
          );
        })()}

        {/* ── GAME OVER ────────────────────────────────────────────────── */}
        {screen === "game-over" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl">Game Over</h1>
            <div className={`p-8 rounded-3xl shadow-2xl text-4xl sm:text-6xl font-bold ${
              room?.winner === "Marco" ? "bg-blue-500 text-white" : "bg-yellow-400 text-white"
            }`}>
              {room?.winner === "Marco" ? "🏊 Marcos Win! 🏊" : "🎉 Regs Win! 🎉"}
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-lg font-semibold mb-4">Roles Revealed</p>
              <div className="space-y-2">
                {players.map((p) => (
                  <div key={p.id} className="flex justify-between items-center border-b last:border-0 pb-2">
                    <span>{p.name}{p.id === uid ? " (You)" : ""}</span>
                    <span className={`font-semibold ${p.role === "Marco" ? "text-blue-600" : "text-gray-600"}`}>
                      {p.role ?? "?"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500">
              Completed {room?.currentRound ?? "?"} round{(room?.currentRound ?? 1) !== 1 ? "s" : ""} out of {room?.rounds ?? "?"}.
            </p>
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
            <AdSenseBanner className="pt-2 opacity-90" />
          </div>
        )}

      </div>

      {/* ── Nudge button (shown after 12 s of no phase change) ───────────── */}
      {showNudge && (
        <button
          type="button"
          onClick={handleNudge}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-gray-800/80 text-white text-sm font-semibold shadow-xl backdrop-blur-sm hover:bg-gray-700 active:scale-95 transition-all"
        >
          Game stuck? Tap to sync
        </button>
      )}

      {/* ── Rules button ──────────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => { setRulesTab("rules"); setShowRules(true); }}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold shadow-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all"
        aria-label="Game rules"
      >
        ?
      </button>

      {/* ── Rules modal ───────────────────────────────────────────────────── */}
      {showRules && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowRules(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full text-left flex flex-col"
            style={{ maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-3 shrink-0">
              <h2 className="text-2xl font-bold text-blue-600">How to Play</h2>
              <button
                type="button"
                onClick={() => setShowRules(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                aria-label="Close rules"
              >
                ×
              </button>
            </div>

            {/* Tab bar */}
            <div className="flex gap-2 px-6 pb-3 shrink-0">
              {(["rules", "setup", "flow"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setRulesTab(tab)}
                  className={`flex-1 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    rulesTab === tab
                      ? "bg-blue-500 text-white shadow"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {tab === "rules" ? "Rules" : tab === "setup" ? "Setup" : "Flow"}
                </button>
              ))}
            </div>

            {/* Tab content — scrollable */}
            <div className="overflow-y-auto px-6 pb-6 flex-1">

              {/* ── Tab 1: Rules ── */}
              {rulesTab === "rules" && (
                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside leading-relaxed">
                  <li>Don't show your screen to other players!</li>
                  <li>One or more players are secretly assigned as <strong>Marcos</strong>. Everyone else is a <strong>Regular</strong>.</li>
                  <li>Marcos know who each other are. Regulars know nothing.</li>
                  <li>Each round has a <strong>theme</strong>. Every player uploads exactly one photo that fits the theme.</li>
                  <li>Marcos secretly agree on a player to <strong>eliminate</strong> that round.</li>
                  <li>The eliminated player is privately shown one of the Marco's photos.</li>
                  <li>The eliminated player picks a <strong>one-word clue</strong> from a set of options to describe that photo to the group.</li>
                  <li>Everyone sees all the photos and the clue, then <strong>votes on the photo-reveal screen</strong> to investigate one player.</li>
                  <li>
                    If there is no majority vote, nobody is investigated that round.
                    <ul className="list-disc list-inside mt-1 ml-4 space-y-1 text-gray-500">
                      <li>A tie counts as no majority — the round simply ends with no investigation.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Investigating a player does not reveal their role</strong> — you only find out who is Marco once <em>all</em> Marcos have been successfully investigated.
                  </li>
                  <li><strong>Regs win</strong> by successfully investigating all Marcos. <strong>Marcos win</strong> by surviving all rounds without being found.</li>
                </ol>
              )}

              {/* ── Tab 2: Setup table ── */}
              {rulesTab === "setup" && (
                <div>
                  <p className="text-xs text-gray-500 mb-3">Number of Marcos and rounds is determined by player count.</p>
                  <table className="w-full text-sm text-center border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="py-2 px-3 font-semibold text-blue-700 border-b border-blue-100">Players</th>
                        <th className="py-2 px-3 font-semibold text-blue-700 border-b border-blue-100">Marcos</th>
                        <th className="py-2 px-3 font-semibold text-blue-700 border-b border-blue-100">Rounds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [4,1,1],[5,1,2],[6,1,3],[7,1,4],
                        [8,2,3],[9,2,4],[10,2,5],[11,2,6],
                        [12,3,5],[13,3,6],[14,3,7],[15,3,8],
                        [16,4,7],[17,4,8],[18,4,9],[19,4,10],
                      ].map(([players, marcos, rounds], i, arr) => {
                        const prevMarcos = i > 0 ? arr[i - 1][1] : -1;
                        const isFirstInGroup = marcos !== prevMarcos;
                        return (
                          <tr key={players} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${isFirstInGroup && i > 0 ? "border-t-2 border-blue-100" : ""}`}>
                            <td className="py-1.5 px-3 text-gray-800 font-medium">{players}</td>
                            <td className="py-1.5 px-3 text-blue-600 font-semibold">{marcos}</td>
                            <td className="py-1.5 px-3 text-gray-700">{rounds}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-400 mt-3 text-center">Formula: rounds = players − (2 × Marcos) − 1</p>
                </div>
              )}

              {/* ── Tab 3: Game flow diagram ── */}
              {rulesTab === "flow" && (() => {
                const Phase = ({ label, sub }: { label: string; sub?: string }) => (
                  <div className="bg-blue-500 text-white rounded-2xl px-4 py-2 text-center shadow-sm">
                    <p className="text-sm font-semibold">{label}</p>
                    {sub && <p className="text-xs opacity-80 mt-0.5">{sub}</p>}
                  </div>
                );
                const Decision = ({ label }: { label: string }) => (
                  <div className="bg-yellow-400 text-gray-800 rounded-2xl px-4 py-2 text-center shadow-sm border-2 border-yellow-500">
                    <p className="text-sm font-semibold">{label}</p>
                  </div>
                );
                const Arrow = ({ label }: { label?: string }) => (
                  <div className="flex flex-col items-center gap-0">
                    {label && <p className="text-xs text-gray-400">{label}</p>}
                    <div className="w-px h-4 bg-gray-300" />
                    <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #d1d5db" }} />
                  </div>
                );
                return (
                  <div className="flex flex-col items-center gap-1 text-xs">
                    <Phase label="Lobby" sub="Players ready up" />
                    <Arrow />
                    <Phase label="Role Reveal" sub="Each player sees Marco or Reg" />
                    <Arrow />
                    <Phase label="Theme Reveal" sub="Round theme announced" />
                    <Arrow />
                    <Phase label="Photo Upload" sub="Everyone submits one photo" />
                    <Arrow />
                    <Phase label="Marco Eliminates" sub="Marcos secretly pick a target" />
                    <Arrow />
                    <Phase label="Clue Word" sub="Eliminated player describes Marco's photo" />
                    <Arrow />
                    <Phase label="Photo Reveal + Vote" sub="See all photos, vote to investigate" />
                    <Arrow />
                    <Phase label="Investigation Result" sub="See who was investigated (or no majority)" />
                    <Arrow />
                    <Decision label="All Marcos found?" />

                    {/* Branch: Yes → Regs Win / No → continue */}
                    <div className="flex w-full items-start justify-center gap-2 mt-1">
                      {/* Left: Yes */}
                      <div className="flex flex-col items-center gap-1 flex-1">
                        <p className="text-xs text-gray-400">Yes</p>
                        <div className="w-px h-3 bg-gray-300" />
                        <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #d1d5db" }} />
                        <div className="bg-green-500 text-white rounded-2xl px-3 py-2 text-center shadow-sm w-full">
                          <p className="text-sm font-semibold">Regs Win! 🎉</p>
                        </div>
                      </div>

                      {/* Right: No */}
                      <div className="flex flex-col items-center gap-1 flex-1">
                        <p className="text-xs text-gray-400">No</p>
                        <div className="w-px h-3 bg-gray-300" />
                        <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #d1d5db" }} />
                        <Decision label="Last round?" />
                        {/* Sub-branch */}
                        <div className="flex w-full items-start justify-center gap-2 mt-1">
                          <div className="flex flex-col items-center gap-1 flex-1">
                            <p className="text-xs text-gray-400">Yes</p>
                            <div className="w-px h-3 bg-gray-300" />
                            <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #d1d5db" }} />
                            <div className="bg-red-500 text-white rounded-2xl px-3 py-2 text-center shadow-sm w-full">
                              <p className="text-sm font-semibold">Marcos Win!</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-1 flex-1">
                            <p className="text-xs text-gray-400">No</p>
                            <div className="w-px h-3 bg-gray-300" />
                            <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #d1d5db" }} />
                            <div className="bg-blue-100 text-blue-700 border-2 border-blue-300 rounded-2xl px-3 py-2 text-center shadow-sm w-full">
                              <p className="text-xs font-semibold">Next Round</p>
                              <p className="text-xs opacity-70">↑ Theme Reveal</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>
        </div>
      )}

      {/* ── Vote kick dialog ──────────────────────────────────────────────── */}
      <AlertDialog
        open={Boolean(kickCandidate)}
        onOpenChange={(open) => { if (!open && !isBusy) setKickCandidate(null); }}
      >
        <AlertDialogContent className="rounded-3xl border-2 border-blue-200">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-blue-600">Vote Kick Player?</AlertDialogTitle>
            <AlertDialogDescription className="text-base text-gray-600">
              {kickCandidate
                ? `Vote to remove ${kickCandidate.name}? ${voteKickThreshold} votes needed.`
                : "Vote to remove this player?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isBusy}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmKick} disabled={isBusy} className="bg-red-600 text-white hover:bg-red-700">
              {isBusy ? "Submitting..." : "Vote Kick"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
