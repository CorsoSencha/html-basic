var ALLOWED = [Event.KEY_BACKSPACE, Event.KEY_LEFT, Event.KEY_RIGHT];

window.onload = function() {
  $("zip").observe("keydown", zipKeyDown);
  $("zipform").observe("submit", zipFormSubmit);
};

// Called when a key is pressed on the zip code field.
// Disallows non-numeric characters from being typed.
function zipKeyDown(event) {
  var zero = "0".charCodeAt(0);
  var nine = "9".charCodeAt(0);
  if ((event.keyCode < zero || event.keyCode > nine) &&
      ALLOWED.indexOf(event.keyCode) < 0) {
    event.stop();
  }
}

// Called when the user tries to submit the form.
function zipFormSubmit(event) {
  if ($("zip").length != 5) {
    // bad ZIP code; stop form from submitting and show error msg
    $("ziperror").innerHTML = "ZIP code must be 5 characters.";
    $("zip").addClassName("badformdata");
    event.stop();
  }
}
