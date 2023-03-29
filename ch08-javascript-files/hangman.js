// constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "idempotent"];
var MAX_GUESSES = 6;

// global variables
var guesses = "";                // all letters guessed so far
var guessCount = MAX_GUESSES;    // number of guesses player has left
var word;                        // word the user is trying to guess

// Resets the state of the game and chooses a new random word.
function newGame() {
  // choose a random word
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guessCount = MAX_GUESSES;
  guesses = "";
  updateAppearance();
  
  // enable Guess button
  var guessButton = document.getElementById("guessbutton");
  guessButton.disabled = false;
}

// Updates the hangman image, word clue, etc. to the current game state.
function updateAppearance() {
  var image = document.getElementById("hangmanpic");
  image.src = "hangman" + guessCount + ".gif";
  
  // make sure the word clue shows the proper hints
  var clueString = buildClueString();
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;
  
  // show the guesses the player has made
  var guessArea = document.getElementById("guesses");
  if (clueString.indexOf("_") < 0) {
    guessArea.innerHTML = "You win!!!";   // game over (win)
  } else {
    guessArea.innerHTML = "Guesses: " + guesses;
  }
}

// Creates and returns a string representing the letters guessed
// in the current word, such as "h _ l l _ ".
function buildClueString() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (guesses.indexOf(letter) >= 0) {
      clueString += letter + " ";
    } else {
      clueString += "_ ";
    }
  }
  return clueString;
}

// Guesses a letter. Called when the user presses the Guess button.
function guessLetter() {
  var input = document.getElementById("guess");
  var letter = input.value;
  input.value = "";   // clear text box
  if (guesses.indexOf(letter) >= 0) {
    return;   // already guessed this letter
  }

  var clueString = buildClueString();
  guesses += letter;
  var clueStringAfter = buildClueString();

  if (clueString == clueStringAfter) {
    guessCount--;   // guess letter was not found
  }

  if (guessCount == 0 || clueStringAfter.indexOf("_") < 0) {
    var guessButton = document.getElementById("guessbutton");
    guessButton.disabled = true;   // game over
  }

  updateAppearance();
}
