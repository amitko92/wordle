import { IGame } from "../interface/game.interface";
import { GameStatus } from "../enum/gameStatus";
import { LetterState } from "../enum/letterState";
import { initRoundData } from "./initRound.data";

export const initGameData: IGame = {
    word: '',
    roundNumber: 0,
    round: [
        initRoundData,
        initRoundData,
        initRoundData,
        initRoundData,
        initRoundData,
    ],
    inputUser: ['', '', '', '', ''],
    activeUserInputIndex: 0,
    gameStatus: GameStatus.Playing
}