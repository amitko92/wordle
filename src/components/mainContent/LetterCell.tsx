import React from "react";
import style from "./mainContent.module.css";
import { ILetterRound } from "../../interface/letterRound.interface";
import { LetterState } from "../../enum/letterState";

type Props = {
  letterRound: ILetterRound;
};

const LetterCell = ({ letterRound }: Props) => {
  let classes = style.letterCell;
  console.log(letterRound.state);
  if (letterRound.state === LetterState.Correct) {
    classes = style.letterCell + " " + style.letterCellGreen;
  } else if (letterRound.state === LetterState.PartiallyCorrect) {
    classes = style.letterCell + " " + style.letterCellOrange;
  } else {
    classes = style.letterCell;
  }

  return <div className={classes}>{letterRound.letter}</div>;
};

export default LetterCell;
