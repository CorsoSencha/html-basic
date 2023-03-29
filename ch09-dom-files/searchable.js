window.onload = function() {
  document.getElementById("searchbutton").onclick = searchClick;
};

// Called when the Search button is clicked.
// Looks for paragraphs matching a search string and highlights them.
function searchClick() { 
  var searchPhrase = document.getElementById("searchtext").value;
  
  var main = document.getElementById("main");
  var mainParas = main.getElementsByTagName("p");
  
  for (var i = 0; i < mainParas.length; i++) {
    if (mainParas[i].innerHTML.indexOf(searchPhrase) >= 0) {
      mainParas[i].className = "highlighted";  // highlight
    } else {
      mainParas[i].className = null;           // un-highlight
    }
  }
}
