var text = document.getElementById('text');
var btn = document.getElementById('btn');

btn.onclick = function () {
	text.classList.toggle('more');
	if (btn.innerHTML == "Read More") {
		btn.innerHTML = "Read Less";
	} else {
		btn.innerHTML = "Read More";
	};
};