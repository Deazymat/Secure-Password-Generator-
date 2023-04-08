// Function to make a password based on the persons input.
function generatePassword() {
  //Array of lowercase letters
  var cat = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Array of uppercase letters
  var monkey = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // Array of numbers
  var squirrel = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of special characters
  var frog = [
    "!",
    "@",
    "#",
    "$",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "/",
    "?",
    ":",
    ";",
    ".",
    ">",
    ",",
    "<",
    "`",
    "~",
    "[",
    "]",
    "{",
    "}",
    "|",
  ];

  // Selected character is set based on the users input
  var selectArray = [];
  // The length of what the user wants to input
  var passwordLength = generatePasswordLength();
  // Makes sure confirm that at least one of the characters are selected
  var charTypeSelected = false;
  // Loop for the user until one character type is chosen
  while (charTypeSelected == false) {
    // The users choice for the characters
    var catChoice = getSelect("lowercase");
    var monkeyChoice = getSelect("uppercase");
    var squirrelChoice = getSelect("numeric");
    var frogChoice = getSelect("special");
    // The checking to make sure one type is selected
    if (catChoice || monkeyChoice || squirrelChoice || frogChoice) {
      charTypeSelected = true;
    } else {
      alert("You have to select at least one of the character types");
    }
  }

  // Adding the selected character type for what is selected

  if (catChoice) {
    selectArray = selectArray.concat(cat);
  }
  if (monkeyChoice) {
    selectArray = selectArray.concat(monkey);
  }
  if (squirrelChoice) {
    selectArray = selectArray.concat(squirrel);
  }
  if (frogChoice) {
    selectArray = selectArray.concat(frog);
  }
  // The empty string to build the password.

  var passwordString = "";

  // The loop for the selected array to generate the password

  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectArray[Math.floor(Math.random() * selectArray)];

    // This will reset if the user does not input correct character type
    return passwordString;
  }
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
