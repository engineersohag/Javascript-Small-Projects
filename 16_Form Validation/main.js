let username = document.querySelector('#username');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let co_pass = document.querySelector('#password2');
let Form = document.querySelector('#Form');

// console.log(Form);


	// -- error sms -- 

function showError (input, message) {
	const formControl = input.parentElement
	formControl.className = "form-control error";
	const small = formControl.querySelector("small");
	small.innerHTML = message;
}

	// -- success - sms --

function showSuccess (input) {
	const formControl = input.parentElement
	formControl.className = "form-control success";
}


	// check - mail

function checkMail (input) {
	const RegExs = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(RegExs.test(input.value)){
		showSuccess(input);
	}else{
		showError(input, "Email is not vailed")
	}
}


function checkInputLength(input, min, max){
	if(input.value.length < min){
		showError(input, `${GetFieldName(input)} You must be at least ${min} Characters`);
	}else if(input.value.length > max){
		showError(input, `${GetFieldName(input)} You must be at less than ${max} Characters`);
	}else{
		showSuccess(input);
	}
}


function GetFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


	// -- password maching part --

function Check_Pass(input1, input2){
	if (input1.value !== input2.value) {
		showError(input2, "Password is not same!");
	}
}


Form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputLength(username, 3, 20);
	checkInputLength(pass, 6, 32);

	checkMail(email);

	Check_Pass(pass, co_pass);
})