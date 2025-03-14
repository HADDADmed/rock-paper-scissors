// GameGround.tsx
import React from "react";
import PlayerChoice from "./PlayerChoice";
import Choice from "./Choice";
import { RPSChoice } from "../types";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { playerChoice, resetChoices } from "../features/gameSlice";

// Use lowercase choices to match the type
const choices: RPSChoice[] = ["Rock", "Paper", "Scissors"];

const GameGround: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get state from Redux store
  const { playerChoice: userChoice, computerChoice, result } = useSelector(
    (state: RootState) => state.game
  );

  const handleUserChoice = (choice: RPSChoice) => {
    console.log("User choice", choice);
    dispatch(playerChoice(choice));
  };

  // Only resets the view (choices/result), leaving score intact
  const handlePlayAgain = () => {
    dispatch(resetChoices());
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {userChoice === null && (
        // Section before the user picks
        <div>
          <Choice choice={userChoice} side="user" />
          <div className="flex justify-center">
            {choices.map((choice) => (
              <PlayerChoice
                key={choice}
                choice={choice}
                onUserChoice={() => handleUserChoice(choice)}
              />
            ))}
          </div>
        </div>
      )}

      {userChoice !== null && (
        // Section after the user picks
        <div className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <Choice choice={userChoice} side="user" />
            <PlayerChoice key={userChoice} choice={userChoice} />
          </div>

          {/* Show the Result component only after both choices are made */}
          {computerChoice && (
            <div className="flex flex-col items-center">
              <Result isUserWinner={result} onPlayAgain={handlePlayAgain} />
            </div>
          )}

          <div className="flex flex-col items-center">
            <Choice choice={computerChoice} side="computer" />
            <PlayerChoice
              key={computerChoice ?? "comp"}
              choice={computerChoice}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGround;
