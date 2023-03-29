function sayMagicWord() {
	alert("PLEASE!");
}

function evaluateStringAsBoolean() {
	var msg = "Stephen Colbert";
	if (msg) {
		alert("And that's The Word.");
	}
}

function evaluateStrLength() {
	var frisbeeStr = "frisbee";
	alert("frisbeeStr has length " + frisbeeStr.length);
}

function leapYear() {
	var year = prompt("Please enter your birth year.");
	var isLeap;
	
	if (year % 400 == 0) {
		isLeap = true;
	} else if (year % 100 == 0) {
		isLeap = false;
	} else if (year % 4 == 0)  {
		isLeap = true;
	} else {
		isLeap = false;
	}
	
	if (isLeap) {
		alert("You were born in a leap year!");
	} else {
		alert("You were not born in a leap year.");
	}
}

function doIntExp() {
	var base = prompt("Enter the base.");
	var exp = prompt("Enter the exponent.");
	var result = 1;
	
	// Check for integer input
	base = parseInt(base);
	exp = parseInt(exp);
	
	if (isNaN(base) || isNaN(exp) || (exp < 0)) {
		alert("Invalid input for integer exponentiation.");
		return;
	} 
	
	for (var ii = 0; ii < exp; ii++) {
		result *= base;
	}
	
	alert (base + "^" + exp + " = " + result);
}

function getFactorial() {
	var counter = prompt("Enter a positive integer.");
	var factorial = 1;
	
	for (var ii = 1; ii <= counter; ii++) {
		factorial *= ii;
	}
	
	alert (counter + "!" + " = " + factorial);
}

function countFactors() {
	var num = prompt("Enter a positive integer.");
	var numFactors = 0;
	var ii = 1;
	
	while (ii <= num) {
		if (num % ii == 0) {
			numFactors++;
		}
		
		ii++;
	}
	
	alert (num + " has " + numFactors + " factors");
}

function getFactorial2() {
	var num = prompt("Enter a positive integer.");
	var counter = num;
	var factorial = 1;
	
	do {
		factorial *= counter--; // Multiply, then decrement.
	} while (counter > 0);
	
	alert (num + "!" + " = " + factorial);
}

function xgamesFun() {
	var xgames = []; // an empty array

	xgames[0] = "Freestyle BMX";
	xgames[1] = "MotoX";
	xgames[2] = "Skateboarding";
	xgames[3] = "Surfing";
	xgames[4] = "Rallying";

	alert("xgames.length = " + xgames.length);  // alerts "5"

	// alert all of the xgames stored in the array
	for (var i = 0; i < xgames.length; i++) {
	  alert(xgames[i]);
	}
}

/*
function makeRed() {
    $("announce").style.color = "red";
}
*/


/* For Ch. 4
var beerCount = 99;

addOnLoad(registerCountBeer);

function registerCountBeer() {
    var para = document.getElementById("beerCounter");
	para.onmouseover = countBeer;
}

function countBeer() {
    var para = document.getElementById("beerCounter");
    para.innerHTML = --beerCount + " Bottles of Beer in the Element";
}
*/


function innerStringScramble() {
	var input = prompt("Enter string to inner scramble");

	// get all the words in an array
	var words = input.split(" ");
	var result;
	
	// for each word in the input...
	for (var ii = 0; ii < words.length; ii++) {
		word = words[ii].split("");
		
		// ...scramble the word, but preserve the first and last letter
		for (var jj = 0; jj < word.length; jj++) {
				var firstChar = word[0];
				var lastChar = word[word.length - 1];
				var tempChar;
			
				for (kk = 0; kk < word.length; kk++) {
					var index = Math.floor(Math.random() * word.length);
					tempChar = word[kk];
					word[kk] = word[index];
					word[index] = kk;
				}
				
				var firstCharIdx = word.indexOf(firstChar);
				tempChar = word[0];
				word[0] = firstChar;
				word[firstCharIdx] = tempChar;
				
				var lastCharIdx = word.indexOf(lastChar);
				tempChar = word[word.length - 1];
				word[word.length - 1] = lastChar;
				word[lastCharIdx] = tempChar;
		}
		
		result[ii] = word.join("");
	}
	
	alert(result);
}

function altCaps() {
	var input = prompt("Enter some text.");
	var result = ""; 

	for(var ii = 0; ii < input.length; ii++) {
		if (ii % 2 == 0) {
			result += input[ii].toUpperCase();
		} else {
			result += input[ii];
		}
	}
	
	alert("Your string with alternating caps is: " + result); 
}

/*
addOnLoad(initializeStyleExample);

function initializeStyleExample() {
	$("x-small").onclick = changeTextSize;
	$("medium").onclick = changeTextSize;
	$("x-large").onclick = changeTextSize;
	
	$("red").onclick = changeTextColor;
	$("green").onclick = changeTextColor;
	$("purple").onclick = changeTextColor;
	$("blue").onclick = changeTextColor;
	
	$("boldcheck").onclick = changeTextStyle;
	$("italiccheck").onclick = changeTextStyle;
}

function changeTextSize() {
    $("lyrics").style.fontSize = this.id;	
}

function changeTextColor() { 
    $("lyrics").style.color = this.id;
}

function changeTextStyle() {
	var para = $("lyrics");
	
	if (this.id === "italiccheck") {
		if (para.style.fontStyle === "italic") {
			para.style.fontStyle = "normal";
		}
		else {
			para.style.fontStyle = "italic";
		}
	} else if (this.id === "boldcheck") {
		if (para.style.fontWeight === "bold") {
			para.style.fontWeight = "normal";
		}
		else {
			para.style.fontWeight = "bold";
		}
	}
}
*/

/*
addOnLoad(initializeShuffleExample);

function initializeShuffleExample() {
	$("shufflebutton").onclick = runShuffle;
}

function shuffle(a) {
	for (var i = 0; i < a.length; i++) {
		var j = parseInt(Math.random() * i);
		var temp = a[i]; // swap
		a[i] = a[j];
		a[j] = temp;
	}
	return a;
}

function runShuffle() {
	var text = $("shuffletext").value;

	var lines = text.split("\n");
	lines = shuffle(lines);
	text = "";
	
	for (var i = 0; i < lines.length; i++) {
		if (text.length > 0) {
			text += "\n";
		}
		text += lines[i];
	}

	$("shuffletext").value = text;
}
*/

/*
addOnLoad(initDomRegHandlersExample);

function initDomRegHandlersExample() {
	$("sellheader").onclick = makeRedDeux;
}
	
function makeRedDeux() {
    var para = $("announcedeux");
    para.style.color = "red";
}
*/

