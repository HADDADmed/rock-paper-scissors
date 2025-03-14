import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PlayAgain from "./PlayAgain";

const Result: React.FC = () => {
  const isUserWinner = useSelector((state: RootState) => state.game.result);

  let resultMessage = "";
  let textColor = "";

  if (isUserWinner === "draw") {
    resultMessage = "IT'S A TIE!";
    textColor = "text-gray-300";
  } else if (isUserWinner) {
    resultMessage = "YOU WIN!";
    textColor = "text-green-400";
  } else {
    resultMessage = "YOU LOSE!";
    textColor = "text-red-500";
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <div>
        <h2 className={`text-4xl font-extrabold uppercase ${textColor}`}>
          {resultMessage}
        </h2>
        <p className="text-lg text-gray-300 tracking-wide">
          {isUserWinner === "draw"
            ? "That was close! Try again."
            : isUserWinner
            ? "Victory! You're a rockstar!"
            : "Ouch, defeat! Give it another go!"}
        </p>
      </div>

      <div style={{ position: "relative", bottom: "-20px" }}>
        <PlayAgain />
      </div>
    </div>
  );
};

export default Result;
