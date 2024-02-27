import { Letter } from "../enum/letter";
import { LetterState } from "../enum/letterState";

export interface IKeyboardDetails {
    keys: {
        [Letter.A]: LetterState,
        [Letter.B]: LetterState,
        [Letter.C]: LetterState,
        [Letter.D]: LetterState,
        [Letter.E]: LetterState,
        [Letter.F]: LetterState,
        [Letter.G]: LetterState,
        [Letter.H]: LetterState,
        [Letter.I]: LetterState,
        [Letter.J]: LetterState,
        [Letter.K]: LetterState,
        [Letter.L]: LetterState,
        [Letter.M]: LetterState,
        [Letter.N]: LetterState,
        [Letter.O]: LetterState,
        [Letter.P]: LetterState,
        [Letter.Q]: LetterState,
        [Letter.R]: LetterState,
        [Letter.S]: LetterState,
        [Letter.T]: LetterState,
        [Letter.U]: LetterState,
        [Letter.V]: LetterState,
        [Letter.W]: LetterState,
        [Letter.X]: LetterState,
        [Letter.Y]: LetterState,
        [Letter.Z]: LetterState,
    } 
}

export interface IKeyDetails {
    letterState: LetterState,
    letter: Letter,
}

