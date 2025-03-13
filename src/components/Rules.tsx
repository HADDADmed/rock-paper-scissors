import imageRules from '../images/image-rules.svg';

/// set up pop up modal for rules image

interface RulesProps {
  showRules: boolean;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rules: React.FC<RulesProps> = ({ showRules, setShowRules }) => {
  return (
    <div
      className="rules"
      style={{
        display: showRules ? "block" : "none",
      }}
    >
      <div className="rules-content">
        <h2>Rules</h2>
        <img src={imageRules} alt="Rules" />
        <button onClick={() => setShowRules(false)}>Close</button>
      </div>
    </div>
  );
};

export default Rules;