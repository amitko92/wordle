import { Letter } from "../../enum/letter";
import { LetterState } from "../../enum/letterState";
import { IKeyboardDetails } from "../../interface/specialWords.interface";

export enum KeyboardDetailsActionKind {
    MUTATE = 'MUTATE',
}

// An interface for our actions
export type KeyboardDetailsAction = {
    type: KeyboardDetailsActionKind.MUTATE 
    letter: Letter;
    tetterState: LetterState;
};

export const keyboardDetailsReducer = (state: IKeyboardDetails, action: KeyboardDetailsAction) => {
   
    const letter = action.letter;
    const tetterState = action.tetterState;

    switch (action.type) {
        case KeyboardDetailsActionKind.MUTATE:


            return {
                ...state,
                keys: {
                    ...state.keys, 
                    [letter]: tetterState
                }
            };
        default:
            /*return state;*/
            throw new Error('unknown action type')
    }
}