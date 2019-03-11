// create an array of words for the game
var gameWords = ["wade", "vanessa", "cable", "colossus", "francis", "juggernaut"];

//declare variables for solutions, the solution letters to store strings in array
// the underscores, to store the correct guesses, and to store the wrong guesses
var correctWord = "";
var correctLetters = [];
var blanks = 0;
var correctLettersBlanks = [];
var wrongLetters = [];

//counters for wins, losses, guesses
var winCount = 0;
var lossCount = 0;
var numberGuess = 9;

// start game function
function gameStart() {
    
    numberGuess = 9;

    correctWord = gameWords[Math.floor(Math.random() * gameWords.length)];

    correctLetters = correctWord.split("");

    blanks = correctLetters.length;

    console.log(correctWord);

    correctLettersBlanks = [];

    wrongLetters = [];

    for(var i = 0; i < blanks; i++) {
        correctLettersBlanks.push("_");
    }

console.log(correctLettersBlanks);

document.getElementById("number-guess").innerHTML = numberGuess;
document.getElementById("underscore").innerHTML = correctLettersBlanks.join(" ");
document.getElementById("wrong-guess").innerHTML = wrongLetters.join(" ");
}

function letterChecker(letter) {

    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if(correctWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (correctWord[j] === letter) {
                correctLettersBlanks[j] = letter;
            }
        }
        console.log(correctLettersBlanks);
    }
    else {
        wrongLetters.push(letter);
        numberGuess--;
    }
}

function finishRound() {
    console.log("Wins: " + winCount + " | Losses: " + lossCount + "| Remaining Guesses: " + numberGuess);

    document.getElementById("number-guess").innerHTML = numberGuess;
    document.getElementById("underscore").innerHTML = correctLettersBlanks.join(" ");
    document.getElementById("wrong-guess").innerHTML = wrongLetters.join(" ");

    if (correctLetters.toString() === correctLettersBlanks.toString()) {
        winCount++;
        alert("You win!");

        document.getElementById("win-count").innerHTML = winCount;
        gameStart();
}
else if (numberGuess === 0) {
    lossCount++;
    alert("You lose!!!!!!!!!");

    document.getElementById("loss-count").innerHTML = lossCount;
        gameStart();
    }
}

gameStart();
// on key event to collect user's key press to use for comparison to solution
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = event.key.toLowerCase();

        letterChecker(userGuess);

        finishRound();
    }
};

