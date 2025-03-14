import { RPSChoice } from "../types";

interface ChoiceProps {
  side: "user" | "computer";
  choice: RPSChoice | null;
}

const Choice: React.FC<ChoiceProps> = ({ side, choice }) => {
  const baseStyles = "font-semibold text-2xl tracking-wide transition-all m-6";
  const userStyles = "text-blue-600"; // Cool blue for user choice
  const computerStyles = "text-gray-500"; // Subtle gray for computer choice
  const emptyStyles = "text-yellow-600 italic"; // Soft yellow for prompts

  if (side === "user") {
    return choice ? (
      <p className={`${baseStyles} ${userStyles}`}>
        You picked <strong className="font-extrabold">{choice}</strong>
      </p>
    ) : (
      <p className={`${baseStyles} ${emptyStyles}`}>Please pick one before playing!</p>
    );
  }

  if (!choice) {
    return null;
  }

  return (
    <p className={`${baseStyles} ${computerStyles}`}>
      The Computer picked <strong className="font-extrabold">{choice}</strong>
    </p>
  );
};

export default Choice;
