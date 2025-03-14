import React from "react";

interface PlayAgainProps {
  onPlayAgain: () => void;
  result: boolean | "draw" | null;
}

const PlayAgain: React.FC<PlayAgainProps> = ({ onPlayAgain, result }) => {
  const getButtonClasses = (result: boolean | "draw" | null) => {
    switch (result) {
      case true:
        return "text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 shadow-lg shadow-green-500/50 border border-green-500 font-medium rounded-lg text-sm px-5 py-2.5";
      case false:
        return "text-white bg-gradient-to-r from-red-400 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 shadow-lg shadow-red-500/50 border border-red-500 font-medium rounded-lg text-sm px-5 py-2.5";
      case "draw":
        return "text-white bg-gradient-to-r from-gray-400 to-gray-600 hover:bg-gradient-to-br focus:ring-gray-300 shadow-lg shadow-gray-500/50 border border-gray-500 font-medium rounded-lg text-sm px-5 py-2.5";
      default:
        // Default styling if no result is provided
        return "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 shadow-lg shadow-blue-500/50 border border-blue-500 font-medium rounded-lg text-sm px-5 py-2.5";
    }
  };

  return (
    <button
      onClick={onPlayAgain}
      className={`${getButtonClasses(result)} text-center me-2 mb-2`}
    >
      <strong>Play Again</strong>
    </button>
  );
};

export default PlayAgain;
