import ScoreBoard from "./ScoreBoard";
import GameGround from "./GameGround";

const Game: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ScoreBoard />
      <GameGround />
    </div>
  );
};

export default Game;
