window.onload = function() {
  document.getElementById("addheading").onclick = addHeadingClick;
};

function addHeadingClick() {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = "All work and no play makes Jack a dull boy";
  var area = document.getElementById("paragrapharea");
  area.appendChild(paragraph);
}
