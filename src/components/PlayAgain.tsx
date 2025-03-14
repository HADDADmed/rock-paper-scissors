import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { resetChoices } from "../features/gameSlice";

const PlayAgain: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const result = useSelector((state: RootState) => state.game.result);

  const handlePlayAgain = () => {
    dispatch(resetChoices());
  };

  const getButtonClasses = (result: boolean | "draw" | null) => {
    switch (result) {
      case true:
        return "text-white bg-gradient-to-r from-green-400 to-green-600 shadow-lg border border-green-500 font-medium rounded-lg text-sm px-5 py-2.5 hover:scale-105";
      case false:
        return "text-white bg-gradient-to-r from-red-400 to-red-600 shadow-lg border border-red-500 font-medium rounded-lg text-sm px-5 py-2.5 hover:scale-105";
      case "draw":
        return "text-white bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg border border-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 hover:scale-105";
      default:
        return "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg border border-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 hover:scale-105";
    }
  };

  return (
    <button
      onClick={handlePlayAgain}
      className={`${getButtonClasses(result)} text-center me-2 mb-2`}
    >
      <strong>Play Again</strong>
    </button>
  );
};

export default PlayAgain;
