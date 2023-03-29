window.onload = function() {
  $("zip").observe("keydown", zipKeyDown);
};

var ALLOWED = [Event.KEY_BACKSPACE, Event.KEY_LEFT, Event.KEY_RIGHT];

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
