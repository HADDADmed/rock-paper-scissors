// src/components/PlayerChoice.tsx
import React from "react";
import { RPSChoice } from "../types";
import Logo from "./Logo";

interface PlayerChoiceProps {
  choice: RPSChoice | null;
  onUserChoice?: (choice: RPSChoice | null) => void;
}

const PlayerChoice: React.FC<PlayerChoiceProps> = ({
  choice,
  onUserChoice,
}) => {
  return (
    <div
      style={{ textAlign: "center", margin: "1rem" }}
      onClick={() => {
        onUserChoice && onUserChoice(choice);
      }}
    >
      <Logo choice={choice} />
    </div>
  );
};

export default PlayerChoice;
