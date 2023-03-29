window.onload = function() {
  document.getElementById("tenpercent").onclick = computeTip10;
};

// Computes proper tip amount based on the subtotal and 10% tip.
function computeTip10() {
  var subtotal = parseFloat(document.getElementById("subtotal").value);
  var tipAmount = subtotal * 10 / 100.0;
  document.getElementById("total").innerHTML = "Tip: $" + tipAmount;
}
