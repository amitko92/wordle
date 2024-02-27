import { words } from "../data/words.data";
import { getRandomInt } from "./getRandomInt";

export function getRandomWord(): string {
    return words[getRandomInt(words.length - 1)].toUpperCase();
}