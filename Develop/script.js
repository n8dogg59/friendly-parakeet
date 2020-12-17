// Assignment code here
//make variables for the different character types: lowercase, uppercase, numeric, special character
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var char = ".+*?[^]$(){}=!<>|:-%&~`";


var length = function() {
  var passLength = prompt("How many characters would you like in your password?");
  if (passLength < 8 || passLength > 128){
    window.alert("Please enter a number between 8 and 128.");
    length();
  }
  else {
    return passLength;
  }
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());  THIS CODE WAS ALREADY HERE
writePassword();


// Write password to the #password input 
function writePassword() {
  //var password = generatePassword();  THIS CODE WAS ALREADY HERE
  //var passwordText = document.querySelector("#password");  THIS CODE WAS ALREADY HERE
  var totalPass = "";

  var includeLow = confirm("Would you like to include lower case letters in your password?");
    if (includeLow){
      totalPass += lowCase;
    }
  var includeUp = confirm("Would you like to include upper case letters in your password?");
    if (includeUp) {
      totalPass += upCase;
    }
  var includeNum = confirm ("Would you like to include numbers in your password?");
    if (includeNum) {
      totalPass += numbers;
    }
  var includeChar = confirm("Would you like to include special characters in your password?");
    if (includeChar) {
      totalPass += char;
    }
  
  length();
  
  var generatePassword = function () {
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password += totalPass.charAt(Math.floor(Math.random() * totalPass.length));
    }
    return password;
  }
  
  passwordText.value = password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);