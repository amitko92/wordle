export function isUserInputValid(userInput: string[]): boolean {

    if(userInput == null) {
        return false;
    }

    if(userInput.length !== 5) {
        return false;
    }

    const index = userInput.findIndex(userInput => userInput.length === 0);

    return index <= -1;
}