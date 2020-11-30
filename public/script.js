let username;
let password;

const headerDiv = document.getElementById('headerDiv');
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

function submit_newUser() {
    // Connect to DB, create new User from form
    let new_username = document.getElementById("user_name").value;
    let new_password = document.getElementById("pass_word").value;
    window.location.href='http://localhost:3001/'
    console.log('User Creation + Redirect To Home');
}




signInBtn.addEventListener('click', showLoginForm);
// signUpBtn.addEventListener('click', redirectToSignUp());