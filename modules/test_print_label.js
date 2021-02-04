/**
 * type: supported tyepes are: image, qrcode, text
 * name: layer name, displayed on the tool, not used for the label
 * value: depends on the type:
 *    - images: path of the image (full or relative to executabe)
 *    - qrcode: text to encode
 *    - text: text to display
 *
 * param1: option for the layer, depends on the type:
 *    - text: specify the font, point size, italic ... comma-separated list of the font attributes with the following format:
 *           font family,    pixelSize,     Weight [0 99],   Italic (0,1),   underline (0,1),  strikeOut (0,1), alignement (0=center 1=left, 2=right) 
 *            example: "Myriad Pro, 60, 75, 0, 0, 0, 0"
 */


var background = {
	type: "image",
	name: "Fond étiquette",
	value: "label_ex.bmp",
	param1: "",
	x:0,
	y:0,
	width: 299,
	height: 143
};

var qrcode = {
	type: "qrcode",
	name: "QR code",
	value: "BAD_VALUE",
	param1: "",
	x:10,
	y:40,
	width: 90,
	height: 90
};

var reference = {
	type: "text",
	name: "article code + serial",
	value: "NOVBOX",
	//      font family,    pixelSize,     Weight [0 99],   Italic (0,1),   underline (0,1),  strikeOut (0,1), alignement (0=center 1=left, 2=right) 
	param1: "Myriad Pro,       20,             25,              0,               0,                0,                  0",
	x:5,
	y:5,
	width: 180,
	height: 30
};

var date = {
	type: "text",
	name: "Date of manufacturing",
	value: "20181024",
	//      font family,    pixelSize,     Weight [0 99],   Italic (0,1),   underline (0,1),  strikeOut (0,1), alignement (0=center 1=left, 2=right) 
	param1: "Myriad Pro,       20,             20,              0,               0,                0,                  0",
	x:100,
	y:110,
	width: 100,
	height: 30
};



function print_label() {
	var label_conf = {
			width: 299,
			 height: 143,
			 dpi: 300,
			 show: true,
			 printer: "no",
			 layers:[background, qrcode, reference, date] // order is important, start with backround layer and then upper ones
		};
	
	var img = Etiquette_Carte(label_conf);
}

exports.print_label = print_label;
