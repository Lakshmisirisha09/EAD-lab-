let reverseString = function(str){
return str.split("").reverse().join("");
};
const countVowels = (str) => {
let vowels = "aeiouAEIOU";
let count = 0;
for(let char of str){
if(vowels.includes(char)){
count++;
}
}
return count;
};
let longestWord = function(str){
let words = str.split(" ");
let longest = "";
for(let word of words){
if(word.length > longest.length){
longest = word;
}
}
return longest;
};
function processString(){
let text = document.getElementById("sentence").value;
document.getElementById("reverse").innerText =
"Reversed String: " + reverseString(text);
document.getElementById("vowels").innerText =
"Vowel Count: " + countVowels(text);
document.getElementById("longest").innerText =
"Longest Word: " + longestWord(text);
document.getElementById("uppercase").innerText =
"Uppercase: " + text.toUpperCase();
}