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

  // Validate the password length and what characters are included
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
  // Generate the password based on selected criteria
  var password = generatePasswordBasedOnCriteria();

  return password;
}

function generatePasswordBasedOnCriteria() {
  var selectedChars = "";
  var password = "";

  // Build the string of selected characters based on the criteria
  if (includeLowercase) {
    selectedChars += lowercaseChars;
  }
  if (includeUppercase) {
    selectedChars += uppercaseChars;
  }
  if (includeNumeric) {
    selectedChars += numericChars;
  }
  if (includeSpecial) {
    selectedChars += specialChars;
  }

  // Generate the password using randomly selected characters
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  return password;
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
