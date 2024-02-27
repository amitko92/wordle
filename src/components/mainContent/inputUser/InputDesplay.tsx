import React, { FormEvent } from "react";
import InputLetter from "./InputLetter";
import style from "../mainContent.module.css";
import { useGameContext } from "../../../context/gameContext";
import { isUserInputValid } from "../../../logic/validation/isUserInputValid";
import { GameStatus } from "../../../enum/gameStatus";
import { useAtom } from "jotai";
import { gameAtom } from "../../../atoms/historyAtom";

const InputDesplay = () => {
  const { handleCheckWord } = useGameContext();
  const [stateGame] = useAtom(gameAtom);
  const userInputValid = isUserInputValid(stateGame.inputUser);

  const checkBtnDisabled =
    !userInputValid || stateGame.gameStatus !== GameStatus.Playing;

  return (
    <form
      className={style.inputDesplayContainer}
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleCheckWord(e)}
    >
      {stateGame.inputUser.map((letter, index) => {
        return (
          <InputLetter letter={letter} key={`letter${index}`} index={index} />
        );
      })}
      <button
        disabled={checkBtnDisabled}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleCheckWord(e)
        }
        className={style.checkBtn}
      >
        CHECK
      </button>
    </form>
  );
};

export default InputDesplay;
