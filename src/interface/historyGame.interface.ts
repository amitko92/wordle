import { GameStatus } from "../enum/gameStatus";

export interface IHistoryGame {
    gameStatus: GameStatus;
    word: string;
}