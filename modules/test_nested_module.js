var test4 = {
	title: "Device number generation",
	steps: [
		"globalTest"
	]
}

globalTest = function()
{
	printLog("info", "Instance: " + this.constructor.name);
}


exports.my_tests = test4;

