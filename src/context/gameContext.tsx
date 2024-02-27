import React, { FormEvent, useContext, useRef } from "react";
import { GameActionKind } from "../components/reducer/gameReducer";
import { ILetterRound } from "../interface/letterRound.interface";
import { LetterState } from "../enum/letterState";
import { IRound } from "../interface/round.interface";
import { GameStatus } from "../enum/gameStatus";
import { RoundStatus } from "../enum/roundStatus";
import { words } from "../data/words.data";
import {
  gameAtom,
  isMWNFoundOpenAtom,
  isModalOpenAtom,
  keyboardDetailsAtom,
} from "../atoms/historyAtom";
import { useAtom } from "jotai";
import { KeyboardDetailsActionKind } from "../components/reducer/keyboardDetailsReducer";
import { Letter } from "../enum/letter";
import isInWordCollction from "../logic/isInWordCollction";

type GameContextState = {
  handleCheckWord(e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>): void;
  userInputRefs: React.MutableRefObject<HTMLInputElement | null>[];
  hadlePressKeyBoard: (key: string) => void;
};

type GameContextStateProps = {
  children: React.ReactNode;
};

export const GameContext = React.createContext<GameContextState>(
  {} as GameContextState
);

const GameProvider: React.FC<GameContextStateProps> = ({ children }) => {
  const [stateGame, dispatch] = useAtom(gameAtom);
  const [keyboardDetails, despKeyboardDetails] = useAtom(keyboardDetailsAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const [isMWNFoundOpen, setIsMWNFoundOpen] = useAtom(isMWNFoundOpenAtom);

  const userInputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  return (
    <GameContext.Provider
      value={{
        handleCheckWord,
        handleKeyUp,
        userInputRefs,
        hadlePressKeyBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );

  function openModal() {
    setIsModalOpen(true);
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>): void {
    const key = event.key;
    const currentValue = stateGame.inputUser[stateGame.activeUserInputIndex];
    let testRes = /^[a-zA-Z]{1}$/.test(key);

    if (testRes) {
      const newCurrentIndex = stateGame.activeUserInputIndex + 1;
      let value = key.toUpperCase();

      dispatch({
        type: GameActionKind.ADD_LETTER,
        value: value,
        newCorrentActive:
          newCurrentIndex < 5
            ? newCurrentIndex
            : stateGame.activeUserInputIndex,
      });

      return;
    }

    if (key === "Backspace" && currentValue.length > 0) {
      dispatch({ type: GameActionKind.DELETE_LETTER });
      return;
    }

    if (key === "Backspace" && currentValue.length === 0) {
      dispatch({ type: GameActionKind.FOCUS_BACK });
      return;
    }
  }

  function handleCheckWord(e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault();

    if(!isInWordCollction(stateGame.inputUser)) {
      setIsMWNFoundOpen(true);
      return;
    }

    const round = checkWord();
    let gameStatus = stateGame.gameStatus;

    if (round.roundStatus === RoundStatus.Success) {
      gameStatus = GameStatus.Playing;
      openModal();
    }

    if (stateGame.roundNumber === stateGame.round.length) {
      gameStatus = GameStatus.Lost;
      openModal();
    }

    addRound(round, gameStatus);
  }

  function checkWord(): IRound {
    let roundStatus = RoundStatus.Success;
    console.log(stateGame.word);
    const roundList = stateGame.inputUser.map(
      (letter: string, index: number) => {
        const letterRound = checkLetter(letter, index);

        if (letterRound.state !== LetterState.Correct) {
          roundStatus = RoundStatus.Failure;
        }

        return letterRound;
      }
    );

    const round = {
      letterRounds: roundList,
      roundStatus: roundStatus,
    };

    return round;
  }

  function addRound(round: IRound, gameStatus: GameStatus) {
    dispatch({
      type: GameActionKind.ADD_ROUND,
      round: round,
      gameStatus: gameStatus,
    });
  }

  function checkLetter(letter: string, index: number): ILetterRound {
    let letterState = LetterState.NotCorrect;

    if (stateGame.word.includes(letter)) {
      letterState = LetterState.PartiallyCorrect;
    }

    if (stateGame.word.charAt(index) === letter) {

      letterState = LetterState.Correct;
    }

    const letterRound = {
      letter: letter,
      state: letterState,
    };

    //console.log(`${letter} in Letter: ${letter in Letter}`)
    if (letter in Letter) {
      despKeyboardDetails({
        type: KeyboardDetailsActionKind.MUTATE,
        letter: letter as Letter,
        tetterState: letterState,
      });
    }

    const ref = userInputRefs[0];

    if (ref.current !== null) {
      ref.current.focus();
    }

    return letterRound;
  }

  function hadlePressKeyBoard(key: string) {
    const newCurrentIndex = stateGame.activeUserInputIndex + 1;
    let value = key;

    dispatch({
      type: GameActionKind.ADD_LETTER,
      value: value,
      newCorrentActive:
        newCurrentIndex < 5 ? newCurrentIndex : stateGame.activeUserInputIndex,
    });
  }
};

export default GameProvider;

export const useGameContext = () => useContext(GameContext);
