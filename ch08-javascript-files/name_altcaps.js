// Capitalizes every other letter of a given name.
function capitalize() {
  var input = document.getElementById("name");
  var name = input.value;
  var newName = "";
  for (var i = 0; i < name.length; i++) {
    if (i % 2 == 0) {
      newName += name.charAt(i).toUpperCase();
    } else {
      newName += name.charAt(i).toLowerCase();
    }
  }
  input.value = newName;
}
