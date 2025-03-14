import PlayAgain from "./PlayAgain";

interface ResultProps {
  isUserWinner: boolean | "draw" | null;
  onPlayAgain: () => void;
}

const Result: React.FC<ResultProps> = ({ isUserWinner, onPlayAgain }) => {
  let resultMessage = "";
  let textColor = "";
  let buttonBorder = "";

  if (isUserWinner === "draw") {
    resultMessage = "IT'S A TIE!";
    textColor = "text-gray-300";
    buttonBorder = "";
  } else if (isUserWinner) {
    resultMessage = "YOU WIN!";
    textColor = "text-green-400";
    buttonBorder = "";
  } else {
    resultMessage = "YOU LOSE!";
    textColor = "text-red-500";
    buttonBorder = "border-2 border-red-300";
  }

  return (
    <div className="flex flex-col items-center justify-center h-full  space-y-6">
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

      <div
        style={{
          position: "relative",
          bottom: "-20px",
        }}
      >
        <PlayAgain  onPlayAgain={onPlayAgain} result={isUserWinner} />
      </div>
    </div>
  );
};

export default Result;
