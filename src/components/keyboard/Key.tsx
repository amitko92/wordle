import React from "react";
import { useAtom } from "jotai";
import style from "./keyboard.module.css";
import { keyboardDetailsAtom } from "../../atoms/historyAtom";
import { Letter } from "../../enum/letter";
import { LetterState } from "../../enum/letterState";

type Props = {
  letter: Letter;
  onClick: () => void;
};

const Key = ({ letter, onClick }: Props) => {
  const [keyboardDetails] = useAtom(keyboardDetailsAtom);
  const temp = keyboardDetails.keys[letter]
    ? keyboardDetails.keys[letter]
    : null;

  let classes = style.key;

  if (temp === null) {
    return null;
  }

  if (temp === LetterState.Correct) {
    classes += ' ' + style.bgColorGreen + ' ' + style.clickable;
  }

  if (temp === LetterState.NotCorrect) {
    classes += ' ' + style.notCorrect;
  }

  if (temp === LetterState.PartiallyCorrect) {
    classes += ' ' + style.bgColorOrenge + ' ' + style.clickable;
  }

  if(temp === LetterState.Unknown) {
    classes += ' ' + style.unknown + ' ' + style.clickable;
  }

  return (
    <div className={classes} onClick={onClick}>
      {letter}
    </div>
  );
};

export default Key;
