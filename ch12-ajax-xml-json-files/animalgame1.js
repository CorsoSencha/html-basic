window.onload = function() {
  // initialize the game at the first node of data
  new Ajax.Request(
    "/animalgame.php",
    {
      method: "get",
      parameters: { nodeid: 1 },
      onSuccess: displayQuestion,
      onFailure: ajaxFailed,
      onException: ajaxFailed
    }
  );
};

// Called when an Ajax request finishes successfully.
// Parses the XML for the question and yes/no answers.
function displayQuestion(ajax) {
  var question = ajax.responseXML.getElementsByTagName("question")[0];
  var questionText = question.firstChild.nodeValue;
  $("question").innerHTML = questionText;
}
