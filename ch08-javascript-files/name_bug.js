// Converts a name in first-last order to last, first order.
function convertName() {
  var input = document.getElementById("name");
  var name = input.value;
  var spaceIndex = name.indexOf(" ");
  var firstName = name.substring(0, spaceIndex);
  var lastName = name.substring(spaceIndex + 1);
  lastName = lastName.toUpperCase();
  var firstInitial = firstName.charAt(0);
  input.value = lastname + ", " + firstInitial + ".";
}
