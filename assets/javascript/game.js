let words = ["coffee", "latte", "mocha", "tea", "americano"];

let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let randomWord = words[Math.floor(Math.random() * words.length)];

let displayWord = "";

let newDisplayWord = "";

let guesses = 15;

let incorrectGuesses = [];

console.log ("random word is " + randomWord + "!");

function display() {
    for ( let i = 0; i < randomWord.length; i++ ) {
        displayWord = displayWord.concat("_ ");
    }
    displayWord = displayWord.trim();
    console.log("display word is " + displayWord);
}

display();

    document.onkeyup = function (event) {
        let userGuess = event.key.toLowerCase();
    
    if (options.indexOf(userGuess) > -1) {
        for (let i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord[i]) {
                newDisplayWord = newDisplayWord.concat(randomWord[i] + " ");
                console.log("Yes!");
            } else {
                newDisplayWord = newDisplayWord.concat("_ ");
                console.log("No!");
                
            }
        }

        console.log("The new display word is " + newDisplayWord)


    //     if (allGuesses.indexOf(userGuess) === -1) {
    //         if (userGuess === computerGuess) {
    //             wins++;
    //             repeat();
    //         } else if (guessesLeft > 1) {
    //             guessesLeft--;
    //             allGuesses.push(userGuess);
    //         } else {
    //             losses++;
    //             repeat();
    //         }
    //     winsText.textContent = wins;
    //     lossesText.textContent = losses;
    //     guessesLeftText.textContent = guessesLeft;
    //     allGuessesText.textContent = allGuesses;
    //     } else {
    //         alert("Choose an unused letter to continue playing!")
    //     }
    } else {
        alert("Choose a letter to play!");
        };
    
    
}
