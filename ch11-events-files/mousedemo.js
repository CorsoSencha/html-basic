window.onload = function() {
  $("status").observe("mousemove", showCoordinates);
  $("status").observe("mousedown", showCoordinates);
  $("status").observe("mouseup", showCoordinates);
};

// Called when any of several mouse events occurs on the status area.
function showCoordinates(event) {
  $("status").innerHTML = "A " + event.type + " event occurred at (" +
      event.pageX + ", " + event.pageY + ")";
}
