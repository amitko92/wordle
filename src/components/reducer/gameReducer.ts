import { IGame } from "../../interface/game.interface";
import { GameStatus } from "../../enum/gameStatus";
import { IRound } from "../../interface/round.interface";
import { getRandomWord } from "../../logic/getRandomWord";
import { initGameData } from "../../data/initGame.data";

// An enum with all the types of actions to use in our reducer
export enum GameActionKind {
    ADD_LETTER = 'ADD_LETTER',
    DELETE_LETTER = 'DELETE_LETTER',
    RESET_GAME = 'RESET_GAME',
    FOCUS_BACK = 'FOCUS_BACK',
    ADD_ROUND = 'ADD_ROUND'
}

// An interface for our actions
export type GameAction = {
    type: GameActionKind.ADD_LETTER;
    value: string;
    newCorrentActive: number;
} | {
    type: GameActionKind.DELETE_LETTER;
} | {
    type: GameActionKind.FOCUS_BACK;
} | {
    type: GameActionKind.RESET_GAME;
}
    | {
        type: GameActionKind.ADD_ROUND;
        round: IRound;
        gameStatus: GameStatus;
    };

// Our reducer function that uses a switch statement to handle our actions
export function gameReducer(state: IGame, action: GameAction) {

    let copyArr = [];
    let correntActive = state.activeUserInputIndex;


    switch (action.type) {
        case GameActionKind.ADD_LETTER:
            copyArr = [...state.inputUser];
            copyArr[state.activeUserInputIndex] = action.value + action.value;

            return {
                ...state,
                inputUser: copyArr,
                activeUserInputIndex: action.newCorrentActive
            };
        case GameActionKind.DELETE_LETTER:

            copyArr = [...state.inputUser];
            copyArr[state.activeUserInputIndex] = '';

            return { ...state, inputUser: [...copyArr] };
        case GameActionKind.FOCUS_BACK:
            let newIndex = state.activeUserInputIndex;

            if (state.activeUserInputIndex > 0) {
                newIndex = state.activeUserInputIndex - 1;
            }

            return { ...state, activeUserInputIndex: newIndex };
        case GameActionKind.RESET_GAME:

        const {} = action;

            return {
                ...initGameData, word: getRandomWord(),
            };

        case GameActionKind.ADD_ROUND:

            const temp = [...state.round];

            temp[state.roundNumber] = action.round;

            return {
                ...state,
                round: temp,
                roundNumber: state.roundNumber + 1,
                inputUser: ['','','','',''],
                activeUserInputIndex: 0,
                gameStatus: action.gameStatus
            };
        default:
            return state;
    }
}