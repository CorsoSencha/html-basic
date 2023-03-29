// constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "idempotent"];

// global variables
var word = "?";     // the random word the user is trying to guess
var guesses = "";   // letters the player has guessed

// Chooses a new random word and displays its clue on the page.
function newGame() {
  // choose a random word
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  updatePage();   // show initial word clue - all underscores
}

// Guesses a letter.  Called when the user presses the Guess button.
function guessLetter() {
  var input = document.getElementById("guess");
  var letter = input.value;
  guesses += letter;
  updatePage();   // rebuild word clue
}

// Updates the word clue, guesses, etc. to the current game state.
function updatePage() {
  // update clue string such as "h _ l l _ "
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (guesses.indexOf(letter) >= 0) {   // letter has been guessed
      clueString += letter + " ";
    } else {                              // not guessed
      clueString += "_ ";
    }
  }
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;

  // show guesses made by player
  var guessArea = document.getElementById("guesses");
  guessArea.innerHTML = "Guesses: " + guesses;
}

