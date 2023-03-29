var MAX_VALUE = 20;    // largest number that could be used in a problem
var MAX_TIME = null;   // number of seconds for each question
var timer = null;      // holds ID of timer

// Sets up event handler for when the page loads (a la window.onload).
document.observe("dom:loaded", function() {
  MAX_TIME = parseInt($("time").innerHTML);
  nextProblem();
  $("guess").observe("change", guessChange);
});

// Chooses two new random numbers for the next quiz problem.
function nextProblem() {
  $("num1").innerHTML = parseInt(Math.random() * MAX_VALUE) + 1;
  $("num2").innerHTML = parseInt(Math.random() * MAX_VALUE) + 1;
  $("guess").clear();
  $("time").innerHTML = MAX_TIME;
  clearInterval(timer);
  timer = setInterval(tick, 1000);   // timer tick 1x/sec
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

// Adjusts the integer value of the text for the element with the
// given id by the given amount (by 1 if no amount is passed).
function increment(id, amount) {
  var number = parseInt($(id).innerHTML) + (amount || 1);
  $(id).innerHTML = number;
  return number;
}

// Called by timer when time has elapsed (user ran out of time)
function tick() {
  var seconds = increment("time", -1);
  if (seconds <= 0) {   // time up!
    increment("total");
    nextProblem();
  }
}
