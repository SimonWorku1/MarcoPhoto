import React, { useEffect, useMemo, useRef, useState } from "react";
import { BubbleButton } from "./components/BubbleButton";
import logo from "../assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af.png";
import { auth, ensureAnonymousAuth } from "../lib/firebase";
import {
  getActiveRoomId,
  getGameConfig,
  joinMainRoom,
  leaveRoom,
  listenRoom,
  listenRoomPlayers,
  setPlayerReady,
  startGame,
  touchPlayer,
  upsertUserProfile,
  voteKickPlayer,
  type RoomData,
  type RoomPlayer,
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

type GameScreen = "menu" | "lobby" | "photo-select" | "role-reveal";
type Role = "Marco" | "Reg";

const NAME_STORAGE_KEY = "marcoPlayerName";

export default function App() {
  const [screen, setScreen] = useState<GameScreen>("menu");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [room, setRoom] = useState<RoomData | null>(null);
  const [players, setPlayers] = useState<RoomPlayer[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [savedName, setSavedName] = useState("");
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [photosSelected, setPhotosSelected] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [kickCandidate, setKickCandidate] = useState<RoomPlayer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isNameValid = useMemo(() => /[a-z0-9]/i.test(nameInput), [nameInput]);
  const canJoinGame = isNameSaved && isNameValid && authReady && !isBusy;
  const uid = auth.currentUser?.uid;
  const currentPlayer = players.find((player) => player.id === uid) ?? null;
  const isCurrentPlayerReady = currentPlayer?.isReady === true;
  const everyoneReady = players.length >= 4 && players.every((player) => player.isReady === true);
  const voteKickThreshold = Math.max(2, Math.ceil((players.length - 1) / 2));

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
        if (!isMounted) {
          return;
        }
        setAuthReady(true);
        const activeRoomId = await getActiveRoomId();
        if (activeRoomId) {
          setRoomId(activeRoomId);
          setScreen("lobby");
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setAuthReady(false);
          setError(err.message);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!authReady || !isNameSaved || !savedName) {
      return;
    }
    let isMounted = true;
    upsertUserProfile(savedName).catch((err: Error) => {
      if (isMounted) {
        setError(err.message);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [authReady, isNameSaved, savedName]);

  useEffect(() => {
    if (!roomId) {
      setRoom(null);
      setPlayers([]);
      return;
    }
    const unsubscribeRoom = listenRoom(roomId, (nextRoom) => {
      setRoom(nextRoom);
      if (!nextRoom) {
        setRoomId(null);
        setScreen("menu");
      }
    });
    const unsubscribePlayers = listenRoomPlayers(roomId, setPlayers);
    return () => {
      unsubscribeRoom();
      unsubscribePlayers();
    };
  }, [roomId]);

  useEffect(() => {
    if (!roomId) {
      return;
    }
    let isActive = true;
    const sendHeartbeat = async () => {
      try {
        await touchPlayer(roomId);
      } catch {
        if (!isActive) {
          return;
        }
      }
    };
    sendHeartbeat();
    const interval = window.setInterval(sendHeartbeat, 30_000);
    return () => {
      isActive = false;
      window.clearInterval(interval);
    };
  }, [roomId]);

  useEffect(() => {
    if (room?.state === "playing" && screen === "lobby") {
      setScreen("photo-select");
    }
  }, [room?.state, screen]);

  useEffect(() => {
    if (!roomId || screen !== "lobby" || room?.state !== "waiting" || !everyoneReady || isBusy) {
      return;
    }
    let isCancelled = false;
    const autoStart = async () => {
      try {
        await startGame(roomId);
      } catch (err) {
        if (!isCancelled) {
          setError((err as Error).message);
        }
      }
    };
    autoStart();
    return () => {
      isCancelled = true;
    };
  }, [roomId, room?.state, screen, everyoneReady, isBusy]);

  const handleSaveName = async () => {
    setError(null);
    if (!isNameValid) {
      setError("Name must contain at least one letter or number.");
      return;
    }
    const trimmed = nameInput.trim();
    if (!trimmed) {
      setError("Name cannot be empty.");
      return;
    }
    setIsBusy(true);
    try {
      await ensureAnonymousAuth();
      await upsertUserProfile(trimmed);
      setSavedName(trimmed);
      setIsNameSaved(true);
      localStorage.setItem(NAME_STORAGE_KEY, trimmed);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleJoinGame = async () => {
    setError(null);
    setIsBusy(true);
    try {
      const result = await joinMainRoom(savedName);
      setRoomId(result.roomId);
      setScreen("lobby");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleToggleReady = async () => {
    if (!roomId) {
      return;
    }
    setError(null);
    setIsBusy(true);
    try {
      await setPlayerReady(roomId, !isCurrentPlayerReady);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const photosPerPlayer = room?.photosPerPlayer ?? getGameConfig(players.length).photosPerPlayer;

  const handleSelectPhotos = () => {
    setPhotoError(null);
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    if (files.length !== photosPerPlayer) {
      setPhotoError(`Please select exactly ${photosPerPlayer} photo${photosPerPlayer !== 1 ? "s" : ""}. You selected ${files.length}.`);
      event.target.value = "";
      return;
    }
    setPhotoError(null);
    setPhotosSelected(true);
  };

  const handleLeaveRoom = async () => {
    if (!roomId) {
      return;
    }
    const shouldLeave = window.confirm("Leave the room? You can rejoin later.");
    if (!shouldLeave) {
      return;
    }
    setError(null);
    setIsBusy(true);
    try {
      await leaveRoom(roomId);
      setRole(null);
      setPhotosSelected(false);
      setRoomId(null);
      setScreen("menu");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleRevealRole = () => {
    if (!currentPlayer?.role) {
      return;
    }
    setRole(currentPlayer.role as Role);
    setScreen("role-reveal");
  };

  const handleKick = (player: RoomPlayer) => {
    if (!roomId || player.id === uid) {
      return;
    }
    setKickCandidate(player);
  };

  const confirmKick = async () => {
    if (!roomId || !kickCandidate) {
      return;
    }
    setError(null);
    setIsBusy(true);
    try {
      const result = await voteKickPlayer(roomId, kickCandidate.id);
      // #region agent log
      fetch('http://127.0.0.1:7405/ingest/d453ec47-2b73-4a1b-bd86-9e13d383d1b3',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6ab149'},body:JSON.stringify({sessionId:'6ab149',location:'App.tsx:confirmKick',message:'voteKickPlayer succeeded',data:{kicked:result.kicked,voteCount:result.voteCount,votesNeeded:result.votesNeeded},timestamp:Date.now(),hypothesisId:'H-F'})}).catch(()=>{});
      // #endregion
      setKickCandidate(null);
      if (!result.kicked) {
        setError(
          `${kickCandidate.name} has ${result.voteCount}/${result.votesNeeded} votes.`,
        );
      }
    } catch (err) {
      // #region agent log
      fetch('http://127.0.0.1:7405/ingest/d453ec47-2b73-4a1b-bd86-9e13d383d1b3',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6ab149'},body:JSON.stringify({sessionId:'6ab149',location:'App.tsx:confirmKick',message:'voteKickPlayer FAILED',data:{error:(err as Error).message},timestamp:Date.now(),hypothesisId:'H-F'})}).catch(()=>{});
      // #endregion
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8">
      <div className="w-full max-w-5xl text-center">
        {screen === "menu" && (
          <div className="space-y-6 sm:space-y-8">
            <img
              src={logo}
              alt="Marco Photo"
              className="w-full h-auto max-w-4xl mx-auto mb-6 sm:mb-8"
            />
            <p className="text-base sm:text-lg lg:text-2xl mb-6 sm:mb-8">
              Get ready for a fun game!
            </p>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="w-full max-w-sm space-y-3">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(event) => {
                    setNameInput(event.target.value);
                    setIsNameSaved(false);
                  }}
                  placeholder="Enter your name"
                  className="border-2 border-gray-300 p-2 w-full text-center rounded-full"
                />
                <BubbleButton onClick={handleSaveName} disabled={!isNameValid || isBusy}>
                  {isNameSaved ? "Name Saved" : "Save Name"}
                </BubbleButton>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 items-center">
                <BubbleButton onClick={handleJoinGame} disabled={!canJoinGame}>
                  Join Game
                </BubbleButton>
              </div>
              <p className="text-sm text-gray-500">One shared lobby, up to 19 players.</p>
              {!isNameValid && nameInput.length > 0 && (
                <p className="text-sm text-red-500">
                  Name must contain at least one letter or number.
                </p>
              )}
              {!authReady && (
                <p className="text-sm text-red-500">
                  Waiting for sign-in. If this persists, enable Anonymous Auth in Firebase.
                </p>
              )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )}

        {screen === "lobby" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Game Lobby</h1>
            <div className="bg-white rounded-3xl p-6 sm:p-8 mb-6 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl mb-2">Room:</p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 break-all">
                Main Lobby
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {players.length}/19 players joined
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl mb-4">Players</p>
              <div className="space-y-2">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between border-b last:border-b-0 pb-2"
                  >
                    <span className="text-base sm:text-lg">
                      {player.name}
                      {player.id === uid ? " (You)" : ""}
                    </span>
                    <div className="flex items-center gap-3">
                      {player.isReady && (
                        <span className="text-xs uppercase tracking-wide text-green-600">
                          Ready
                        </span>
                      )}
                      {player.id !== uid && (
                        <button
                          type="button"
                          onClick={() => handleKick(player)}
                          disabled={isBusy}
                          className="text-sm font-semibold text-red-600 hover:text-red-700 disabled:text-red-300"
                        >
                          Vote Kick
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl">
              {room?.state === "playing"
                ? "Game in progress."
                : players.length < 4
                  ? `Waiting for players… ${players.length}/4 minimum to start.`
                  : everyoneReady
                    ? "Everyone is ready. Starting game..."
                    : "Waiting for everyone to ready up..."}
            </p>
            {room?.state !== "playing" && (
              <BubbleButton onClick={handleToggleReady} disabled={isBusy || !currentPlayer}>
                {isCurrentPlayerReady ? "Not Ready" : "Ready"}
              </BubbleButton>
            )}
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>
              Leave Room
            </BubbleButton>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )}

        {screen === "photo-select" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Select Your Photos</h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8">
              {photosSelected
                ? "Photos selected! Reveal your role when you're all set."
                : `Choose exactly ${photosPerPlayer} photo${photosPerPlayer !== 1 ? "s" : ""} from your camera roll or files.`}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col gap-4 items-center">
              {!photosSelected && (
                <BubbleButton onClick={handleSelectPhotos} disabled={isBusy}>
                  Select Photos
                </BubbleButton>
              )}
              {photoError && (
                <p className="text-sm text-red-500">{photoError}</p>
              )}
              {photosSelected && (
                <BubbleButton onClick={handleRevealRole} disabled={isBusy || !currentPlayer?.role}>
                  Reveal Role
                </BubbleButton>
              )}
              <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>
                Leave Room
              </BubbleButton>
            </div>
          </div>
        )}

        {screen === "role-reveal" && role && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl mb-4">Your Role</h1>
            <div
              className={`text-4xl sm:text-6xl lg:text-8xl p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl ${role === "Marco"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-4 border-blue-500"
                }`}
            >
              {role === "Marco" ? "🏊 Marco 🏊" : "🧍 Reg 🧍"}
            </div>
            <p className="text-lg sm:text-2xl lg:text-3xl mt-6 sm:mt-8">
              {role === "Marco" ? "You're the Marco! Time to hunt!" : "You're a Reg. Stay hidden!"}
            </p>
            <BubbleButton onClick={handleLeaveRoom} disabled={isBusy}>
              Leave Room
            </BubbleButton>
          </div>
        )}
      </div>
      <AlertDialog
        open={Boolean(kickCandidate)}
        onOpenChange={(open) => {
          if (!open && !isBusy) {
            setKickCandidate(null);
          }
        }}
      >
        <AlertDialogContent className="rounded-3xl border-2 border-blue-200">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-blue-600">
              Vote Kick Player?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-gray-600">
              {kickCandidate
                ? `Vote to remove ${kickCandidate.name} from the room? ${voteKickThreshold} votes needed right now.`
                : "Vote to remove this player from the room?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isBusy}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmKick}
              disabled={isBusy}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              {isBusy ? "Submitting..." : "Vote Kick"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}