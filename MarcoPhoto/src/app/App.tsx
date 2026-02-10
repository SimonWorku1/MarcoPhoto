import React, { useEffect, useMemo, useState } from "react";
import { Users } from "lucide-react";
import { BubbleButton } from "./components/BubbleButton";
import logo from "../assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af.png";
import { auth, ensureAnonymousAuth } from "../lib/firebase";
import {
  createRoom,
  getActiveRoomId,
  joinRoom,
  kickPlayer,
  listenRoom,
  listenRoomPlayers,
  listenRoomsWaiting,
  startGame,
  type RoomData,
  type RoomPlayer,
  type RoomSummary,
} from "../lib/rooms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

type GameScreen = "menu" | "join-list" | "lobby" | "photo-select" | "role-reveal";
type Role = "Marco" | "Reg";

const NAME_STORAGE_KEY = "marcoPlayerName";

export default function App() {
  const [screen, setScreen] = useState<GameScreen>("menu");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [room, setRoom] = useState<RoomData | null>(null);
  const [roomsWaiting, setRoomsWaiting] = useState<RoomSummary[]>([]);
  const [players, setPlayers] = useState<RoomPlayer[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [savedName, setSavedName] = useState("");
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [photosSelected, setPhotosSelected] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);

  const isNameValid = useMemo(() => /[a-z0-9]/i.test(nameInput), [nameInput]);
  const canEnterRooms = isNameSaved && isNameValid && authReady && !isBusy;
  const uid = auth.currentUser?.uid;
  const isHost = room?.hostUid === uid;

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
    if (screen !== "join-list") {
      return;
    }
    const unsubscribe = listenRoomsWaiting(setRoomsWaiting);
    return () => unsubscribe();
  }, [screen]);

  useEffect(() => {
    if (room?.state === "playing" && screen === "lobby") {
      setScreen("photo-select");
    }
  }, [room?.state, screen]);

  const handleSaveName = () => {
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
    setSavedName(trimmed);
    setIsNameSaved(true);
    localStorage.setItem(NAME_STORAGE_KEY, trimmed);
  };

  const handleCreateRoom = async () => {
    setError(null);
    setIsBusy(true);
    try {
      const result = await createRoom(savedName);
      setRoomId(result.roomId);
      setScreen("lobby");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleJoinList = () => {
    setError(null);
    setScreen("join-list");
  };

  const handleJoinRoom = async (selectedRoomId: string) => {
    setError(null);
    setIsBusy(true);
    try {
      const result = await joinRoom(selectedRoomId, savedName);
      setRoomId(result.roomId);
      setScreen("lobby");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleStartGame = async () => {
    if (!roomId) {
      return;
    }
    setError(null);
    setIsBusy(true);
    try {
      await startGame(roomId);
      setScreen("photo-select");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsBusy(false);
    }
  };

  const handleSelectPhotos = () => {
    setPhotosSelected(true);
  };

  const handleReady = () => {
    const assignedRole: Role = Math.random() < 0.25 ? "Marco" : "Reg";
    setRole(assignedRole);
    setScreen("role-reveal");
  };

  const handleKick = async (player: RoomPlayer) => {
    if (!roomId || player.id === uid) {
      return;
    }
    const shouldKick = window.confirm(`Kick ${player.name} from the room?`);
    if (!shouldKick) {
      return;
    }
    setError(null);
    setIsBusy(true);
    try {
      await kickPlayer(roomId, player.id);
    } catch (err) {
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
                <BubbleButton onClick={handleCreateRoom} disabled={!canEnterRooms}>
                  Create Room
                </BubbleButton>
                <BubbleButton onClick={handleJoinList} disabled={!canEnterRooms}>
                  Join Game
                </BubbleButton>
              </div>
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

        {screen === "join-list" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Join a Room</h1>
            <p className="text-base sm:text-lg lg:text-xl mb-4">
              Rooms waiting for players:
            </p>
            <div className="space-y-3">
              {roomsWaiting.length === 0 && (
                <p className="text-base sm:text-lg">No rooms are waiting right now.</p>
              )}
              {roomsWaiting.map((roomItem) => (
                <div
                  key={roomItem.id}
                  className="flex items-center justify-between bg-white rounded-2xl p-4 shadow"
                >
                  <div className="text-left">
                    <p className="text-lg font-semibold">Room {roomItem.id}</p>
                    <p className="text-sm text-gray-500">
                      Players: {roomItem.playerCount ?? 0}
                    </p>
                  </div>
                  <BubbleButton
                    onClick={() => handleJoinRoom(roomItem.id)}
                    disabled={!canEnterRooms}
                  >
                    Join Room
                  </BubbleButton>
                </div>
              ))}
            </div>
            <BubbleButton onClick={() => setScreen("menu")} disabled={isBusy}>
              Back
            </BubbleButton>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )}

        {screen === "lobby" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">Game Lobby</h1>
              {isHost && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600"
                      aria-label="Players"
                    >
                      <Users className="h-5 w-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[12rem]">
                    <DropdownMenuLabel>Players</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {players.map((player) => (
                      <DropdownMenuItem
                        key={player.id}
                        onSelect={(event) => {
                          event.preventDefault();
                          handleKick(player);
                        }}
                        disabled={player.id === uid}
                      >
                        {player.name}
                        {player.id === uid ? " (You)" : ""}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 mb-6 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl mb-2">Room Code:</p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 break-all">
                {roomId}
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
                    <span className="text-base sm:text-lg">{player.name}</span>
                    {player.isHost && (
                      <span className="text-xs uppercase tracking-wide text-blue-500">
                        Host
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl">
              {room?.state === "playing" ? "Game in progress." : "Waiting for players..."}
            </p>
            {isHost && room?.state !== "playing" && (
              <BubbleButton onClick={handleStartGame} disabled={isBusy}>
                Start Game
              </BubbleButton>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )}

        {screen === "photo-select" && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Select Your Photos</h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8">
              {photosSelected
                ? "Photos selected! Click Ready when you're all set."
                : "Choose your photos for the game"}
            </p>
            <div className="flex flex-col gap-4 items-center">
              {!photosSelected && (
                <BubbleButton onClick={handleSelectPhotos} disabled={isBusy}>
                  Select Photos
                </BubbleButton>
              )}
              {photosSelected && (
                <BubbleButton onClick={handleReady} disabled={isBusy}>
                  Ready
                </BubbleButton>
              )}
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
          </div>
        )}
      </div>
    </div>
  );
}