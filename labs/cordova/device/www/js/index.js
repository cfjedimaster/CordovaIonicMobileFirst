document.addEventListener("deviceready", init, false);
function init() {

	var div = document.querySelector("#results");
	var s = "";
	for(var key in device) {
		s += key +" = " + device[key] + "<br>";	
	}
	div.innerHTML = s;
}