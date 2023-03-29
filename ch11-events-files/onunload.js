window.onload = function() {
  alert("Aww right!");
  document.observe("unload", bodyUnload);
  document.body.observe("unload", bodyUnload);
};

function bodyUnload(event) {
  alert("onunload");
  if ($("message").value.length() > 0) {
    if (!confirm("Are you sure you want to leave?")) {
      event.stop();
    }
  }
}
