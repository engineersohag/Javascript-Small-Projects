var counterUp = document.getElementById('counterUp');
var counter = 0;

setInterval(function(){
	if(counter < 500){
		counter++;
		counterUp.innerHTML = counter;
	};
	
},100);

var time = document.getElementById('time');
setInterval(function(){
	time.innerHTML = new Date().toLocaleTimeString();
},100);
