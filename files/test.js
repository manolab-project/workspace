// ===============================================================================================
// MODULES
// ===============================================================================================

var test_user_input = require('test_user_input.js');
var test_print_label = require('test_print_label.js').print_label;
var test_nested_module = require('test_nested_module.js');
var test_minicircuits = require('test_minicircuits.js');

// ===============================================================================================
// FONCTIONS UTILITAIRES
// ==============================================================================================
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && 
           isFinite(value) && 
           Math.floor(value) === value;
};

/*
status: 'success',
data: {
	deviceId: data.id,
	deviceSerial: seqData.nextval,
	productName:  product.name
},
message: 'Created one device'

*/
var SerialNumber = {
	getSerial: function() {
		
		var serial = server("GET_SERIAL");
		
		if (typeof serial !== "undefined") {
			if (typeof serial.data.deviceSerial == "string") {
				this.valid = true;
				this.number = serial.data.deviceSerial;
				this.id = serial.data.deviceId;
			} else {
				this.valid = false;
			}
		} else {
			this.valid = false;
		}
		
		if (!this.valid) {
			printLog("error", "Bad serial number format");
		}
		
	},
	
	saveReport: function() {
		var response = server("SET_TESTS", this.id);
	},
	
	number: "",
	id: 0,  // save the ID locally, to save the report 
	valid: false

};


function battery_test_setup()
{
	// Plutot des informations sur le déroulement du test, pour  analyser ce qu'il se passe
//	printLog("info", "Alimentation de la carte");
	
//	printReport("Any useful information about the product to keep in the database");
	
//	bk8500("INIT");
//	bk8500("TEST");

	//alim_Bat("VOLT", 2000);
	/*
	io("WRITE_COMMAND", 1); // reset
	io("READ_COMMAND");
	io("READ_FIRMWARE");
	io("GET_DIGITAL", "D0");
	io("SET_DIGITAL", "D0");
	io("GET_DIGITAL", "D0");
	
	
	for (var i=0; i < 10; i++)
	{
		delay1s(1);
		io("SET_DIGITAL", "D0");
		delay1s(1);
		io("CLEAR_DIGITAL", "D0");
	}
	*/
	/*
	for (var i=0; i < 100; i++)
	{
		printConsole(powerMeter("GET", "SECONDS"));
		delay1s(1);
	}
	*/
	
	/*
	load("SET_REMOTE");
	load("SET_MAX_VOLTAGE", 60.0);
	load("SET_MODE_CV");
	load("SET_CV", 12.0);
	load("LOAD_ON");
	*/
	
	/*
	SerialNumber.getSerial();
	
	if (SerialNumber.valid === true) {
		printConsole("Serial is: " + SerialNumber.value );
	}
	*/
	
	/*
	// Exemple d'impression d'étiquette
	
	for (var i=0; i < 10; i++)
	{
		canBus("SEND");
		//canBus("RECV");
		delay1s(4);
	}


	var label_conf = {
			width: 626,
			 height: 744,
			 dpi: 300,
			 printer: "default", // use "default" using default predefined printer on your operating system
			 layers:[background, qrcode, title, battery_voltage, battery_capacity] // order is important, start with backround layer and then upper ones
		};
	
	var img = Etiquette_Carte(label_conf);
	*/

	
	printLog("warning", "Tension un peu basse");
	//delay1s(4);
	
	printReport("Encore du log orienté rapport");	

}


// ===============================================================================================
// ERROR CALLBACK
// ===============================================================================================

function onError()
{
	/*
	printLog("info", "onError called");
	test_nested_module.print_text();
	printLog("info", "onError called after");
	*/
	
	
	// This function is called whenever a test has thrown an error
	// Use it to clean your environment and set your peripherals in a stable state
	/*
	var label_conf = {
			width: 299,
			 height: 143,
			 dpi: 300,
			 show: true,
			 printer: "default",
			 layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones
		};
	
	var img = Etiquette_Carte(label_conf);
	
	
	*/
}

// ===============================================================================================
// STARTUP CALLBACK
// ===============================================================================================

function onStartup()
{
	printLog("info", "onStartup called");
}

// ===============================================================================================
// TEST SCRIPT
// ===============================================================================================
// Identifiants de messages CAN
var EMS_EVENT = 0x42A;
var EMS_CLEAN_UP_FLASH = 0x0602;
var EMS_SELECT_FLASH = 0x0722;
var EMS_WR_FLASH = 0x0721;
var EMS_FLASH_STATUS = 0x0725;
var EMS_SET_EVENT = 0x0442;
var EMS_GET_INPUT_STATE = 0x0408;
var EMS_INPUT_STATE = 0x0428;
var EMS_SET_AUX_OUTPUT_STATE = 0x0441;
var EMS_SET_LIGHT_CURRENT = 0x0440;
var EMS_RD_FLASH = 0x0710;
var EMS_RD_FLASH_DATA = 0x0711;

var EMS_EVENT_NO_EVENT = 0;
var EMS_EVENT_SYSTEM_STARTUP = 1;

var counter = 0;
var ARTICLE_CODE = "012345";

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}


function test_func()
{
	/*
	test_user_input.print_text();
	test_user_input.user_input_no_error();
	
	test_print_label();
	*/
//	printLog("error", "error: pop");  // stderr
	
	//printLog("error", "error: pop");  // stderr
	
	
//	printLog("info", "Workspace is: " + novprod("GetWorkspace"));
	
	/******************  TEST INTERFACE MODBUS  ***************************/
/*
	var ret = modbus("FUNC_5_WRITE_COIL", 1, 0, true);
	
	if (ret.success) {
		ret = modbus("FUNC_1_READ_COILS", 1, 0, 1); // Arguments: slave, start address, number of words to read
		printLog("info", "Modbus result: " + JSON.stringify(ret));
		
		if (ret.success) {
			delay1s(10);
			ret = modbus("FUNC_5_WRITE_COIL", 1, 0, false);
			
			ret = modbus("FUNC_1_READ_COILS", 1, 0, 1); // Arguments: slave, start address, number of words to read
			printLog("info", "Modbus result: " + JSON.stringify(ret));
		}
	}
	
	*/
	//inputText(4, "coucou", true);
	
	
	/*
	playSound("../../delivery/sounds/Error-sound.wav", 0.5, 10);
	
	delay1s(2);
	
	playSound("", 0, 0); // stop
	
	
	showImage(true, "../../delivery/images/calvin.png");
	delay1s(1);
	showImage(false); // efface l'image
	
	printReport("Hello le produit est terminé\r\n");
	printReport("Encore une ligne\r\n");
	printReport("Paf\r\n");
	
	SerialNumber.getSerial();
	
	if (SerialNumber.valid === true) {
		printConsole("Serial is: " + SerialNumber.number );
		
		SerialNumber.saveReport();
	}
	*/

	/******************  TEST PATH RELATIF AU WORKSPACE  ***************************/
	/*
	playSound("Error-sound.wav", 0.5, 10);
	
	delay1s(2);
	
	showImage(true, "calvin.png");
	
	delay1s(2);
	
	var label_conf = {
			width: 299,
			 height: 143,
			 dpi: 300,
			 show: true,
			 printer: "no",
			 layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones
		};
	
	var img = Etiquette_Carte(label_conf);
	*/
	
	/****************** ?????? METTRE TIITRES DE TESTS  ***************************/
	
		/*
	inputText(30, "Ligne1\nLigne2\nLigne3\nLigne4\nLigne5\nLigne6\nLigne7\n", true);
	*/

	/*
	var label_conf = {
			width: 299,
			 height: 143,
			 dpi: 300,
			 show: true,
			 printer: "default",
			 layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones
		};
	
	var img = Etiquette_Carte(label_conf);
	
	delay1s(5);
	
	label_conf.show = false;
	var img = Etiquette_Carte(label_conf);
	
	*/
	/*
	SerialNumber.number = 0xDEADBEEF; // A retirer en prod finale !!!!

     

      var hexa = parseInt(SerialNumber.number, 10).toString(16).toUpperCase();

      var product_serial = ARTICLE_CODE + "_" + hexa;

      printLog("info", "Product serial: "+product_serial);

      var d = new Date();


      qrcode.value    = product_serial;
      reference.value = product_serial;
      date.value = pad(d.getFullYear(),4)+ "" + pad((d.getMonth()+1),2) + "" + pad(d.getDate(),2);
      printLog("info", "Date: "+date.value);

      var label_conf = {

            width: 299,
            height: 143,
            dpi: 300,
            show: true,
			inverted: true,
			rotate: 45,
            printer: "default",

         //   use "default" using default predefined printer on your operating system
         //         use "no" to NOT print

            layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones

      };

      var img = Etiquette_Carte(label_conf);
	*/
	
	// delay1s(1);
	/*
	inputText(4, "coucou", true);
	
	delay1s(5);
	*/
//	canBus("SEND", 0x0602);
	//canBus("SEND", 0x0602, 0, 1, 2, 3);
//	waitForEMSEvent(1);
	
//	canBus("SEND", 20, 0x602);
	
	/*
	//canBus("FLUSH");
	printReport("Counter: " + counter);
	counter++;
	
	SerialNumber.getSerial();
	
	if (SerialNumber.valid === true) {
		printConsole("Serial is: " + SerialNumber.number );
	}
	*/
	/*
	inputText(5, "coucou");
	
	inputText(5, "coucou");
	*/
	/*
	io("WRITE_COMMAND", 7);
	var value = io("READ_COMMAND");
	printLog("info",  value.toString());
	*/
	//printLog("info", "input text: " + inputText(10, "coucou"));
	
	//var msg = canBus("READ", 10, EMS_EVENT, EMS_EVENT_SYSTEM_STARTUP); // timeout 60 secondes
/*
	// Update the serial number of the label
	qrcode.value = "1234567_DEADBEEF";
	reference.value = "1234567_DEADBEEF";
	
	var label_conf = {
		width: 299,
		 height: 143,
		 dpi: 300,
		 show: true,
		 printer: "no", // use "default" using default predefined printer on your operating system
			//use "no" to NOT print
		
		 layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones
	};
	
	var img = Etiquette_Carte(label_conf);
	*/
	
	/*
	var result = executeCommand("D:/Test avec espace/script.bat", "");
	
	printLog("info", "status: " + result.status); // 0 is ok, otherwise SS error code
	printLog("info", "output: " + result.output); // stdout
	printLog("info", "error: " + result.error);  // stderr
	printLog("info", "retcode: " + result.retcode); // command return code
	 */
	
	/*
	for (var i = 0; i < 100; i++) {
		printLog("info", "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah");
	}
	*/
	
	/*
	printReport("Hello le produit est terminé\r\n");
	printReport("Encore une ligne\r\n");
	printReport("Paf\r\n");
	
	SerialNumber.getSerial();
	
	if (SerialNumber.valid === true) {
		printConsole("Serial is: " + SerialNumber.number );
		
		SerialNumber.saveReport();
	}
	*/
	
	//printLog("info", "input text: " + inputText(60, "coucou"));
	
	 
	/*
	var firmware_version = io("READ_FIRMWARE");
	printLog("info", "Version firmware: " + firmware_version);
	
	*/
	
	//delay1s(100); // essai d'arrêt avec gros délai
	
	//var result = executeCommand("ixxat.exe");
	
	//canBus2("SEND");
	
//	var msg = canBus("READ", 10, 85, 1, 3); // timeout 10 secondes, on attend le message ID 85
	
//	canBus("SEND", 20, 7, 8, 9, 10, 11);
//	canBus2("RECV");
	
}


function test_func2()
{
	printLog("error", "blah");
}

var test = {
	title: "Initialize DC Power",
	steps: ["test_func",
			]
};


var test = {
	title: "Check Modbus communication",
	steps: [
		"test_func",
		"test_func",
		"test_func",
	]
};



// ===============================================================================================
// PROCESS CONFIGURATION
// ===============================================================================================
function setup()
{
	return {
		// Mandatory parameters
		description: "Carte Novea",
		product: "010100AA",
		config: "config.js",
		tests:[
				//test,//, test2, test3, test4
				test_nested_module.my_tests,
				test_minicircuits.testPowerSensor
			],
		// Optional parameters
		admin_pass: "", // leave empty == no admin mode, sinon "caravane"
	};
}



