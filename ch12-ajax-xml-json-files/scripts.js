addOnLoad(ajaxChapterLoad);

function ajaxChapterLoad() {
	$("load").onclick = loadClick;
	$("displaytranscript").onclick = displayTranscriptClick;
	$("displaytranscriptasync").onclick = displayTranscriptClickAsync;
}

// Fetches the text at the given URL using XMLHttpRequest,
// then calls the given function, passing the XMLHttpRequest to it.
function ajaxFetchAsync(url, fn) {
	var ajax = new XMLHttpRequest();

	// Call the function fn if the request completes successfully,
	// or show an error message if the request failed
	ajax.onreadystatechange = function(ajax) {
		if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				fn(ajax);   // call function fn; pass ajax as a parameter to it
			} else {
				alert("Error fetching text of " + url + ":\n"
						+ ajax.status + " " + ajax.statusText);
			}
		}
	};
		
	// begin the request
	ajax.open("GET", url, true);
	ajax.send(null);
}

// Fetches the text at the given URL using XMLHttpRequest and returns it.
function ajaxFetchSync(url) {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", url, false);
	ajax.send(null);

	// warn the user if there was an Ajax error
	if (ajax.status != 200) {
		alert("Error fetching text of " + url + ":\n"
				+ ajax.status + " " + ajax.statusText);
	}

	return ajax.responseText;
}

// called when the Display Transcript button is clicked
function displayTranscriptClick() {
	// fetch the text
	var text = ajaxFetchSync("transcript.txt");
	var lines = text.split("\n");
	
	// convert the lines of text into DOM items in an unordered list
	var ul = document.createElement("ul");
	for (var i = 0; i < lines.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = lines[i];
		ul.appendChild(li);
	}
	
	// place the list onto the page in the transcriptarea div
	$("transcriptarea").appendChild(ul);
}

// called when the Display Transcript Async button is clicked
function displayTranscriptClickAsync() {
	// fetch the text
	var ajax = new XMLHttpRequest();
	
	// attach event handler to be executed when request is done
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			var lines = ajax.responseText.split("\n");

			// convert the lines of text into DOM items in an unordered list
			var ul = document.createElement("ul");
			for (var i = 0; i < lines.length; i++) {
				var li = document.createElement("li");
				li.innerHTML = lines[i];
				ul.appendChild(li);
			}

			// place the list onto the page in the transcriptarea div
			$("transcriptareaasync").appendChild(ul);
		}
	};

	ajax.open("GET", "transcript.txt", true);
	ajax.send(null);
}

// called when the Display Transcript Async 2 button is clicked
function displayTranscriptClickAsync2() {
	var url = "transcript.txt";
	
	// event handler to be executed when request is done
	var fn = function(ajax) {
		var lines = ajax.responseText.split("\n");

		// convert the lines of text into DOM items in an unordered list
		var ul = document.createElement("ul");
		for (var i = 0; i < lines.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = lines[i];
			ul.appendChild(li);
		}

		// place the list onto the page in the transcriptarea div
		$("transcriptareaasync").appendChild(ul);
	};

	ajaxFetchAsync(url, fn);
}

function loadClick() {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "notes.txt", false);
	ajax.send(null);
	
	// at this point in the code, the web request has completed
	$("output").innerHTML = ajax.responseText;
}
