import React from "react";
import LettersRow from "./LettersRow";
import style from "./mainContent.module.css";
import { useGameContext } from "../../context/gameContext";
import { useAtom } from "jotai";
import { gameAtom } from "../../atoms/historyAtom";

const DisplayAttempts = () => {

  const [stateGame] = useAtom(gameAtom);
  const rounds = stateGame.round;

  return (
    <div className={style.displayAttemptsContainer}>
      {rounds.map((round, index) => <LettersRow key={`LettersRow${index}`} round={round} />)}
    </div>
  );
};

export default DisplayAttempts;
