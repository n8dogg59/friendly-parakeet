// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//make variables for the different character types: lowercase, uppercase, numeric, special character
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var char = ".+*?[^]$(){}=!<>|:-%&~`";
var passLength = "";
var password = "";



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  


// Write password to the #password input 
function writePassword() {
  password = "";
  var passwordText = document.querySelector("#password"); 
  var totalPass = "";

  var passLength = prompt("How many characters would you like in your password?");
    console.log(passLength);
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      window.alert("Please enter a whole number between 8 and 128.");
      writePassword();
    }
    else {
      console.log(Math.round(passLength));
    }
  var includeLow = confirm("Would you like to include lower case letters in your password?");
    if (includeLow){
      totalPass += lowCase;
      console.log("Lower Case");
      console.log(totalPass);
    }
  var includeUp = confirm("Would you like to include upper case letters in your password?");
    if (includeUp) {
      totalPass += upCase;
      console.log("Upper Case");
      console.log(totalPass);
    }
  var includeNum = confirm ("Would you like to include numbers in your password?");
    if (includeNum) {
      totalPass += numbers;
      console.log("numbers");
      console.log(totalPass);
    }
  var includeChar = confirm("Would you like to include special characters in your password?");
    if (includeChar) {
      totalPass += char;
      console.log("characters");
      console.log(totalPass);
    }
  if (totalPass === "") {
    window.alert("You have to choose at least one set of characters.");
    writePassword();
  }
      
  var generatePassword = function () {
    password = "";
    console.log(passLength);
    var i;
    for (var i = 0; i < passLength; i++) {
      password += totalPass.charAt(Math.floor(Math.random() * totalPass.length));
    }
    console.log(password); //logging just to make sure I'm on the right track
  }

  generatePassword();
  console.log(password);
  passwordText.value = password;  

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);