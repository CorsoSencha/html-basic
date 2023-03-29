// Multiplies two numbers typed into input boxes on the page,
// and displays the result in a span on the page.
function compute() {
  var input1 = document.getElementById("num1");   // fetch the 2 numbers
  var input2 = document.getElementById("num2");
  var answer = document.getElementById("answer");
  var result = input1.value * input2.value;       // compute result
  answer.innerHTML = result;
}
