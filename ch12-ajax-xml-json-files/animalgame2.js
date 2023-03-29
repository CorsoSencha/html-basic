var yesID;
var noID;

window.onload = function() {
  $("yes").onclick = yesClick;
  $("no").onclick = noClick;

  // initialize the game at the first node of data
  getNode(1);
};

// Fetches the next node of the game using Ajax.
function getNode(id) {
  new Ajax.Request(
    "/animalgame.php",
    {
      method: "get",
      parameters: { nodeid: id },
      onSuccess: displayQuestion,
      onFailure: ajaxFailed,
      onException: ajaxFailed
    }
  );
}

// Called when 'Yes' button is clicked; requests next node and updates page.
function yesClick() {
  getNode(yesID);
}

// Called when 'No' button is clicked; requests next node and updates page.
function noClick() {
  getNode(noID);
}

// Parses the XML for the question and yes/no answers.
function displayQuestion(ajax) {
  var question = ajax.responseXML.getElementsByTagName("question")[0];
  var yesNode  = ajax.responseXML.getElementsByTagName("yes")[0];
  var noNode   = ajax.responseXML.getElementsByTagName("no")[0];

  var questionText = question.firstChild.nodeValue;
  $("question").innerHTML = questionText;

  yesID = yesNode.getAttribute("nodeid");
  noID = noNode.getAttribute("nodeid");
}
