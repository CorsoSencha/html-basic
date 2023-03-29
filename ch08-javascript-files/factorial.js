// Computes the factorial of a given integer.
function factorial() {
  var input = document.getElementById("number");
  var number = input.value;
  var result = 1;
  for (var i = 1; i <= number; i++) {
    result = result * i;
  }
  
  var span = document.getElementById("result");
  span.innerHTML = result;
}
