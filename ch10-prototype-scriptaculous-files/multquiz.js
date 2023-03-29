(function() {
  var LEFT = 37;
  var RIGHT = 39;
  var ZERO = 48;
  var NINE = 57;
  var ENTER = 13;
  var BACKSPACE = 8;
  var DELETE = 46;
  var MAX_TIME = 5;      // 5 seconds for each question
  var timer = null;      // holds ID of timer

  $(document).ready(function(){
    $("#guess").keydown(guessKeyDown);
    nextProblem();
  });

  // Called when a key is typed in the text box.
  // On an Enter keypress, checks whether player's guess is correct.
  function guessKeyDown(event) {
    numbersOnly(event);
    if (event.which == ENTER) {
      var guess = $("#guess").val();
      var answer = $("#num1").text() * $("#num2").text();
      if (guess == answer) {
        $("#correct").text(parseInt($("#correct").text()) + 1);
      }

      $("#total").text(parseInt($("#total").text()) + 1);
      nextProblem();
    }
  }

  // Called by timer when time has elapsed (user ran out of time)
  function tick() {
    var seconds = parseInt($("#time").text());
    seconds--;
    $("#time").text(seconds);
    if (seconds <= 0) {   // time up!
      $("#total").text(parseInt($("#total").text()) + 1);
      nextProblem();
    }
  }

  // Chooses two new random numbers for the next quiz problem.
  function nextProblem() {
    $("#num1").text(parseInt(Math.random() * 20) + 1);
    $("#num2").text(parseInt(Math.random() * 20) + 1);
    $("#guess").val("");
    $("#time").text(MAX_TIME);
    clearInterval(timer);
    timer = setInterval(tick, 1000);
  }

  // copied from zip code example
  function numbersOnly(event) {
    if (event.which != LEFT && event.which != RIGHT && 
        event.which != BACKSPACE && event.which != DELETE &&
        (event.which < ZERO || event.which > NINE)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
})();
