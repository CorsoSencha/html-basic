window.onload = function() {
  document.getElementById("tenpercent").onclick = computeTip;
  document.getElementById("fifteenpercent").onclick = computeTip;
  document.getElementById("eighteenpercent").onclick = computeTip;
};

// Computes proper tip amount based on the subtotal and tip percentage.
function computeTip() {
  var subtotal = parseFloat(document.getElementById("subtotal").value);
  var tipPercent = parseInt(this.innerHTML);
  var tipAmount = subtotal * tipPercent / 100.0;
  document.getElementById("total").innerHTML = "Tip: $" + tipAmount;
}
