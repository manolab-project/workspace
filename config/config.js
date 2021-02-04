
// ===============================================================================================
// DEVICES CONFIGURATION
// ===============================================================================================

/**
	conn_channel parameters value:
	

	conn_channel identifier examples:
	   - Explicit: "COM16"
	   - Using VID/PID couple: "1234:5678"
	   - Using the interface name:  "Silicon Labs CP210x USB to UART Bridge"
	   - Using the COM port serial number (eg, FTDI, Cypress chips): "AB98986"

	Peripheral discovery policy:
	  1. Scan for computer peripheral
	  2. Try to associate using the defined conn_channel
	  3. Try to associate using the defined peripheral id

*/

function setup()
{
	return {
	admin_pass: "caravane",
	devices: [
	/*
	{
		name: "modbus",
		type: "ModbusMaster",
		conn_channel: "COM8", //"FT1RP1O4",
		conn_settings: "19200,8,1,N",
		id: "ABC", 
		options: ""
	},
	{
		name: "acuDC_LED",
		type: "AcuDC",
		conn_channel: "ABC",
		conn_settings: "",
		id: "", 
		options: "1" // Modbus slave address
	},
	{
		name: "acuDC_PV",
		type: "AcuDC",
		conn_channel: "ABC",
		conn_settings: "",
		id: "", 
		options: "10" // Modbus slave address
	},
	{
		name: "acuDC_BAT",
		type: "AcuDC",
		conn_channel: "ABC",
		conn_settings: "",
		id: "", 
		options: "2" // Modbus slave address
	},
	{
		name: "io",
		type: "Controllino",
		conn_channel: "ABC",
		conn_settings: "",
		id: "", 
		options: "20" // Modbus slave address
	},
	{
		name: "alim_Bat",
		type: "VoltcraftPPS",
		conn_channel: "COM3",
		conn_settings: "9600,8,N,1" ,
		id: "",
		options: ""
	},
	{
		name: "alim_PV",
		type: "VoltcraftPPS",
		conn_channel: "COM5",
		conn_settings: "9600,8,N,1" ,
		id: "",
		options: ""
	},
	{
		name: "canBus",
		type: "CanDevice",
		conn_settings: "",
		conn_channel: "",
		id: "HW392210", //"HW530358", // "HW486735" 
		options: "125K" //"125K" avec novea
	},
	{
		name: "load",
		type: "BK8500",
		conn_channel: "COM11",
		conn_settings: "9600,8,N,1",
		id: "AR-0883",
		options: ""
	},
	
	{
		name: "server",
		type: "ProdServer",
		conn_channel: "",
		conn_settings: "",
		id: "",
		options: "127.0.0.1:3000"
	},
	*/
    /*
    {
		name: "PowerSensor",
		type: "MiniCircuitsPwrSen",
		conn_channel: "10.0.0.15",
		conn_settings: "",
		id: "",
		options: ""
		
	},*/
    {
        name: "nfc_reader",
        type: "Zebra7500",
        conn_channel: "10.0.0.15",
        conn_settings: "",
        id: "",
        options: ""
        
    },
    /*
	{
		name: "Etiquette_Carte",
		type: "LabelPrinter",
		conn_channel: "",
		conn_settings: "",
		id: "",
		options: ""
		
	}
        
        */
    ]};
}

