import React from "react";
import PlayerChoice from "./PlayerChoice";
import Choice from "./Choice";
import { RPSChoice } from "../types";
import Result from "./Result";

interface GameGroundProps {
  computerChoice: RPSChoice | null;
  userChoice: RPSChoice | null;
  choices: RPSChoice[];
  isUserWinner: boolean | "draw" | null;
  onPlayAgain: () => void;
  onUserChoice: (choice: RPSChoice) => void;
}

const GameGround: React.FC<GameGroundProps> = ({
  computerChoice,
  userChoice,
  choices,
  isUserWinner,
  onPlayAgain,
  onUserChoice,
}) => {
  console.log("userChoice", userChoice);
  console.log("computerChoice", computerChoice);
  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Display different sections based on whether the user has played */}

      {userChoice === null && (
        // Section before the user picks
        <div>
          <Choice choice={userChoice} side="user" />
          <div className="flex justify-center">
            {choices.map((choice) => (
              <PlayerChoice
                key={choice}
                choice={choice}
                onUserChoice={() => onUserChoice(choice)}
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
          {userChoice && computerChoice && (
            <div className="flex flex-col items-center">
              <Result isUserWinner={isUserWinner} onPlayAgain={onPlayAgain} />
            </div>
          )}

          <div className="flex flex-col items-center">
            <Choice choice={computerChoice} side="computer" />
            <PlayerChoice key={computerChoice} choice={computerChoice} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGround;
