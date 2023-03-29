var maxZ = 1000;     // z-index of rectangle that gets clicked

var oldX = null;     // x/y position of last mousemove event
var oldY = null;
var moving = null;   // square that is moving, if any

window.onload = function() {
  // create several randomly positioned squares
  var squareCount = parseInt(Math.random() * 21) + 30;
  for (var i = 0; i < squareCount; i++) {
    var square = $(document.createElement("div"));
    square.className = "square";
    $("squarearea").appendChild(square);

    var squareSize = parseInt(square.getStyle("width"));
    var w = parseInt($("squarearea").getStyle("width")) - squareSize;
    var h = parseInt($("squarearea").getStyle("height")) - squareSize;
    square.style.left = parseInt(Math.random() * w) + "px";
    square.style.top = parseInt(Math.random() * h) + "px";
    square.style.backgroundColor = getRandomColor();

    square.observe("mousedown", squareMouseDown);
    square.observe("mousemove", squareMouseMove);
    square.observe("mouseup", squareMouseUp);
  }
};

// Called when the user presses down the mouse button.
// Moves the clicked square to the top and starts moving it.
function squareMouseDown(event) {
  this.style.zIndex = (++maxZ);   // move clicked square to top
  moving = this;
  oldX = event.pointerX();        // remember this square for
  oldY = event.pointerY();        //   future mousemove events
}

// Called when the user lifts the mouse button.  Stops dragging.
function squareMouseUp(event) {
  moving = null;
}

// Called when the user moves the mouse.  Drags a square if 
// the mouse button is being held down.
function squareMouseMove(event) {
  if (this === moving && oldX !== null && oldY !== null) {
    var dx = event.pointerX() - oldX;
    var dy = event.pointerY() - oldY;
    this.style.left = parseInt(this.style.left) + dx + "px";
    this.style.top  = parseInt(this.style.top)  + dy + "px";
    oldX = event.pointerX();   // update old x/y to current position
    oldY = event.pointerY();
  }
}

function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function squareClick() {
}
