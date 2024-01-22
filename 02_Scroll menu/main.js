var nav = document.getElementById('nav');
var scroll = document.getElementById('scrollTop');
window.onscroll = function(){
	nav.classList.toggle('nav-bg', scrollY > 10);
	scroll.classList.toggle('scrollNow', scrollY > 100);
};

var btn = document.getElementById('navbtn');
var navItem = document.getElementById('navItem');

btn.onclick = function(){
	navItem.classList.toggle('navItem-show');
};