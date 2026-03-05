function loginAttemptTracker(){
let attempts = 0;
return function(){
attempts++;
return attempts;
}
}
const trackAttempts = loginAttemptTracker();
document.getElementById("loginBtn").addEventListener("click", function(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let userError = document.getElementById("userError");
let passError = document.getElementById("passError");
let attemptMsg = document.getElementById("attemptMsg");
userError.textContent="";
passError.textContent="";
if(username === ""){
userError.textContent="Username cannot be empty";
return;
}
if(password.length < 6){
passError.textContent="Password must be at least 6 characters";
return;
}
if(username === "admin" && password === "123456"){
attemptMsg.style.color="green";
attemptMsg.textContent="Login Successful";
}
else{
let attempts = trackAttempts();
attemptMsg.style.color="red";
attemptMsg.textContent="Wrong credentials. Attempt " + attempts + " of 3";
if(attempts >= 3){
document.getElementById("loginBtn").disabled = true;
attemptMsg.textContent="Account Locked! Too many attempts.";
}
}
});