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


// generate underscores for the length of the word
var generateUnderscore = () => {
    for (var i = 0; i < wordChoice.length; i++) {
        underScore.push("_");
        underScoreDoc.[0].innerHtml = underScore.join("")
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
    // Checks to see if user word matvhes guesses
        if(underScore.join("") == wordChoice) {
            alert("You Win");
        }
    }
    else {
        wrongWord.push(keyword);
    }
});


generateUnderscore();
