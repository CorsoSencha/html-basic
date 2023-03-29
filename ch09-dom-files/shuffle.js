window.onload = function() {
  document.getElementById("shuffle").onclick = shuffleClick;
};

function shuffleClick() {
  var lines = items.value.split("\n");   // split into lines
  shuffle(lines);
  items.value = lines.join("\n");        // put back into text area
}

// Randomly rearranges the elements of the given array.
function shuffle(a) {
  for (var i = 0; i < a.length; i++) {
    // pick a random index j such that i <= j <= a.length - 1
    var j = i + parseInt(Math.random() * (a.length - i));
    
    // swap
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}
