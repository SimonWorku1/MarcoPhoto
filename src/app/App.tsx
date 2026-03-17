import React, { useEffect, useMemo, useRef, useState } from "react";
import { BubbleButton } from "./components/BubbleButton";
import logo from "../assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af.png";
import { auth, ensureAnonymousAuth } from "../lib/firebase";
import {
  advanceToInvestigation,
  confirmMarcoAction,
  getActiveRoomId,
  getGameConfig,
  joinMainRoom,
  leaveRoom,
  listenRoom,
  listenRoomPlayers,
  listenRound,
  setPlayerReady,
  startGame,
  submitEliminatedClue,
  submitInvestigationVote,
  submitMarcoAction,
  submitRegPhoto,
  touchPlayer,
  uploadPhotoPool,
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
  | "photo-upload"
  | "role-reveal"
  | "round-action"
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

  // Photo upload state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadFiles, setUploadFiles] = useState<File[] | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Marco action state
  const [marcoTargetId, setMarcoTargetId] = useState<string | null>(null);
  const [marcoPrivatePhoto, setMarcoPrivatePhoto] = useState<string | null>(null);
  const [marcoPublicPhoto, setMarcoPublicPhoto] = useState<string | null>(null);

  // Reg action state
  const [regPublicPhoto, setRegPublicPhoto] = useState<string | null>(null);

  // Eliminated clue state
  const [clueInput, setClueInput] = useState("");

  // Investigation vote state
  const [myVote, setMyVote] = useState<string | null>(null);

  // Math question state (for Regs/eliminated during round-action)
  const [mathQ, setMathQ] = useState<MathQuestion>(() => createMathQuestion());
  const [mathInput, setMathInput] = useState("");
  const [mathScore, setMathScore] = useState(0);
  const [mathFeedback, setMathFeedback] = useState<"correct" | null>(null);

  const uid = auth.currentUser?.uid;
  const currentPlayer = players.find((p) => p.id === uid) ?? null;
  const isCurrentPlayerReady = currentPlayer?.isReady === true;
  const isNameValid = useMemo(() => /[a-z0-9]/i.test(nameInput), [nameInput]);
  const canJoinGame = isNameSaved && isNameValid && authReady && !isBusy;
  const everyoneReady = players.length >= 4 && players.every((p) => p.isReady === true);
  const voteKickThreshold = Math.max(2, Math.ceil((players.length - 1) / 2));
  const photosPerPlayer = room?.photosPerPlayer ?? getGameConfig(players.length).photosPerPlayer;
  const eliminatedIds = room?.eliminatedPlayerIds ?? [];
  const activePlayers = players.filter((p) => !eliminatedIds.includes(p.id));
  const isEliminated = uid ? eliminatedIds.includes(uid) : false;
  const marcosAllConfirmed = (roundData?.marcoConfirmed?.length ?? 0) >= (room?.marcoCount ?? 1);
  const availablePhotos = useMemo(() => {
    const pool = currentPlayer?.photoUrls ?? [];
    const used = new Set(currentPlayer?.usedPhotoUrls ?? []);
    return pool.filter((url) => !used.has(url));
  }, [currentPlayer?.photoUrls, currentPlayer?.usedPhotoUrls]);

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
          // Screen will be driven by room.gamePhase once the listener fires;
          // start at lobby as a safe default — the phase transition effect updates it
          setScreen("lobby");
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setAuthReady(false);
          setError(err.message);
        }
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
    if (!roomId) {
      setRoom(null);
      setPlayers([]);
      return;
    }
    const unsubRoom = listenRoom(roomId, (nextRoom) => {
      setRoom(nextRoom);
      if (!nextRoom) {
        setRoomId(null);
        setScreen("menu");
      }
    });
    const unsubPlayers = listenRoomPlayers(roomId, setPlayers);
    return () => { unsubRoom(); unsubPlayers(); };
  }, [roomId]);

  // ── Round subscription ────────────────────────────────────────────────────
  useEffect(() => {
    if (!roomId || !room?.currentRound) {
      setRoundData(null);
      return;
    }
    const unsubRound = listenRound(roomId, room.currentRound, setRoundData);
    return () => unsubRound();
  }, [roomId, room?.currentRound]);

  // ── Heartbeat ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!roomId) return;
    let isActive = true;
    const sendHeartbeat = async () => {
      try { await touchPlayer(roomId); } catch { if (!isActive) return; }
    };
    sendHeartbeat();
    const interval = window.setInterval(sendHeartbeat, 30_000);
    return () => { isActive = false; window.clearInterval(interval); };
  }, [roomId]);

  // ── Screen transitions driven by server state ─────────────────────────────
  useEffect(() => {
    if (!room) return;
    if (room.state === "playing") {
      if (!room.gamePhase) {
        if (screen === "lobby") setScreen("photo-upload");
        return;
      }
      if (room.gamePhase === "round-action") {
        if (!hasRevealedRole) { setScreen("role-reveal"); return; }
        if (screen !== "round-action") {
          // reset per-round action state only when entering the screen
          setMarcoTargetId(null);
          setMarcoPrivatePhoto(null);
          setMarcoPublicPhoto(null);
          setRegPublicPhoto(null);
          setScreen("round-action");
        }
        return;
      }
      if (room.gamePhase === "eliminated-reveal" && screen !== "eliminated-reveal") {
        setScreen("eliminated-reveal");
        setClueInput("");
        return;
      }
      if (room.gamePhase === "photo-reveal" && screen !== "photo-reveal") {
        setScreen("photo-reveal");
        return;
      }
      if (room.gamePhase === "investigation" && screen !== "investigation") {
        setScreen("investigation");
        setMyVote(null);
        return;
      }
      if (room.gamePhase === "game-over" && screen !== "game-over") {
        setScreen("game-over");
        return;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.state, room?.gamePhase, hasRevealedRole]);

  // ── Reset math state on each new round ───────────────────────────────────
  useEffect(() => {
    if (screen === "round-action") {
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
      // Default to lobby; the game-phase transition effect will move the screen
      // forward if the game is already in progress (rejoin case).
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
    try {
      await leaveRoom(roomId);
      setRole(null);
      setHasRevealedRole(false);
      setRoundData(null);
      setRoomId(null);
      setScreen("menu");
    } catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleRevealRole = () => {
    if (!currentPlayer?.role) return;
    setRole(currentPlayer.role as Role);
    // hasRevealedRole is set by the "Continue" button so the player can see their role first
  };

  // ── Photo upload ──────────────────────────────────────────────────────────
  const handleSelectUploadFiles = () => {
    setUploadError(null);
    fileInputRef.current?.click();
  };

  const handleUploadFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (files.length !== photosPerPlayer) {
      setUploadError(`Select exactly ${photosPerPlayer} photos. You picked ${files.length}.`);
      e.target.value = "";
      return;
    }
    setUploadError(null);
    setUploadFiles(Array.from(files));
  };

  const handleUploadPhotos = async () => {
    if (!roomId || !uploadFiles) return;
    setIsUploading(true);
    setUploadError(null);
    try { await uploadPhotoPool(roomId, uploadFiles); }
    catch (err) { setUploadError((err as Error).message); }
    finally { setIsUploading(false); }
  };

  // ── Marco action ──────────────────────────────────────────────────────────
  const marcoEligibleTargets = activePlayers.filter(
    (p) => p.role !== "Marco" && p.id !== uid,
  );

  const existingProposal = useMemo(() => {
    if (!roundData?.marcoSubmissions) return null;
    const entries = Object.entries(roundData.marcoSubmissions);
    return entries.length > 0 ? entries[0] : null;
  }, [roundData?.marcoSubmissions]);

  const hasSubmitted = uid
    ? Boolean(roundData?.marcoSubmissions?.[uid])
    : false;
  const hasConfirmed = uid
    ? (roundData?.marcoConfirmed ?? []).includes(uid)
    : false;

  const handleSubmitMarcoAction = async () => {
    if (!roomId || !room?.currentRound || !marcoTargetId || !marcoPrivatePhoto || !marcoPublicPhoto) return;
    setError(null); setIsBusy(true);
    try {
      await submitMarcoAction(roomId, room.currentRound, marcoTargetId, marcoPrivatePhoto, marcoPublicPhoto);
    } catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  const handleConfirmMarcoAction = async () => {
    if (!roomId || !room?.currentRound) return;
    setError(null); setIsBusy(true);
    try { await confirmMarcoAction(roomId, room.currentRound); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Reg action ────────────────────────────────────────────────────────────
  const handleSubmitRegPhoto = async () => {
    if (!roomId || !room?.currentRound || !regPublicPhoto) return;
    setError(null); setIsBusy(true);
    try { await submitRegPhoto(roomId, room.currentRound, regPublicPhoto); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Eliminated clue ───────────────────────────────────────────────────────
  const handleSubmitClue = async () => {
    if (!roomId || !room?.currentRound || !clueInput.trim()) return;
    setError(null); setIsBusy(true);
    try { await submitEliminatedClue(roomId, room.currentRound, clueInput.trim()); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Photo reveal advance ──────────────────────────────────────────────────
  const handleAdvanceToInvestigation = async () => {
    if (!roomId || !room?.currentRound) return;
    setError(null); setIsBusy(true);
    try { await advanceToInvestigation(roomId, room.currentRound); }
    catch (err) { setError((err as Error).message); }
    finally { setIsBusy(false); }
  };

  // ── Investigation vote ────────────────────────────────────────────────────
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
  const uploadedCount = players.filter((p) => p.hasUploadedPhotos).length;
  const eliminatedPlayer = roundData?.eliminatedPlayerId
    ? players.find((p) => p.id === roundData.eliminatedPlayerId)
    : null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8">
      <div className="w-full max-w-5xl text-center">

        {/* ── MENU ─────────────────────────────────────────────────────── */}
        {screen === "menu" && (
          <div className="space-y-6 sm:space-y-8">
            <img src={logo} alt="Marco Photo" className="w-full h-auto max-w-4xl mx-auto mb-6 sm:mb-8" />
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
              {!authReady && (
                <p className="text-sm text-red-500">Waiting for sign-in...</p>
              )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
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
          </div>
        )}

        {/* ── PHOTO UPLOAD ─────────────────────────────────────────────── */}
        {screen === "photo-upload" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Upload Your Photos</h1>
            {currentPlayer?.hasUploadedPhotos ? (
              <>
                <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                  <p className="text-xl text-green-700 font-semibold">Photos uploaded!</p>
                  <p className="text-gray-600 mt-1">
                    {uploadedCount}/{players.length} players ready
                  </p>
                </div>
                <p className="text-gray-500">Waiting for others to upload their photos…</p>
              </>
            ) : (
              <>
                <p className="text-base sm:text-lg">
                  Select exactly <strong>{photosPerPlayer} photos</strong> from your camera roll.
                  These will be your photo pool for the entire game.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleUploadFileChange}
                />
                {uploadFiles ? (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6">
                    <p className="text-blue-700 font-semibold">{uploadFiles.length} photos selected</p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4">
                      {uploadFiles.map((f, i) => (
                        <img
                          key={i}
                          src={URL.createObjectURL(f)}
                          alt={`Photo ${i + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
                {uploadError && <p className="text-sm text-red-500">{uploadError}</p>}
                <div className="flex flex-col gap-3 items-center">
                  <BubbleButton onClick={handleSelectUploadFiles} disabled={isUploading}>
                    {uploadFiles ? "Change Photos" : "Select Photos"}
                  </BubbleButton>
                  {uploadFiles && (
                    <BubbleButton onClick={handleUploadPhotos} disabled={isUploading}>
                      {isUploading ? "Uploading…" : "Upload Photos"}
                    </BubbleButton>
                  )}
                </div>
              </>
            )}
            <p className="text-sm text-gray-500">{uploadedCount}/{players.length} players uploaded</p>
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy || isUploading}>Leave Room</BubbleButton>
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

        {/* ── ROUND ACTION ─────────────────────────────────────────────── */}
        {screen === "round-action" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">
              Round {room?.currentRound ?? "?"} of {room?.rounds ?? "?"}
            </h1>

            {/* Eliminated player: math questions to stay occupied */}
            {isEliminated && (
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
                subtitle="You've been eliminated — keep busy while the round is set up."
              />
            )}

            {/* Reg action: photo picker first, then math while waiting for Marcos */}
            {!isEliminated && role === "Reg" && (
              <div className="space-y-4">
                {uid && roundData?.publicPhotoUrls?.[uid] ? (
                  // Photo submitted — do math until Marcos confirm and round advances
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
                    subtitle="Photo submitted! Keep busy while the Marcos decide…"
                  />
                ) : (
                  // Haven't submitted yet — pick a photo first
                  <>
                    <p className="text-base sm:text-lg">Pick one photo to share this round:</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {availablePhotos.map((url) => (
                        <button
                          key={url}
                          type="button"
                          onClick={() => setRegPublicPhoto(url)}
                          className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${
                            regPublicPhoto === url ? "border-blue-500 scale-105" : "border-transparent"
                          }`}
                        >
                          <img src={url} alt="Pool photo" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                    {regPublicPhoto && (
                      <BubbleButton onClick={handleSubmitRegPhoto} disabled={isBusy}>
                        Submit Photo
                      </BubbleButton>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Marco action */}
            {!isEliminated && role === "Marco" && (
              <div className="space-y-6">
                {/* Show existing proposal from another Marco */}
                {existingProposal && !hasSubmitted && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 text-left">
                    <p className="font-semibold text-blue-700 mb-2">
                      Marco proposal from {playerName(existingProposal[0])}:
                    </p>
                    <p>Eliminate: <strong>{playerName(existingProposal[1].eliminatedPlayerId)}</strong></p>
                    <div className="flex gap-3 mt-3">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Private photo</p>
                        <img src={existingProposal[1].privatePhotoUrl} alt="Private" className="w-20 h-20 object-cover rounded-xl" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Public photo</p>
                        <img src={existingProposal[1].publicPhotoUrl} alt="Public" className="w-20 h-20 object-cover rounded-xl" />
                      </div>
                    </div>
                    {!hasConfirmed && (
                      <BubbleButton onClick={handleConfirmMarcoAction} disabled={isBusy} className="mt-4">
                        Confirm This Plan
                      </BubbleButton>
                    )}
                    {hasConfirmed && <p className="text-green-600 mt-3 font-semibold">You confirmed. Waiting for other Marcos…</p>}
                  </div>
                )}

                {/* Own submission status */}
                {hasSubmitted && (
                  <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                    <p className="text-green-700 font-semibold">
                      Your plan is submitted ({(roundData?.marcoConfirmed ?? []).length}/{room?.marcoCount ?? 1} Marcos confirmed).
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Other Marcos need to confirm to proceed.</p>
                  </div>
                )}

                {/* Submission form (always visible so Marco can override) */}
                {(!hasSubmitted || existingProposal?.[0] !== uid) && (
                  <div className="space-y-4 text-left">
                    <p className="font-semibold text-lg">
                      {hasSubmitted ? "Override your plan:" : "Submit your plan:"}
                    </p>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">1. Pick who to eliminate:</p>
                      <div className="space-y-1">
                        {marcoEligibleTargets.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setMarcoTargetId(p.id)}
                            className={`w-full px-4 py-2 rounded-full text-left border-2 transition-all ${
                              marcoTargetId === p.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                            }`}
                          >
                            {p.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">2. Pick private photo (sent only to eliminated player):</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availablePhotos.filter((u) => u !== marcoPublicPhoto).map((url) => (
                          <button key={url} type="button" onClick={() => setMarcoPrivatePhoto(url)}
                            className={`aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                              marcoPrivatePhoto === url ? "border-blue-500 scale-105" : "border-transparent"
                            }`}>
                            <img src={url} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">3. Pick public photo (shown to everyone):</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availablePhotos.filter((u) => u !== marcoPrivatePhoto).map((url) => (
                          <button key={url} type="button" onClick={() => setMarcoPublicPhoto(url)}
                            className={`aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                              marcoPublicPhoto === url ? "border-green-500 scale-105" : "border-transparent"
                            }`}>
                            <img src={url} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {marcoTargetId && marcoPrivatePhoto && marcoPublicPhoto && (
                      <BubbleButton onClick={handleSubmitMarcoAction} disabled={isBusy}>
                        {hasSubmitted ? "Update Plan" : "Submit Plan"}
                      </BubbleButton>
                    )}
                  </div>
                )}
              </div>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── ELIMINATED REVEAL ────────────────────────────────────────── */}
        {screen === "eliminated-reveal" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Player Eliminated</h1>
            <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6">
              <p className="text-xl font-semibold text-red-700">
                {eliminatedPlayer?.name ?? "Unknown"} has been eliminated this round.
              </p>
            </div>

            {/* Eliminated player: sees private photo and gives clue */}
            {uid === roundData?.eliminatedPlayerId && (
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-semibold">Marco sent you this photo:</p>
                {roundData.privatePhotoUrl && (
                  <img
                    src={roundData.privatePhotoUrl}
                    alt="Private photo from Marco"
                    className="mx-auto max-w-xs rounded-3xl shadow-lg"
                  />
                )}
                {roundData.eliminatedClue ? (
                  <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-6">
                    <p className="text-green-700">Clue submitted: <strong>{roundData.eliminatedClue}</strong></p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-600">Give the group one word to describe this photo:</p>
                    <input
                      type="text"
                      value={clueInput}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\s/g, "");
                        setClueInput(val);
                      }}
                      placeholder="One word…"
                      maxLength={30}
                      className="border-2 border-gray-300 p-2 w-full max-w-xs text-center rounded-full"
                    />
                    <BubbleButton onClick={handleSubmitClue} disabled={isBusy || !clueInput.trim()}>
                      Submit Clue
                    </BubbleButton>
                  </div>
                )}
              </div>
            )}

            {/* Everyone else: waiting for clue */}
            {uid !== roundData?.eliminatedPlayerId && (
              <div className="space-y-3">
                {roundData?.eliminatedClue ? (
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6">
                    <p className="text-gray-700">
                      {eliminatedPlayer?.name ?? "They"}'s clue:{" "}
                      <strong className="text-2xl">{roundData.eliminatedClue}</strong>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Waiting for {eliminatedPlayer?.name ?? "the eliminated player"} to give their clue…
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Photos This Round</h1>
            {roundData?.eliminatedClue && (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-4">
                <p className="text-gray-700">
                  {eliminatedPlayer?.name}'s clue: <strong className="text-2xl">{roundData.eliminatedClue}</strong>
                </p>
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.entries(roundData?.publicPhotoUrls ?? {}).map(([playerId, url]) => (
                <div key={playerId} className="space-y-1">
                  <img
                    src={url}
                    alt={playerName(playerId)}
                    className="w-full aspect-square object-cover rounded-2xl shadow"
                  />
                  <p className="text-sm text-gray-600 truncate">{playerName(playerId)}</p>
                </div>
              ))}
            </div>
            {!isEliminated && (
              <BubbleButton onClick={handleAdvanceToInvestigation} disabled={isBusy}>
                Proceed to Investigation
              </BubbleButton>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── INVESTIGATION ────────────────────────────────────────────── */}
        {screen === "investigation" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Investigate</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Who do you want to investigate? Pick one player.
            </p>

            {isEliminated ? (
              <p className="text-gray-400">You've been eliminated and cannot vote.</p>
            ) : myVote || (uid && roundData?.investigationVotes?.[uid]) ? (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6">
                <p className="text-blue-700 font-semibold">
                  You voted for {playerName(myVote ?? roundData?.investigationVotes?.[uid ?? ""] ?? "")}.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Waiting for others ({Object.keys(roundData?.investigationVotes ?? {}).length}/{activePlayers.length - 1} voted)…
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {activePlayers
                  .filter((p) => p.id !== uid)
                  .map((p) => (
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

            {error && <p className="text-sm text-red-500">{error}</p>}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>Leave Room</BubbleButton>
          </div>
        )}

        {/* ── GAME OVER ────────────────────────────────────────────────── */}
        {screen === "game-over" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl">Game Over</h1>
            <div className={`p-8 rounded-3xl shadow-2xl text-4xl sm:text-6xl font-bold ${
              room?.winner === "Marco"
                ? "bg-blue-500 text-white"
                : "bg-yellow-400 text-white"
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
          </div>
        )}

      </div>

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
