var MAX_VALUE = 20;    // largest number that could be used in a problem

document.observe("dom:loaded", function() {
  nextProblem();
  $("guess").observe("change", guessChange);
});

// Chooses two new random numbers for the next quiz problem.
function nextProblem() {
  $("num1").innerHTML = parseInt(Math.random() * MAX_VALUE) + 1;
  $("num2").innerHTML = parseInt(Math.random() * MAX_VALUE) + 1;
  $("guess").clear();
}

// Called when player's guess changes.  Checks whether guess is correct.
function guessChange(event) {
  var guess = $F("guess");
  var answer = $("num1").innerHTML * $("num2").innerHTML;
  if (guess == answer) {
    increment("correct");   // user got the right answer; give a point
  }

  increment("total");       // move on to next problem
  nextProblem();
}

// Increases value of text of element with given id by 1.
function increment(id) {
  $(id).innerHTML = parseInt($(id).innerHTML) + 1;
}
