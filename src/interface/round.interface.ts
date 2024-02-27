import { RoundStatus } from "../enum/roundStatus";
import { ILetterRound } from "./letterRound.interface";

export interface IRound {
    letterRounds: ILetterRound[];
    roundStatus: RoundStatus;
}