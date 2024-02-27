import React from 'react'
import LetterCell from './LetterCell';
import style from './mainContent.module.css';
import { IRound } from '../../interface/round.interface';

type Pros = {
    round: IRound;
}

const LettersRow = ({round}: Pros) => {
  return (
    <div className={style.lettersRow}>
        <LetterCell letterRound={round.letterRounds[0]} />
        <LetterCell letterRound={round.letterRounds[1]} />
        <LetterCell letterRound={round.letterRounds[2]} />
        <LetterCell letterRound={round.letterRounds[3]} />
        <LetterCell letterRound={round.letterRounds[4]} />
    </div>
  )
}

export default LettersRow;