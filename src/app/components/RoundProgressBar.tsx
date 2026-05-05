import React from "react";
import marcoPolo from "../../assets/marco-polo.gif";

interface Props {
  currentRound: number;
  totalRounds: number;
}

export function RoundProgressBar({ currentRound, totalRounds }: Props) {
  if (totalRounds < 1) return null;

  // Stops are evenly distributed inside the bar: position = round / (totalRounds + 1)
  const stopPct = (round: number) => (round / (totalRounds + 1)) * 100;
  const portraitPct = stopPct(currentRound);

  return (
    <div className="w-full px-2 select-none mb-2">
      {/* Bar + stops container */}
      <div className="relative h-10 flex items-center">
        {/* Track */}
        <div className="absolute inset-x-0 h-4 bg-blue-600 rounded-full shadow-md" />

        {/* Round stops */}
        {Array.from({ length: totalRounds }, (_, i) => {
          const round = i + 1;
          const pct = stopPct(round);
          const isPast = round < currentRound;
          const isCurrent = round === currentRound;
          return (
            <div
              key={round}
              className="absolute flex items-center justify-center"
              style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
            >
              <div
                className={`rounded-full border-2 transition-all duration-300 ${
                  isCurrent
                    ? "w-6 h-6 bg-yellow-400 border-yellow-500 shadow-lg scale-125"
                    : isPast
                    ? "w-5 h-5 bg-yellow-300 border-yellow-400 opacity-70"
                    : "w-5 h-5 bg-yellow-400 border-yellow-500"
                }`}
              />
            </div>
          );
        })}

        {/* Marco Polo portrait indicator */}
        <div
          className="absolute flex flex-col items-center gap-0.5 transition-all duration-500"
          style={{ left: `${portraitPct}%`, transform: "translateX(-50%)", bottom: "50%" }}
        >
          <img
            src={marcoPolo}
            alt="Marco Polo"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-xl"
            style={{ marginBottom: "6px" }}
          />
          {/* Small pointer triangle */}
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "7px solid #facc15",
            }}
          />
        </div>
      </div>

      {/* Round label */}
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest mt-1">
        Round {currentRound} of {totalRounds}
      </p>
    </div>
  );
}
