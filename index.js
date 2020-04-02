function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let type = process.argv[2];
let output;

switch(type){
    case "hex":
        let color = process.argv[3];
        let rgb = hexToRgb(color);
        output = `rgb( ${rgb.r}, ${rgb.g}, ${rgb.b} )`;
        break;
    case "rgb":
        output = rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]))
        break;
    default:
        output = "error"
}



console.log(output)