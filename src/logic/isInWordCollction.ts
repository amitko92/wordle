import { words } from "../data/words.data";

export default function isInWordCollction(arr: string[]): boolean {

    const str = convertArrLetterToString(arr);
    console.log(capitalizeFirstLetter(str));
    console.log(words.includes(capitalizeFirstLetter(str)))
    return words.includes(capitalizeFirstLetter(str));
}

export function capitalizeFirstLetter(str: string): string {
 
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

export function convertArrLetterToString(arr: string[]): string {

    return arr.reduce((accumulator, letter) => {
        return accumulator + letter;
    }, '');
}