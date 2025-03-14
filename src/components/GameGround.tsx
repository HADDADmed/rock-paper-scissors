import React from "react";
import PlayerChoice from "./PlayerChoice";
import Choice from "./Choice";
import { RPSChoice } from "../types";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { playerChoice } from "../features/gameSlice";

const GameGround: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get state from Redux store
  const { playerChoice: userChoice, computerChoice } = useSelector(
    (state: RootState) => state.game
  );

  const handleUserChoice = (choice: RPSChoice) => {
    console.log("User choice", choice);
    dispatch(playerChoice(choice));
  };

  return (
    <div>
      <div style={{ marginTop: "-3rem" }}>
        {userChoice === null && (
          <div
            className="relative mx-auto"
            style={{ width: "500px", height: "500px" }}
          >

            {/* Triangle container */}
            <div className="relative h-full w-full">
              {/* Rock - Bottom Left */}
              <div
                className="absolute"
                style={{
                  bottom: "10%",
                  left: "10%",
                }}
              >
                <PlayerChoice
                  choice="Rock"
                  onUserChoice={() => handleUserChoice("Rock")}
                />
              </div>
            

              {/* Paper - Bottom Right */}
              <div
                className="absolute"
                style={{
                  bottom: "10%",
                  right: "10%",
                }}
              >
                <PlayerChoice
                  choice="Paper"
                  onUserChoice={() => handleUserChoice("Paper")}
                />
              </div>

              {/* Scissors - Top Center */}
              <div
                className="absolute"
                style={{
                  top: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <PlayerChoice
                  choice="Scissors"
                  onUserChoice={() => handleUserChoice("Scissors")}
                />
              </div>
            </div>
              <div style={
                {
                  position: "absolute",
                  top: "20%",
                  left: "90%",
                
                }
              }>
              <Choice choice={userChoice} side="user" />
              </div>
          </div>
        )}
      </div>
      <div style={{ marginTop: "5rem" }}>
        {userChoice !== null && (
          // Section after the user picks
          <div className="flex justify-center items-center ">
            <div className="flex flex-col items-center">
              <Choice choice={userChoice} side="user" />
              <PlayerChoice key={userChoice} choice={userChoice} />
            </div>

            {/* Show the Result component only after both choices are made */}
            {computerChoice && (
              <div
                style={{
                  marginLeft: "3rem",
                  marginTop: "5rem",
                }}
                className="flex flex-col items-between "
              >
                <Result />
              </div>
            )}

            <div className="flex flex-col items-center">
              <Choice choice={computerChoice} side="computer" />
              <PlayerChoice
                key={computerChoice ?? "comp"}
                choice={computerChoice}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameGround;
