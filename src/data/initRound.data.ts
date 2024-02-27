import { RoundStatus } from "../enum/roundStatus";
import { LetterState } from "../enum/letterState";

export const initRoundData = {
    letterRounds: [
        { letter: '', state: LetterState.NotCorrect },
        { letter: '', state: LetterState.NotCorrect },
        { letter: '', state: LetterState.NotCorrect },
        { letter: '', state: LetterState.NotCorrect },
        { letter: '', state: LetterState.NotCorrect }
    ],
    roundStatus: RoundStatus.UnDeterminant
}