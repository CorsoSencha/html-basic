<?php
# A PHP script to return book data.  Author: Marty Stepp, Nov 30 2008
$INPUT_FILE = "personality.txt";

# Removes all characters except letters/numbers from query parameters
function filter_chars($str) {
	return preg_replace("/[^A-Za-z0-9_]*/", "", $str);
}


# main program
if (!isset($_SERVER["REQUEST_METHOD"]) || $_SERVER["REQUEST_METHOD"] != "GET") {
	header("HTTP/1.1 400 Invalid Request");
	die("ERROR 400: Invalid request - This service accepts only GET requests.");
}

$name = "";
$delay = 0;

if (isset($_REQUEST["name"])) {
	$name = filter_chars($_REQUEST["name"]);
}
if (isset($_REQUEST["delay"])) {
	# for debugging; makes the service delay for a given number of seconds to test 'loading' animations
	$delay = max(0, min(60, (int) filter_chars($_REQUEST["delay"])));
}

if ($delay > 0) {
	sleep($delay);
}

# read file
if (!file_exists($INPUT_FILE)) {
	header("HTTP/1.1 500 Server Error");
	die("ERROR 500: Server error - Unable to read input file: $INPUT_FILE");
}
$lines = file($INPUT_FILE);


if ($name) {
	$found = false;
	
	for ($i = 0; $i < count($lines) && !$found; $i += 2) {
		# Betty Boop
		# BABAAAABAAAAAAABAAAABBAAAAAABAAAABABAABAAABABABAABAAAAAABAAAAAABAAAAAA
		$this_name = trim($lines[$i]);
		$this_answers = trim($lines[$i + 1]);

		if ($this_name == $name) {
			# found the name the user is searching for; print it as XML
			header("Content-type: application/xml");
			print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
			print "<user name=\"$this_name\">\n";
			print "\t$this_answers\n";
			print "</user>\n";
			$found = TRUE;
		}
	}
	
	if (!$found) {
		header("HTTP/1.1 404 File Not Found");
		die("ERROR 404: The name \"$name\" was not found.");
	}
} else {
	header("Content-type: application/xml");
	print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	print "<users>\n";
	for ($i = 0; $i < count($lines); $i += 2) {
		# Betty Boop
		# BABAAAABAAAAAAABAAAABBAAAAAABAAAABABAABAAABABABAABAAAAAABAAAAAABAAAAAA
		$this_name = trim($lines[$i]);
		print "\t<user name=\"$this_name\" />\n";
	}
	print "</users>\n";
}
?>
