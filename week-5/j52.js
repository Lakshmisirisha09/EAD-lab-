function isPalindrome(num){
let original=num;
let reversed=0;
while(num>0){
let digit=num%10;
reversed=reversed*10+digit;
num=Math.floor(num/10);
}
return original===reversed;
}
function isArmstrong(num){
let original=num;
let sum=0;
let digits=num.toString().length;
while(num>0){
let digit=num%10;
sum+=Math.pow(digit,digits);
num=Math.floor(num/10);
}
return sum===original;
}
function isPrime(num){
if(num<=1) return false;
for(let i=2;i<=Math.sqrt(num);i++){
if(num%i===0){
return false;
}
}
return true;
}
function factorial(num){
let fact=1;
for(let i=1;i<=num;i++){
fact*=i;
}
return fact;
}
function analyzeNumber(){
let number=parseInt(document.getElementById("numberInput").value);
document.getElementById("palindrome").innerText =
isPalindrome(number) ? "Palindrome Number" : "Not a Palindrome";
document.getElementById("armstrong").innerText =
isArmstrong(number) ? "Armstrong Number" : "Not Armstrong";
document.getElementById("prime").innerText =
isPrime(number) ? "Prime Number" : "Not Prime";
document.getElementById("factorial").innerText =
"Factorial: "+factorial(number);
}