window.onload = function() {
  var add = document.getElementById("add");
  add.onclick = addSquare;
  var colors = document.getElementById("colors");
  colors.onclick = changeColors;
  
  // create several randomly positioned squares
  var squareCount = parseInt(Math.random() * 21) + 30;
  for (var i = 0; i < squareCount; i++) {
    addSquare();
  }
};

// Creates and adds a new square div to the page.
function addSquare() {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 650) + "px";
  square.style.top = parseInt(Math.random() * 250) + "px";
  square.style.backgroundColor = getRandomColor();

  var squareArea = document.getElementById("squarearea");
  squareArea.appendChild(square);
}

// Gives a new randomly chosen color to every square on the page.
function changeColors() {
  var squareArea = document.getElementById("squarearea");
  var squares = squareArea.getElementsByTagName("div");
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = getRandomColor();
  }
}

// Generates and returns a random color string such as "#f08a7c".
function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}
