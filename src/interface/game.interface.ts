import { GameStatus } from "../enum/gameStatus";
import { IRound } from "./round.interface";

export interface IGame {
    word: string;
    round: IRound[];
    roundNumber: number;
    inputUser: string[];
    activeUserInputIndex: number;
    gameStatus: GameStatus
}