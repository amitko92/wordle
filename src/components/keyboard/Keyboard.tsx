import React from "react";
import Key from "./Key";
import style from './keyboard.module.css';
import { Letter } from "../../enum/letter";

type Props = {
  hadlePressKeyBoard: (key: string) => void
};

const letters1: Letter[] = [Letter.Q, Letter.W, Letter.E, Letter.R, Letter.T, Letter.Y, Letter.U, Letter.I, Letter.O, Letter.P];
const letters2: Letter[] = [Letter.A, Letter.S, Letter.D, Letter.F, Letter.G, Letter.H, Letter.J, Letter.K, Letter.L];
const letters3: Letter[] = [Letter.Z, Letter.X, Letter.C, Letter.V, Letter.B, Letter.N, Letter.M];

const Keyboard = ({hadlePressKeyBoard}: Props) => {
  return (
    <div className={style.keyboard}>
      <div className={style.keysRow}>
        {letters1.map(letter => <Key letter={letter} onClick={() => hadlePressKeyBoard(letter)}/>)}
      </div>
      <div className={style.keysRow}>
        {letters2.map(letter => <Key letter={letter} onClick={() => hadlePressKeyBoard(letter)}/>)}
      </div>
      <div className={style.keysRow}>
        {letters3.map(letter => <Key letter={letter} onClick={() => hadlePressKeyBoard(letter)}/>)}
      </div>
    </div>
  );
};

export default Keyboard;
