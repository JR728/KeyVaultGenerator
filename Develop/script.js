// Assignment code here
// all the characters that can be apart of the password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/?";

// the parameters of the password
var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecial;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/?";

var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecial;

