var testPowerSensor = {
	title: "PWR-SEN-6RMS-RC",
	steps: [
	"testPowerSensor_GetMode",
    "testPowerSensor_SetMode",
    "testPowerSensor_GetMode"
	]
}

testPowerSensor_GetMode = function()
{
    printLog("info", "testPowerSensor_GetDeviceModelName: " + PowerSensor("GET", ":MODE?"));
}

testPowerSensor_SetMode = function()
{
    printLog("info", "testPowerSensor_GetDeviceModelName: " + PowerSensor("GET", ":MODE:1"));
}


exports.testPowerSensor = testPowerSensor;
