var bandList = [];    // global list of favorite bands

function addToList() {
  var input = document.getElementById("band");
  bandList.push(input.value);
  input.value = "";   // clear the text box
  updateList();
}

function clearList() {
  bandList = [];
  updateList();
}

function reverseList() {
  bandList.reverse();
  updateList();
}

function updateList() {
  var output = document.getElementById("list");
  output.innerHTML = "[" + bandList.join(", ") + "]";
}
