let username;
let password;

const sisuDiv = document.getElementById('sisuDiv');
const signInBtn = document.getElementById('signInButton');
const signUpBtn = document.getElementById('signUpButton');
const loginDiv = document.getElementById('loginDiv');

function login() {
    username = document.getElementById("user_name").value;
    password = document.getElementById("pass_word").value;
	console.log("Login Executed: " + username + ":" + password);
	document.getElementById("user_name").value = "";
    document.getElementById("pass_word").value = "";
    loginDiv.style.display = 'none';
}

function showLoginForm() {
    loginDiv.style.display = 'block';
}

signInBtn.addEventListener('click', showLoginForm);
// signUpBtn.addEventListener('click', redirectToSignUp());