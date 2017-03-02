$(function randomQquote(){
	var myDict = {"If you must blink, do it now." : "Kubo",
		"Yesterday is history, tomorrow is a mystery, and today is a gift... that's why it is called present." : "Master Oogway",
		"I am incredibly nubby." : "Kyle",
		"The past can hurt. But the way I see it, you can either run from it or learn from it" : "Rafiki"};

	var keys = Object.keys(myDict);

	var rand = keys[Math.floor(Math.random() * keys.length)];
	var quote = "<p>" + rand + " <br><strong>--" + myDict[rand] + "</strong></p>";
	document.getElementById("quotes").innerHTML = quote;
});

