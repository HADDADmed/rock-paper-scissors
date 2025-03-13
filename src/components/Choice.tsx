import { RPSChoice } from "../types";

interface ChoiceProps {
  side: "user" | "computer";
  choice: RPSChoice | null;
}

const Choice: React.FC<ChoiceProps> = ({ side, choice }) => {
  const textStyles = "font-bold uppercase text-center my-2";

  if (side === "user") {
    return choice ? (
      <div className={textStyles}>
        You picked <strong>{choice}</strong>
      </div>
    ) : (
      <div className={textStyles}>Please pick one before playing!</div>
    );
  }

  if (!choice) {
    return null;
  }

  return (
    <div className={textStyles}>
      The Computer picked <strong>{choice}</strong>
    </div>
  );
};

export default Choice;
