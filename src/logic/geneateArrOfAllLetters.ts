import { Letter } from "../enum/letter";

export function geneateArrOfSequentialNumbers(start: number, end: number): number[] {

    const arr = [];

    for(let i = start; i < end; i++) arr.push(i);

    return arr;
}

export function geneateArrOfAllLetters(): string[] {
    
    return geneateArrOfSequentialNumbers(65, 91).map(code => {
    
        return String.fromCharCode(code)
    })
}