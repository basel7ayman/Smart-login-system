var userName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");

var signInLink = document.getElementById("signIn");
var signUpLink = document.getElementById("signUp");

var signUpDiv = document.getElementById("signUpDiv");
var signInDiv = document.getElementById("signInDiv");
var nameDiv = document.getElementById("nameDiv");

credentials = [];

signUpLink.addEventListener("click", function () {
	signInBtn.classList.add("d-none");
	signUpBtn.classList.remove("d-none");
	nameDiv.classList.remove("d-none");
	signUpDiv.classList.add("d-none");
	signInDiv.classList.remove("d-none");
});

signInLink.addEventListener("click", function () {
	signInBtn.classList.remove("d-none");
	signUpBtn.classList.add("d-none");
	nameDiv.classList.add("d-none");
	signUpDiv.classList.remove("d-none");
	signInDiv.classList.add("d-none");
});

signInBtn.addEventListener("click", function () {
	let credentials = JSON.parse(localStorage.getItem("all"));
	if (!credentials) {
		credentials = []; 
	}

	var submitInput = {
		emailInput: email.value,
		passwordInput: password.value,
	};

	let userExists = false;
	for (let i = 0; i < credentials.length; i++) {
		if (
			credentials[i].emailInput === submitInput.emailInput &&
			credentials[i].passwordInput === submitInput.passwordInput
		) {
			userExists = true;
			break;
		}
	}

	if (userExists) {
		console.log("Successful login!");
		clear();
	} else {
		console.log("Login failed: Invalid email or password.");
		clear();
	}
});

signUpBtn.addEventListener("click", function () {
	credentials = JSON.parse(localStorage.getItem("all")) || [];

	// Input from the user
	var submitInput = {
		nameInput: userName.value,
		emailInput: email.value,
		passwordInput: password.value,
	};

	var emailExists = credentials.some(
		(credential) => credential.emailInput === submitInput.emailInput
	);

	if (emailExists) {
		console.log("Sign-up failed: This email is already registered.");
    clear();
	} else {
		credentials.push(submitInput);
		localStorage.setItem("all", JSON.stringify(credentials));
		console.log("Sign-up successful!");
		clear();
	}
});

function clear() {
	userName.value = "";
	email.value = "";
	password.value = "";
}
