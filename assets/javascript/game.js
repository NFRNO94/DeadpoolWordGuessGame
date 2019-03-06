// create an array of words for the game
var gameWords = ["wade", "vanessa", "cable", "colossus", "francis", "juggernaut"];

// select a word randomly from the array
var randNum = Math.floor(Math.random() * gameWords.length);
var wordChoice = gameWords[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// DOM manipulation
var underScoreDoc = document.getElementsByClassName("underScore");
var rightGuessDoc = document.getElementsByClassName("rightGuess");
var wrongGuessDoc = document.getElementsByClassName("wrongGuess");

console.log(wordChoice);

// generate underscores for the length of the word
var generateUnderscore = () => {
    for (var i = 0; i < wordChoice.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

// get user's guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // if user's guess is right
    if (wordChoice.indexOf(keyword) > -1) {
        //add to right words array
        rightWord.push(keyword);
        // replace underscore with right letter
        underScore[wordChoice.indexOf(keyword)] = keyword;
        // Checks to see if user word matches guesses
        underScoreDoc[0].innerHTML = underScore.join(" ");
        rightGuessDoc[0].innerHTML = rightWord;

        if(underScore.joim(" ") == wordChoice) {
            alert("You win!");
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});





underScoreDoc[0].innerHTML = generateUnderscore().join(" ");
