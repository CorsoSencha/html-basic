function getInfo() {
  var span = document.getElementById("output");
    span.innerHTML = "Browser: " + navigator.appName + "; System: " + navigator.platform;
}

function goBack() {
  history.back();
}
