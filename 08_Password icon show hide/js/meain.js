let eyeIcon = document.getElementById('hide-icon');
let password = document.getElementById('pass');

eyeIcon.onclick = function(){
	if(password.type == "password"){
		password.type = "text";
	}else{
		password.type = "password";
	};

	eyeIcon.classList.toggle("bxs-show");
};
