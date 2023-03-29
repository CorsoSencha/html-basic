window.onload = function() {
  document.getElementById("serif").onclick = fontClick;
  document.getElementById("fantasy").onclick = fontClick;
  document.getElementById("monospace").onclick = fontClick;
  
  document.getElementById("bold").onclick = boldClick;
  document.getElementById("italic").onclick = italicClick;
};

// Called when one of the font radio button is clicked.
function fontClick() { 
  var lyrics = document.getElementById("lyrics");
  lyrics.style.fontFamily = this.id;
  
  // grow font by 2pt
  var oldSize = parseInt(lyrics.style.fontSize) || 12;  // 12
  lyrics.style.fontSize = (oldSize + 2) + "pt";         // "14pt"
}

// Called when the Bold checkbox is clicked.
function boldClick() {
  var lyrics = document.getElementById("lyrics");
  if (this.checked) {
    lyrics.style.fontWeight = "bold";
  } else {
    lyrics.style.fontWeight = "normal";
  }
}

// Called when the Italic checkbox is clicked.
function italicClick() {
  var lyrics = document.getElementById("lyrics");
  if (this.checked) {
    lyrics.style.fontStyle = "italic";
  } else {
    lyrics.style.fontStyle = "normal";
  }
}
