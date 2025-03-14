// ScoreBoard.tsx
import ScoreCounter from "./ScoreCounter";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ResetButton from "./ResetButtun";

const ScoreBoard: React.FC = () => {
  const { score, gamesPlayed } = useSelector((state: RootState) => state.game);

  return (
    <div className="w-3/4 mx-auto p-6 border-4 border-white/80 rounded-xl flex justify-between items-center backdrop-blur-md shadow-lg text-white">
      <Logo choice={null} />
      <div>
        <ResetButton />
      </div>
      <div className="text-center">
        <h3 className="text-lg uppercase tracking-wider text-gray-300 font-semibold">
          Games Played
        </h3>
        <p className="font-extrabold text-4xl">{gamesPlayed}</p>
      </div>
      <div className="text-center">
         
        <ScoreCounter score={score} />
      </div>
    </div>
  );
};

export default ScoreBoard;
