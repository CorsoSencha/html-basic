var i = 0;

window.onload = function() {
  $("target").observe("keydown",  function(event) {eventStatus(event, "temp");});
  $("target").observe("keypress", function(event) {eventStatus(event, "temp2");});
};

function eventStatus(event, id) {
  var s = "";
  if (undefined !== event.keyCode) {
    s += "keyCode=" + event.keyCode + "<br/>";
  }
  if (undefined !== event.charCode) {
    s += "charCode=" + event.charCode + "<br/>";
  }
  s += "altKey=" + event.altKey + ", ctrlKey=" + event.ctrlKey + 
  		", shiftKey=" + event.shiftKey + "<br/><br/>";
  s += i++;
  
  $(id).innerHTML = s;
}
