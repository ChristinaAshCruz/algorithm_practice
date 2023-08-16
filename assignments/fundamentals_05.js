// FUNDAMENTALS 5

// SIGMA

// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
  // we will need a 'total' variable that we'll be returning at the end of the function
  let total = 0;

  // with our giver num, we need to create a for loop that ends when it reaches 'num' value]
  // in each for loop we'll be increasing the 'total' by the 'i' value
  for (let i = 0; i <= num; i++) {
    total = total += i;
  }

  return total;
}

console.log(sigma(5));

// FACTORIAL
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num) {
  // just like the previous algo, we will use similiar methods, except we will be multiplying instead of using addition
  // we'll still be needing to create a 'total' variable to return at the end of our function
  let total = 0;
  // our for loop will still loop through the same amount of values until it reaches the same value as our 'num'
  for (let i = 1; i <= num; i++) {
    // since our 'total' is at 0, we will need to add 1 to our total
    // our 'total' will need 1 since we are multiplying
    // if we leave our 'total' at 0, we will be multiplying against 0 for each loop
    if (total == 0) {
      total = total += 1;
    }
    // if the 'total' is not 0, we multiply 'total' by 'i'
    total = total * i;
  }

  return total;
}

console.log(factorial(5));

// STAR ART

// info
// text field -> 75 character limit
// want to be able to fill it with spaces and asterisks
// should print asterisks consecutively

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
function drawLeftStars(num) {
  // first, we need to create an empty string
  // during our for loop, the string will have asterisks added to the string and then returned at the end of our function
  let starResult = "";
  // then, we'll create a for loop that will add the same amount of (*) as our num value to our 'starResult' variable string
  for (let i = 0; i < num; i++) {
    // each time through the loop, we'll add an asterisk to the 'starResult' list
    starResult += "*";
  }
  return starResult;
}

console.log(drawLeftStars(7));

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.

function drawRightStars(num) {
  // like the drawLeftStars functions, we'll need an empty string that will store our final result
  // then we will return that variable at the end of our function
  let starResult = "";
  // we need to create a for loop that runs until 'i' reaches 75
  // we also need to create a variable that will be the total difference between 75 and our num value
  let difference = 75 - num;

  for (let i = 0; i < difference; i++) {
    // since we are running the for loop until we reach the value of our 'difference', we are adding spaces to our starResult
    starResult += " ";
  }

  // we'll also need a 2nd for loop that will add the (*) portion to our 'starResult'
  for (let i = 0; i < num; i++) {
    starResult += "*";
  }

  // finally, we return the final string result
  return starResult;
}

console.log(drawRightStars(70));

// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
function drawCenteredStars(num) {
  // in order to print the asterisks in the center, we need to divide the difference in half
  // then, we'd add that value in 'spaces' at the beginning and end of the string (that we return at the end of our function)
  let starResult = "";
  let differenceHalf = (75 - num) / 2;
  // now, we need to create a for loop that loops through the amount of our difference to add our 'spaces' to our starResult string
  for (let i = 0; i < differenceHalf; i++) {
    starResult += " ";
  }
  // now we need to create another for loop that loops until we reach the value of our num
  for (let i = 0; i < num; i++) {
    starResult += "*";
  }
  // we will need to finish off our starResult with the second half of our 'spaces', so that our asterisks are in the center of our 'starResult' string
  for (let i = 0; i < differenceHalf; i++) {
    starResult += " ";
  }
  return starResult;
}

console.log(drawCenteredStars(11));

// CHARACTER ART
// From the above, derive the following that accepts and draws the given characters, not just asterisks:

//drawLeftChars(num,char)

// for this first problem, we need to create a function that follows the same instructions as above along with checking the data type of 'char'
function drawLeftChars(num, char) {
  // this if/else statement checks whether 'char' is a string data type
  if (typeof char != "string") {
    // if it is NOT string data type, it converts the value to a string
    var updatedChar = char.toString();
  }
  // if it returns false and is a string data type,
  var updatedChar = char;
  let starResult = "";
  // // like before, we need a president
  for (let i = 0; i < num; i++) {
    // each time through the loop, we'll add an asterisk to the 'starResult' list
    starResult += updatedChar;
  }
  return starResult;
}

console.log(drawLeftChars(2, "hello"));
// drawRightChars(num,char)

function drawRightChars(num, char) {
  if (typeof char != "string") {
    var updatedChar = char.toString();
  } else {
    var updatedChar = char;
  }
  let starResult = "";
  let difference = 75 - num;
  // adding in our spaces to our 'starResult'
  for (let i = 0; i < difference; i++) {
    starResult += " ";
  }
  // now, adding in our 'char' enough times until it reaches a character limit of 75
  for (let i = 0; i < num; i++) {
    starResult += char;
  }
  return starResult;
}

console.log(drawRightChars(10, "-"));

// drawCenteredChars(num,char)
function drawCenteredStars(num, char) {
  // if it is NOT string data type, it converts the value to a string
  if (typeof char != "string") {
    var updatedChar = char.toString();
  } else {
    // if it is a string, it just places to value as 'updatedChar'
    var updatedChar = char;
  }
  let starResult = "";
  // like the previous drawCenteredChars function, we are going to create a new variable, 'differenceHalf', where we are dividing the difference between the num given and 75
  let differenceHalf = (75 - num) / 2;
  // for the value of 'differenceHalf', we are going to add a space first
  for (let i = 0; i < differenceHalf; i++) {
    starResult += " ";
  }
  // then we are going to add the same amount of chars as our 'num' value
  for (let i = 0; i < num; i++) {
    starResult += updatedChar;
  }
  // then we are going to add the second half of spaces to 'starResult' at the end our function, so that our chars are in the middle of the new string
  for (let i = 0; i < differenceHalf; i++) {
    starResult += " ";
  }
  return starResult;
}

console.log(drawCenteredStars(15));
