// COUNTDOWN
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

// creating a function with a number parameter
function countdown(num) {
  // since we are returning an array, we need a new empty array variable that can hold our new numbers
  var numArray = [];
  // while the number countsdown to 0
  while (num >= 0) {
    // we want to push that num to the numArray
    numArray.push(num);
    // then we want to decrement by 1
    num--;
  }
  return numArray;
}
var arr = countdown(5);
// now we want to take that returned array (arr) and find the length
console.log(arr.length);

// PRINT AND RETURN
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

var arrayTest1 = [3, 5];
console.log(printAndReturn(arrayTest1));

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
  // the first thing we need to do is check the data type of the array's first value
  if (typeof arr[0] == "number") {
    // if the first value is a number, we want to capture the length of the array
    var arrLength = arr.length;
    // then add that to the value of the first number
    var sum = arr[0] + arrLength;
    // and return that sum
    return sum;
  } else {
    // if the first value is not a number, then return this statement
    return "Sorry, the first value of the array is not a number!";
  }
}

var arr1 = [3, 5, 10];
var arr2 = ["hello", 2, 3];
console.log(firstPlusLength(arr1));
console.log(firstPlusLength(arr2));

// VALUES GREATER THAN SECOND
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
var arr = [1, 3, 5, 7, 9, 13];

// we will need to make a loop that will run through the array and check each value
for (var i = 0; i < arr.length; i++) {
  // if arr[i] is greater than arr[1], it will print that value to the console
  if (arr[i] > arr[1]) {
    console.log(arr[i]);
  }
}

// VALUES GREATER THAN SECOND, GENERALIZED
// Write a function that accepts any array
// returns a new array with the array values that are greater than its 2nd value.
// Print how many values this is. What will you do if the array is only one element long?

function valueGreaterThanSecond(arr) {
  // first, we need to check if the array is long enough to account for the second value
  // if the array length is greater than 1
  if (arr.length > 1) {
    // since we're returning a new array, we need to create an empty array to store our values
    var newArray = [];
    // we also need to create a for loop that runs through our given array
    // with the index starting at 0, we're running a loop until it reaches the array's length, and incrementing by 1
    for (var i = 0; i < arr.length; i++) {
      // if the arr[i] is greater than the second value...
      if (arr[i] > arr[1]) {
        // we'll be adding that value to the newArray
        newArray.push(arr[i]);
      }
    }
    // if the newArray.length is not equal to 0...
    if (newArray.length != 0) {
      // we want to print the newArray.length
      console.log(newArray.length);
      // and return the newArray
      return newArray;
      // HOWEVER, if the newArray.length is 0...
    } else {
      // we want to let the user know that none the numbers in the array were greater than the second
      return "The rest of the numbers in the array were not greater than the second value.";
    }
    // if the array length is not greater than 1
  } else {
    return "Your array is only one 1 element long!";
  }
}

var arr1 = [1, 3, 5, 7, 9, 13];
var arr2 = [5];
var arr3 = [3, 4];
console.log(valueGreaterThanSecond(arr1));
console.log(valueGreaterThanSecond(arr2));
console.log(valueGreaterThanSecond(arr3));

// THIS LENGTH, THAT VALUE
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLengthThatValue(num1, num2) {
  // if our num1 is equal to our num2, we're gonna return "Jinx!"
  if (num1 == num2) {
    return "Jinx!";
  } else {
    // if num1 is not equal to num2...
    // we'll be creating a temp array to carry our new values
    var arr = [];
    // we'll be looping the same amount as num1 and pushing the value of num2 to the neww array (arr)
    for (var i = 0; i < num1; i++) {
      arr.push(num2);
    }
    // and returning this new array
    return arr;
  }
}
console.log(thisLengthThatValue(3, 3));
console.log(thisLengthThatValue(10, 12));

// FIT THE FIRST VALUE
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitFirstValue(arr) {
  // check whether arr[0] is greather than the value of the arr.length...

  // if the first value is equal to the array length
  if (arr[0] == arr.length) {
    return "Just right!";
    // if the first value is greater than the array length
  } else if (arr[0] > arr.length) {
    return "Too big!";
  } else {
    // if the value is less than the arr.length...
    return "Too small!";
  }
}

var arr1 = [1, 3, 5, 10];
var arr2 = [4, 3, 10, 20];
var arr3 = [5];
console.log(fitFirstValue(arr1));
console.log(fitFirstValue(arr2));
console.log(fitFirstValue(arr3));

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales
// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit
// returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees) {
  var celcius = (fDegrees - 32) * (5 / 9);
  return fDegrees + "°F = " + celcius.toFixed() + "°C";
}

console.log(fahrenheitToCelsius(80));

// CELCIUS TO FAHRENHEIT
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function celciusToFahrenheit(cDegrees) {
  var fahrenheit = (9 / 5) * cDegrees + 32;
  return cDegrees + "°C = " + fahrenheit.toFixed() + "°F";
}

console.log(celciusToFahrenheit(26.67));\