var content = require("./assets/index.css");

var pngUrl = require("./assets/avatar.png");
console.log(pngUrl);
var img = document.createElement("img");
img.src = pngUrl;
document.body.appendChild(img);
