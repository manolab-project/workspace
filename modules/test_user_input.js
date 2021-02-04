
function print_text() {
	inputText(4, "Simple text is showed !!", true);
}

function user_input_no_error() {
	var returnText = inputText(4, "Simple text again, no error generated", true, false);
	printLog("info", "User input returned: " + returnText);
}



exports.print_text = print_text;
exports.user_input_no_error = user_input_no_error;

