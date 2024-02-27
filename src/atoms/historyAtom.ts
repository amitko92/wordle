import { atom, Provider } from 'jotai';
import { atomWithReducer } from "jotai/utils";
import { dumyHistoryGameList } from '../data/dumyHistoryGame';
import { IGame } from '../interface/game.interface';
import { GameAction, GameActionKind } from '../components/reducer/gameReducer';
import { getRandomWord } from '../logic/getRandomWord';
import { initGameData } from "../data/initGame.data";
import { keyboardDetailsReducer } from '../components/reducer/keyboardDetailsReducer';
import { initKeysDetails } from '../data/initKeysDetails.data';

const historyAtom = atom(dumyHistoryGameList/*[] as IHistoryGame[]*/);
const isModalOpenAtom = atom(false);
const isMWNFoundOpenAtom = atom(true);

const keyboardDetailsAtom = atomWithReducer(initKeysDetails, keyboardDetailsReducer);

const gameStateReducer = (state: IGame, action: GameAction) => {
  let copyArr = [];
  let correntActive = state.activeUserInputIndex;

  switch (action.type) {
    case GameActionKind.ADD_LETTER:

      copyArr = [...state.inputUser];
      copyArr[state.activeUserInputIndex] = action.value;

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

      const { } = action;

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
        inputUser: ['', '', '', '', ''],
        activeUserInputIndex: 0,
        gameStatus: action.gameStatus
      };
    default:
      /*return state;*/
      throw new Error('unknown action type')
  }
}

const gameAtom = atomWithReducer({
  ...initGameData,
  word: getRandomWord(),
}, gameStateReducer);

export {
  gameAtom,
  historyAtom,
  isModalOpenAtom,
  keyboardDetailsAtom,
  isMWNFoundOpenAtom
}