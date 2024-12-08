var userName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");

var signInLink = document.getElementById("signIn");
var signUpLink = document.getElementById("signUp");

var signUpDiv = document.getElementById("signUpDiv");
var signInDiv = document.getElementById("signInDiv");
var nameDiv = document.getElementById("nameDiv")


credentials = [];

signUpLink.addEventListener("click" , function(){
  signInBtn.classList.add("d-none");
  signUpBtn.classList.remove("d-none");
  nameDiv.classList.remove("d-none");
  signUpDiv.classList.add("d-none");
  signInDiv.classList.remove("d-none");
})

signInLink.addEventListener("click" , function(){
  signInBtn.classList.remove("d-none");
  signUpBtn.classList.add("d-none");
  nameDiv.classList.add("d-none");
  signUpDiv.classList.remove("d-none");
  signInDiv.classList.add("d-none");
})

signInBtn.addEventListener("click" , function(){
  var submitInput = {
    emailInput: email.value,
    passwordInput: password.value,
  };

  // var spliceCredentials = [];
  // spliceCredentials.push(credentials.)
  credentials = JSON.parse(localStorage.getItem("all"));

  if(credentials.includes(submitInput) === true){
    console.log("true");
  }
  else{
    console.log("false");

  }
  
})

signUpBtn.addEventListener("click" , function(){
  var submitInput = {
    nameInput: userName.value,
    emailInput: email.value,
    passwordInput: password.value,
  };

  credentials.push(submitInput)
  localStorage.setItem("all", JSON.stringify(credentials));
  clear();

})

function clear() {
  userName.value = "";
  email.value = "";
  password.value = "";
}