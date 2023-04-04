function generatePassword() {
  //Created multiple arrays that hold all possible characters used when generating a password
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
  //Empty array that will hold the contents of the arrays that meet the selection criteria
  var characterPool = [];
  //Created a variable that will hold the user input for setting the length of the password
  var numberOfChar = prompt("How many characters does your password need? Choose between 8-128 characters.");
  //Logic checks if the users input is less than 8 or greater than 128. Will return the message non valid number of characters if users input doesnt meet the condition. 
  if (numberOfChar < 8 || numberOfChar > 128) {
    return "Non-valid amount of characters. Please make sure to choose between 8-128 characters.";
  }
  //Checks that the users input is a number if its not will propmpt the user to try again. Otherwise will inform the user the amount of characters they have chosen for their password.
  else if (isNaN(numberOfChar)) {
    numberOfChar = prompt("That's not a number try again.");
  }
  else {
    alert("Your password will be " + numberOfChar + " characters.");
  }
  //The following conditions ask the user to confirm what kind of characters will be included in the character pool for generating their password. They will be informed of their selection after each confirm.
  choseUpper = confirm("Do you wish to use uppercase characters?");
  if (choseUpper) {
    alert("Uppercase characters will be used.");
  }
  else {
    alert("Uppercase characters will be excluded.");
  }

  choseLower = confirm("Do you wish to use lowercase characters?");
  if (choseLower) {
  alert("Lowercase characters will be used.");
  }
  else {
    alert("Lowercase characters will be excluded.");
  }

  choseNumbers= confirm("Do you wish to use numbers?");
  if (choseNumbers) {
    alert("Numbers will be used.");
  }
  else {
    alert("Numbers will be excluded.");
  }

  choseSpecial = confirm("Do you wish to use special characters?");
  if (choseSpecial) {
    alert("Special characters will be used.");
  }
  else {
    alert("Special characters will be excluded.");
  }
  // Conditon for checking that the user picks at least on type of character.
  if (!choseLower && !choseUpper && !choseNumbers && !choseSpecial) {
    return "No character types selected please select at least one type.";
  };

  //Conditions check if that typ of character is being used if they are, then they get concatinated into the empty array characterPool
  if (choseLower) {
    characterPool = characterPool.concat(lowercaseChar);
  }

  if (choseUpper) {
    characterPool = characterPool.concat(uppercaseChar);
  }

  if (choseNumbers) {
    characterPool = characterPool.concat(numericChar);
  }
  
  if (choseSpecial) {
    characterPool = characterPool.concat(specialChar);
  }

 //Generate Password is set to be an empty string that will the hold the characters selected from the characterPool array by the random function. Finally returns the generatedPassword
  let generatedPassword = ""
  for (let i = 0; i < numberOfChar; i++) {
    let rng =[Math.floor(Math.random() * characterPool.length)];
    generatedPassword = generatedPassword + characterPool[rng];
  }
  return generatedPassword;
};

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