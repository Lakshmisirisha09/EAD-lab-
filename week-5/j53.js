// Check Palindrome

function isPalindrome(num){

let original = num;
let reversed = 0;

while(num > 0){
let digit = num % 10;
reversed = reversed * 10 + digit;
num = Math.floor(num / 10);
}

return original === reversed;
}


// Check Armstrong

function isArmstrong(num){

let original = num;
let sum = 0;
let digits = num.toString().length;

while(num > 0){
let digit = num % 10;
sum += Math.pow(digit, digits);
num = Math.floor(num / 10);
}

return sum === original;
}


// Check Prime

function isPrime(num){

if(num <= 1) return false;

for(let i=2;i<=Math.sqrt(num);i++){
if(num % i === 0){
return false;
}
}

return true;
}


// Factorial

function factorial(num){

if(num < 0) return "Not defined";

let fact = 1;

for(let i=1;i<=num;i++){
fact *= i;
}

return fact;
}


// Analyze Function

function analyzeNumber(){

let number = parseInt(document.getElementById("numberInput").value);

document.getElementById("palindrome").innerText =
isPalindrome(number) ? "Palindrome: Yes" : "Palindrome: No";

document.getElementById("armstrong").innerText =
isArmstrong(number) ? "Armstrong: Yes" : "Armstrong: No";

document.getElementById("prime").innerText =
isPrime(number) ? "Prime: Yes" : "Prime: No";

document.getElementById("factorial").innerText =
"Factorial: " + factorial(number);

}