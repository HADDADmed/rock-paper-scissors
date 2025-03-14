// Action Types
const PLAYER_CHOICE = "PLAYER_CHOICE";
import { RPSChoice } from "../types";

// Action Creator (with TypeScript type)
interface PlayerChoiceAction {
  type: typeof PLAYER_CHOICE;
  payload: RPSChoice|null; // 'rock', 'paper', 'scissors'
}

export const playerChoice = (choice: RPSChoice |null): PlayerChoiceAction => ({
  type: PLAYER_CHOICE,
  payload: choice,
});

export type { PlayerChoiceAction };
