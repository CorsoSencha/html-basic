function compute() {
  var input1 = document.getElementById("number1");
  var input2 = document.getElementById("number2");
  var answer = document.getElementById("answer");
  var result = input1.value * input2.value;
  answer.innerHTML = result;
}
