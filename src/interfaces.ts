import { RPSChoice } from "./types";

interface GameState {
    playerChoice: RPSChoice | null;
    computerChoice: RPSChoice | null;
    result: boolean | "draw" | null;
    score: number;
    gamesPlayed: number;
  }
  
export type { GameState };
