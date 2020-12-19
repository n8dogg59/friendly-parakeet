// Assignment code here

//make variables for the different character types: lowercase, uppercase, numeric, special character
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passLength = "";
var password = "";

// Write password to the #password input 
function writePassword() {
  password = "";
  var passwordText = document.querySelector("#password"); 
  var totalPass = "";
  passLength = "";

  //collects the number of characters the user wants in the password
  var passLength = prompt("How many characters would you like in your password?");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      window.alert("Please enter a whole number between 8 and 128.");
      writePassword();
      return;
    }
    else {
      passLength = Math.round(passLength);
      window.alert("You chose to have " + passLength + " characters in your password.");
      console.log(passLength);
    }
     
  //Determines if the user wants lower case letters in their password
  var includeLow = confirm("Would you like to include lower case letters in your password?");
    if (includeLow){
      window.alert("You chose to include lower case letters in your password.");
      totalPass += lowCase;
      console.log(totalPass);
    } else {
      window.alert("You chose to not include lower case letters in your password.");
    }
    
  //Determines if the user wants upper case letters in their password
  var includeUp = confirm("Would you like to include upper case letters in your password?");
    if (includeUp) {
      window.alert("You chose to include upper case letters in your password.");
      totalPass += upCase;
      console.log(totalPass);
    } else {
      window.alert("You chose to not include upper case letters in your password.");
    }
  
  //Determines if the user wants numbers in the password
  var includeNum = confirm ("Would you like to include numbers in your password?");
    if (includeNum) {
      window.alert("You chose to inlcude numbers in your password.");
      totalPass += numbers;
      console.log(totalPass);
    } else {
      window.alert("You chose not to include numbers in your password.");
    }
  
  //Determines if the user wants characters in their password
  var includeChar = confirm("Would you like to include special characters in your password?");
    if (includeChar) {
      window.alert("You chose to include special characters in your password.");
      totalPass += char;
      console.log(totalPass);
    } else {
      window.alert("You chose to not include special characters in your password.")
    }
  
  //Makes sure they selcted at least one set of characters
  if (totalPass === "") {
    window.alert("You have to choose at least one set of characters.");
    writePassword();
  }
       
  //generates the password
  var generatePassword = function () {
    password = "";
    var i;
    for (var i = 0; i < passLength; i++) {
      password += totalPass.charAt(Math.floor(Math.random() * totalPass.length));
    }
  }

  generatePassword();
  passwordText.value = password;  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
var passText = document.querySelector('#password');
generateBtn.addEventListener("click", writePassword);