interface ScoreCounterProps {
  score: number;
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({ score }) => {
  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      {/* large title  */}
      <h2 style={{ color: "white", fontSize: "2rem", margin: "0" }}>Score</h2>
      {/* display score */}

      <h2 style={{ color: "white", fontSize: "1.2rem", margin: "0" }}>{score}</h2>
    </div>
  );
};

export default ScoreCounter;
