import ScoreCounter from "./ScoreCounter";
import Logo from "./Logo";

interface ScoreBoardProps {
  score: number;
  gamePlayed: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, gamePlayed }) => {
  return (
    <div className="w-2/4 mx-auto p-6 border-4 border-white/80 rounded-xl flex justify-between items-center backdrop-blur-md shadow-lg text-white m-5">
      <Logo choice={null} />
      <div className="text-center">
        <h3 className="text-lg uppercase tracking-wider text-gray-300 font-semibold">
          Games Played
        </h3>
        <p className="font-extrabold text-4xl">{gamePlayed}</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg uppercase tracking-wider text-gray-300 font-semibold">
          Score
        </h3>
        <ScoreCounter score={score} />
      </div>
    </div>
  );
};

export default ScoreBoard;
