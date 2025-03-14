import ScoreCounter from "./ScoreCounter";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ResetButton from "./ResetButtun";

const ScoreBoard: React.FC = () => {
  const { gamesPlayed } = useSelector(
    (state: RootState) => state.game
  );

  return (
    <div className="w-3/4 mx-auto p-4 border-4 border-white/80 rounded-xl flex justify-between items-center backdrop-blur-md shadow-lg text-white">
      {/* Logo */}
      <Logo choice={null} />

      {/* Games Played */}
      <div className="text-center">
        <h3 className="text-sm uppercase tracking-wider text-gray-300 font-semibold">
          Games Played
        </h3>
        <p className="font-extrabold text-xl">{gamesPlayed}</p>
      </div>

      {/* Score Counter */}
      <ScoreCounter />

     

      {/* Reset Button */}
      <ResetButton />
    </div>
  );
};

export default ScoreBoard;
