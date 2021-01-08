// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password
function generatePassword() {

  // Declare vars for use in this function
  var passwordLength = "";
  var charTypes = [];
  var lowercaseCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharArray = [" ", "!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var tempPassword = [];
  var finalPassword = "";
  var proceed = false

  // Continue to loop until the user has enter valid choices or presses the cancel button on the number of char prompt dialog box
  while (!proceed) {
    // prompt user to enter how many characters the password should contain
    passwordLength = prompt("How many characters do you want the password to be?");

    // User has clicked on the cancel button and therefore we want to break the loop
    if (passwordLength === null) {
      break;
    }
    // Make sure the user entered a numeric value
    else if (isNaN(passwordLength)) {
      alert("Must input a number between 8 and 128");
      proceed = false;
    }
    else {
      proceed = true;
    }

    if (proceed) {
      // Make sure user entered a numeric value between 8 and 128
      if (passwordLength < 8 ||
        passwordLength > 128) {
        alert("The length of the password has to be between 8 and 128");
        proceed = false;
      }
      else {
        proceed = true;
      }
    }

    // Ask user the type of characters that should be used in generating the password
    if (proceed) {
      var specialChars = confirm("Should the password contain special letters?");
      if (specialChars) {
        // User has selected it should contain special characters. Therefore we push the value of "special" to the charTypes array field 
        charTypes.push("special");
      }

      var lowerChars = confirm("Should the password contain lowercase letters?");
      if (lowerChars) {
        // User has selected it should contain lower characters. Therefore we push the value of "lower" to the charTypes array field 
        charTypes.push("lower");
      }

      var upperChars = confirm("Should the password contain uppercase letters?");
      if (upperChars) {
        // User has selected it should contain upper characters. Therefore we push the value of "upper" to the charTypes array field 
        charTypes.push("upper");
      }

      var numericChars = confirm("Should the password contain numbers?");
      if (numericChars) {
        // User has selected it should contain numeric characters. Therefore we push the value of "numeric" to the charTypes array field 
        charTypes.push("numeric");
      }

      // Make sure user has selected at least one type of character to use in the password
      if (!specialChars &&
        !lowerChars &&
        !upperChars &&
        !numericChars) {
        alert("You have to select some kind of characters to use in the password");
        proceed = false;
      }
      else {
        proceed = true;
      }
    }
  }

  // User has provided information so a password can be generated now
  if (proceed) {
    // Loop the number of times the chosen password length is
    for (var i = 0; i < passwordLength; i++) {

      // Using the charTypes array randomly pick a char type to use for the next character in the password
      var num = Math.floor(Math.random() * (charTypes.length));

      // Based on the choice coming back from the random char type statement above generate the corresponding char for the password
      if (charTypes[num] === "numeric") {
        // call function to generate random number
        var char = randomNumericChar(9)
        tempPassword.push(char);
      }
      else if (charTypes[num] === "lower") {
        // call function to generate random number so that a char can be picked from the predefined array
        var num = randomNumericChar(26)
        var char = lowercaseCharArray[num];
        tempPassword.push(char);
      }
      else if (charTypes[num] === "upper") {
        // call function to generate random number so that a char can be picked from the predefined array
        var num = randomNumericChar(26)
        var char = uppercaseCharArray[num];
        tempPassword.push(char);
      }
      else if (charTypes[num] === "special") {
        // call function to generate random number so that a char can be picked from the predefined array
        var num = randomNumericChar(33)
        var char = specialCharArray[num];
        tempPassword.push(char);
      }
    }
    alert("Your generated password is being created - press the OK button to view it")
    // create final password - concatenate the random chars array into a string
    finalPassword = tempPassword.join("");
  }
  // return final password
  return finalPassword
}

// function to create a random number based on the var being passed in
function randomNumericChar(numdigits) {
  var num = Math.floor(Math.random() * numdigits);
  return num
}