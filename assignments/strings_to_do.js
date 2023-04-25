// REMOVE BLANKS:
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

var myString = "The fox jumped over the hill";
// establish a new function that can take in a string

// testing out the # of splits I will need for the function
console.log("Test: " + myString.split(" ").join(""));

function removeBlanks(thisString) {
  // set a variable to equate to the string as an array
  var stringAsArray = thisString.split(" ");
  // set a new variable that will remove all the blanks in the array
  var removeBlankArray = stringAsArray.join("");
  // return new string
  return removeBlankArray;
}
console.log(removeBlanks(myString));

// GET DIGITS:
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
var testString = "abc8c0d1ngd0j0!8";
var testString2 = "0s1a3y5w7h9a2t4?6!8?0";
// first we need to establish a new function
function getDigits(thisString) {
  // we need to turn the given string into an array
  var stringAsArray = thisString.split("");
  // console.log("string as array: " + stringAsArray);

  // now that each character is it's own value in the array, we need to create a for loop that will add the integers into their own array
  var numbersArray = [];
  for (var i = 0; i < stringAsArray.length; i++) {
    if (!isNaN(stringAsArray[i])) {
      numbersArray.push(stringAsArray[i]);
    }
  }
  // now that we have all the digits in their own array, we now need to remove all the spaces/blanks and return back as a string
  // joining the array and removing the comma breaks
  var numbersAsString = numbersArray.join("");
  return numbersAsString;
}

console.log(getDigits(testString));
console.log(getDigits(testString2));

// ACRONYMS
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// we need to create a function that can take a string and seperate each word into their own string in an array
var sentenceString = "there's no free lunch - gotta pay yer way.";
function acronyms(sentence) {
  // splitting the sentecence into in array + each value is it's own word
  var stringAsArray = sentence.split(" ");
  // we have to make a new array that can hold the values of each first character of each sentence in the 'stringsAsArray' array

  var allFirstCharacters = [];
  // make a for loop that goes through each word of the array
  for (var i = 0; i < stringAsArray.length; i++) {
    // now we need to pull the first character of each sentence
    // this pushes what ever is the first index of each word.
    allFirstCharacters.push(stringAsArray[i][0]);
  }
  // now that all those first characters are in an array, we now have to convert that array into a string + chain .toUpperCase to make all characters in array capitalized
  var newAcronym = allFirstCharacters.join("").toUpperCase();
  return newAcronym;
}
console.log(acronyms(sentenceString));

// COUNT NON-SPACES
// Create a function that, given a string, returns the number of non-space characters found in the string.

var sentenceString = "Honey pie, you are driving me crazy";
// we have to create a function that can loop through a sentence's characters
// plus add an if/else that can filter out characters that are spaces/blanks
function countNonSpaces(sentence) {
  // we need to create a new temporary variable that we can add to for every character that is not a space
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
      count++;
    }
  }
  return count;
}
console.log(countNonSpaces(sentenceString));

// REMOVE SHORTER STRINGS
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

var wordArray = ["Good morning", "sunshine", "the", "Earth", "says", "hello"];
// we need to create a function that can take in both an array + a value
function removeShorterStrings(array, minLimit) {
  var newArray = [];
  // we need to create a for loop that will go through the array
  for (var i = 0; i < array.length; i++) {
    // if the array[i] (the word that the for loop is currently on) has a length that is greater than or equal to the minLimit, we are going to push that value to the newArray
    if (array[i].length >= minLimit) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(removeShorterStrings(wordArray, 4));
