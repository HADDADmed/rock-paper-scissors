interface ScoreCounterProps {
  score: number;
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({ score }) => {
  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <h2>Score</h2>
      <h1>{score}</h1>
    </div>
  );
};

export default ScoreCounter;