import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RPSChoice } from "../types";
import { GameState } from "../interfaces";

const initialState: GameState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: 0,
  gamesPlayed: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playerChoice: (state, action: PayloadAction<RPSChoice>) => {
      console.log("User choice payload", action.payload);
      console.log("User choice state", state.playerChoice);
      console.log("Computer choice state", state.computerChoice);

      const playerChoice = action.payload;
      const choices: RPSChoice[] = ["Rock", "Paper", "Scissors"];
      const computerChoice: RPSChoice = choices[Math.floor(Math.random() * 3)];

      let result: boolean | "draw" | null;
      if (playerChoice === computerChoice) {
        result = "draw";
        state.draws += 1; // Increment draws
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = true;
        state.wins += 1; // Increment wins
      } else {
        result = false;
        state.losses += 1; // Increment losses
      }

      state.playerChoice = playerChoice;
      state.computerChoice = computerChoice;
      state.result = result;

      if (result === true) {
        state.score += 1;
      } else if (result === false && state.score > 0) {
        state.score -= 1;
      }

      state.gamesPlayed += 1;
    },

    resetChoices: (state) => {
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
    },

    resetGame: (state) => {
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
      state.gamesPlayed = 0;
      state.score = 0;
      state.wins = 0;
      state.losses = 0;
      state.draws = 0;
    },
  },
});

export const { playerChoice, resetChoices, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
