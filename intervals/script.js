// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

// convert millis to seconds
const convert = (millis) => Math.floor(millis / 1000);
// time when page loaded, use Date if performance is not supported
const start = window.performance?.timeOrigin ?? Date.now();

setInterval(() => {
	time = convert(window.performance?.now()) ?? convert(Date.now() - start);
	counterElement.textContent = time;
}, 1000);
