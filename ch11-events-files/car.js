window.onload = function() {
  $("car").observe("change", carChange);
};

// Enables hybrid option when Toyota is chosen as car maker
function carChange(event) {
  alert(this.value);
  $("hybrid").disabled = (this.value != "Toyota");
}
