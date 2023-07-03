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

function generatePassword() {
  passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validate the password length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a valid password length (between 8 and 128 characters):");
  }
  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include special characters?");

  // Ensure at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }
}
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
