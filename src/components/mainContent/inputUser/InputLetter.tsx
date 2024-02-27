import React from "react";
import style from "../mainContent.module.css";
import { useGameContext } from "../../../context/gameContext";
import { useAtom } from "jotai";
import { gameAtom } from "../../../atoms/historyAtom";

type Props = {
  letter: string;
  index: number;
};

const InputLetter = ({ letter, index }: Props) => {
  const { handleKeyUp, userInputRefs } = useGameContext();
  const [stateGame] = useAtom(gameAtom);

  const isFocus = index === stateGame.activeUserInputIndex;

  const ref = userInputRefs[index];

  if (ref.current !== null && isFocus) {
    ref.current.focus();
  }

  return (
    <input
      ref={userInputRefs[index]}
      className={style.inputLetter}
      value={letter}
      name={`input${index}`}
      onKeyUp={handleKeyUp}
    />
  );
};

export default InputLetter;
