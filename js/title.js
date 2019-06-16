function loaded() {
	setInterval(loop, 500)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
	loaded()
}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
	loaded()
});
var x = 0,
	titleText = ["$", "J", "Ju|", "Jun|", "Juni|", "Junin|", "Junin n|", "Junin na|", "Junin na c|", "Junin na ce|", "Junin na cen|", "Junin na cena|", "o barato é louco", "o barato é louco"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}