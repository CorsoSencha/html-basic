var MAX_TIME = 5;      // 5 seconds for each question
var timer = null;      // holds ID of timer

document.observe("dom:loaded", function() {
  $("guess").observe("keydown", guessKeyDown);
  nextProblem();
});

// Called when a key is typed in the text box.
// On an Enter keypress, checks whether player's guess is correct.
function guessKeyDown(event) {
  numbersOnly(event);
  if (event.keyCode == Event.KEY_RETURN) {
    var guess = $F("guess");
    var answer = $("num1").innerHTML * $("num2").innerHTML;
    if (guess == answer) {
      $("correct").innerHTML = parseInt($("correct").innerHTML) + 1;
    }
    
    $("total").innerHTML = parseInt($("total").innerHTML) + 1;
    nextProblem();
  }
}

// Called by timer when time has elapsed (user ran out of time)
function tick() {
  var seconds = parseInt($("time").innerHTML);
  seconds--;
  $("time").innerHTML = seconds;
  if (seconds <= 0) {   // time up!
    $("total").innerHTML = parseInt($("total").innerHTML) + 1;
    nextProblem();
  }
}

// Chooses two new random numbers for the next quiz problem.
function nextProblem() {
  $("num1").innerHTML = parseInt(Math.random() * 20) + 1;
  $("num2").innerHTML = parseInt(Math.random() * 20) + 1;
  $("guess").clear();
  $("time").innerHTML = MAX_TIME;
  clearInterval(timer);
  timer = setInterval(tick, 1000);
}




function increment(id) {
  $(id).innerHTML = parseInt($(id).innerHTML) + 1;
}



// copied from zip code example

function numbersOnly(event) {
  var ALLOWED = [Event.KEY_RETURN, Event.KEY_BACKSPACE, Event.KEY_LEFT, Event.KEY_RIGHT, Event.KEY_HOME, Event.KEY_END, Event.KEY_TAB];
  var zero = "0".charCodeAt(0);
  var nine = "9".charCodeAt(0);
  if ((event.keyCode < zero || event.keyCode > nine) &&
      ALLOWED.indexOf(event.keyCode) < 0) {
    event.stop();
  }
}
