interface showRulesButtonProps {
  onShowRules: () => void;
}

const ShowRulesButton: React.FC<showRulesButtonProps> = ({ onShowRules }) => {
  return (
    <button
      onClick={onShowRules}
      style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        marginTop: "1rem",
        cursor: "pointer",
      }}
    >
      Show Rules
    </button>
  );
};

export default ShowRulesButton;