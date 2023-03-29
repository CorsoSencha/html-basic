var beerCount = 99;

window.onload = function() {
  $("target").observe("mousemove", eventStatus);
};

function eventStatus(event) {
  var s = "";
  if (undefined !== event.x) {
    s += "         x=" + event.x + ", y=" + event.y + "<br/>";
  }
  if (undefined !== event.clientX) {
    s += "client : x=" + event.clientX + ", y=" + event.clientY + "<br/>";
  }
  if (undefined !== event.layerX) {
    s += "layer  : x=" + event.layerX + ", y=" + event.layerY + "<br/>";
  }
  if (undefined !== event.offsetX) {
    s += "offset : x=" + event.offsetX + ", y=" + event.offsetY + "<br/>";
  }
  if (undefined !== event.pageX) {
    s += "page   : x=" + event.pageX + ", y=" + event.pageY + "<br/>";
  }
  if (undefined !== event.screenX) {
    s += "screen : x=" + event.screenX + ", y=" + event.screenY + "<br/>";
  }
  if (undefined !== event.pointerX()) {
    s += "pointer: x=" + event.pointerX() + ", y=" + event.pointerY() + "<br/>";
  }
  
  var used = ["x", "clientX", "layerX", "offsetX", "pageX", "screenX", "pointerX"];
  var keys = $A(Object.keys(event));
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase().endsWith("x") && used.indexOf(keys[i] < 0)) {
      s += keys[i] + "=" + event[keys[i]] + "<br/>";
    }
  }
  
  $("temp").innerHTML = s;
}
