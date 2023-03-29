// constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "idempotent"];

// Chooses a new random word and displays its clue on the page.
function newGame() {
  // choose a random word
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  var word = POSSIBLE_WORDS[randomIndex];

  // show initial word clue - all underscores
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    clueString += "_ ";
  }
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;
}
