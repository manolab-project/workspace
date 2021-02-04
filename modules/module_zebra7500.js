var testDescription = {
	title: "Zebra7500 unit test",
	steps: [
	"moduleZebra7500_Step1",
	]
}

moduleZebra7500_Step1 = function()
{
    nfc_reader('INIT');
    nfc_reader('START');
    do {
   //     printLog("info", "Zebra step 1");
        delay1s(1);
    } while(1);
}


exports.testDescription = testDescription;
