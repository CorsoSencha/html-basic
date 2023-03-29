// globals
var yesID;                 // ID of next 'yes' answer on server
var noID;                  // ID of next 'no' answer on server
var answerGiven = false;   // true if the game has guessed an answer yet

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
  if (answerGiven) {
    // computer has guessed an answer, and "Yes" it was correct
    $("question").innerHTML = "Yay, I won!";
    endGame();
  } else {
    getNode(yesID);
  }
}

// Called when 'No' button is clicked; requests next node and updates page.
function noClick() {
  if (answerGiven) {
    // computer has guessed an answer, and "No" it was not correct
    $("question").innerHTML = "Aww, I lost.  :-(";
    endGame();
  } else {
    getNode(noID);
  }
}

// Parses the XML for the question and yes/no answers.
function displayQuestion(ajax) {
  var question = ajax.responseXML.getElementsByTagName("question")[0];
  if (question) {
    // this XML represents a question and its yes/no response
    var yesNode  = ajax.responseXML.getElementsByTagName("yes")[0];
    var noNode   = ajax.responseXML.getElementsByTagName("no")[0];

    var questionText = question.firstChild.nodeValue;
    $("question").innerHTML = questionText;

    yesID = yesNode.getAttribute("nodeid");
    noID = noNode.getAttribute("nodeid");
  } else {
    // this XML represents an answer to guess
    var answerNode = ajax.responseXML.getElementsByTagName("answer")[0];
    var answerText = answerNode.firstChild.nodeValue;
    $("question").innerHTML = "Is your animal: " + answerText + "?";
    answerGiven = true;
  }
}

// Called when game is over to disable buttons from further clicking.
function endGame() {
  $("yes").disabled = true;
  $("no").disabled  = true;
}
