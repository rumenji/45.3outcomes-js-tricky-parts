function guessingGame() {
    const number = Math.floor(Math.random() * 100)
    let guesses = 0;
    let guessed = false
    return function check(guess){
        
        if(guessed) return "The game is over, you already won!"
        if(guess === number) {
            guesses++;
            guessed = true;
            return `You win! You found ${number} in ${guesses} guesses.`
    } else if (guess < number) {
        guesses++;
        return `${guess} is too low!`
    } else {
        guesses++;
        return `${guess} is too high!`
    }
}
}

module.exports = { guessingGame };
