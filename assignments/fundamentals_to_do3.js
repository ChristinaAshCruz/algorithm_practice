// BIGGIE SIZE
// Given an array, write a function that changes all positive numbers in the array to “big”.
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
function biggieSize(arr) {
  // first, we need to create an empty array variable to hold our new array values
  var newArray = [];
  // we need to create a loop that will go through the array's values
  var i = 0;
  while (i < arr.length) {
    // during the loop, we have to use an if/else statement that will check whether the values are positive or not
    if (arr[i] >= 0) {
      newArray.push("big");
    } else {
      newArray.push(arr[i]);
    }
    i++;
  }
  return newArray;
}

var arr1 = [-1, 3, 5, -5];
console.log(biggieSize(arr1));

// PRINT LOW, RETURN HIGH
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
  var lowVal = arr[0];
  var highVal = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < lowVal) {
      lowVal = arr[i];
    }
    if (arr[i] > highVal) {
      highVal = arr[i];
    }
  }
  console.log("Lowest value: " + lowVal);
  return "Highest value: " + highVal;
}

var arr1 = [-1, 3, 5, -5];
var arr2 = [10, 55, 32, 5, 7, 1, -20];
console.log(printLowReturnHigh(arr1));
console.log(printLowReturnHigh(arr2));

// PRINT ONE, RETURN ANOTHER
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr) {
  var secondToLastVal = arr[arr.length - 2];
  console.log("2nd To Last Value: " + secondToLastVal);

  var firstOddVal = arr.find((num) => num % 2 != 0);
  return "First Odd Value: " + firstOddVal;
}

var arr2 = [10, 55, 32, 5, 7, 1, -20];
console.log(printOneReturnAnother(arr2));

// DOUBLE VISION
