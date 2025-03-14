import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ScoreCounter: React.FC = () => {
  const { score, wins, losses, draws } = useSelector(
    (state: RootState) => state.game
  );

  return (
    <div className="text-center">
      {/* Score */}
      <div>
        <h4 className="text-xs text-gray-300 uppercase font-semibold">Score</h4>
        <p className="text-lg font-bold text-blue-400">{score}</p>
      </div>

      {/* Wins, Losses, Draws */}
      <div className="flex space-x-4 justify-center">
        <div>
          <h4 className="text-xs text-gray-300 uppercase font-semibold">
            Wins
          </h4>
          <p className="text-lg font-bold text-green-400">{wins}</p>
        </div>
        <div>
          <h4 className="text-xs text-gray-300 uppercase font-semibold">
            Losses
          </h4>
          <p className="text-lg font-bold text-red-400">{losses}</p>
        </div>
        <div>
          <h4 className="text-xs text-gray-300 uppercase font-semibold">
            Draws
          </h4>
          <p className="text-lg font-bold text-yellow-400">{draws}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCounter;
