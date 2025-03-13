import React, { useState } from "react";
 
import ScoreBoard from "./ScoreBoard";
import GameGround from "./GameGround";
import { RPSChoice } from "../types";

const choices: RPSChoice[] = ["Rock", "Paper", "Scissors"];

const Game: React.FC = () => {
  const [gamePlayed, setGamePlayed] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState<RPSChoice | null>(null);
  const [computerChoice, setComputerChoice] = useState<RPSChoice | null>(null);
  const [isUserWinner, setIsUserWinner] = useState<boolean | "draw" | null>(
    null
  );

  const checkWinner = (userChoice: RPSChoice, computerChoice: RPSChoice) => {
    if (userChoice === computerChoice) return "draw";
    if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return true;
    }
    return false;
  };

  const onUserChoice = (choice: RPSChoice) => {
    setUserChoice(choice);
    const computerMove = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerMove);

    const result = checkWinner(choice, computerMove);
    setIsUserWinner(result);

    if (result === true) {
      setScore((prev) => prev + 1);
    } else if (result === false && score > 0) {
      setScore((prev) => prev - 1);
    }

    setGamePlayed((prev) => prev + 1);
  };

  const onPlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setIsUserWinner(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rock Paper Scissors</h1>

      <ScoreBoard score={score} gamePlayed={gamePlayed} />

      <GameGround
        computerChoice={computerChoice}
        userChoice={userChoice}
        choices={choices}
        isUserWinner={isUserWinner}
        onUserChoice={onUserChoice}
        onPlayAgain={onPlayAgain}
      />
    </div>
  );
};

export default Game;
