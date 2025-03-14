import fistImg from "../assets/logos/rockHand.png";
import paperImg from "../assets/logos/handPaper.png";
import scissorsImg from "../assets/logos/scisors.png";
import gameLogo from "../assets/logos/game-logo.svg";

interface LogoProps {
  choice: string | null;
}

const PlayerChoiceLogo: React.FC<LogoProps> = ({ choice }) => {
  
  let logoPath = gameLogo;
  let logoAlt = "Rock Paper Scissors Game";
  let borderColor = "";
  let isRPS = false; // To check if it's an RPS choice

  switch (choice) {
    case "Rock":
      logoPath = fistImg;
      logoAlt = "Rock";
      borderColor = "border-red-500"; // Rock color
      isRPS = true;
      break;
    case "Paper":
      logoPath = paperImg;
      logoAlt = "Paper";
      borderColor = "border-blue-500"; // Paper color
      isRPS = true;
      break;
    case "Scissors":
      logoPath = scissorsImg;
      logoAlt = "Scissors";
      borderColor = "border-yellow-500"; // Scissors color
      isRPS = true;
      break;
    default:
      logoAlt = "Rock Paper Scissors Logo";
      break;
  }

  return isRPS ? (
    // RPS choice with circle and border
    <div
      className={`w-52 h-52 flex items-center justify-center rounded-full border-16 ${borderColor} bg-gray-200`}
    >
      <img src={logoPath} alt={logoAlt} className="w-26 h-36" />
    </div>
  ) : (
    // Non-RPS logo (normal display)
    <div className="w-24 h-24 flex items-center justify-center">
      <img src={logoPath} alt={logoAlt} className="w-26 h-26" />
    </div>
  );
};

export default PlayerChoiceLogo;
