window.onload = function() {
  // create several randomly positioned squares
  var squareArea = document.getElementById("squarearea");
  var squareCount = parseInt(Math.random() * 21) + 30;

  for (var i = 0; i < squareCount; i++) {
    var square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    squareArea.appendChild(square);
  }
};

// Generates and returns a random color string such as "#f08a7c".
function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}
