// BIGGIE SIZE
// Given an array, write a function that changes all positive numbers in the array to “big”.
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
function biggieSize(arr) {
  // first, we need to create an empty array letiable to hold our new array values
  let newArray = [];
  // we need to create a loop that will go through the array's values
  let i = 0;
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

let arr1 = [-1, 3, 5, -5];
console.log(biggieSize(arr1));

// PRINT LOW, RETURN HIGH
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
  let lowVal = arr[0];
  let highVal = arr[0];

  for (let i = 0; i < arr.length; i++) {
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

let arr1 = [-1, 3, 5, -5];
let arr2 = [10, 55, 32, 5, 7, 1, -20];
console.log(printLowReturnHigh(arr1));
console.log(printLowReturnHigh(arr2));

// PRINT ONE, RETURN ANOTHER
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr) {
  let secondToLastVal = arr[arr.length - 2];
  console.log("2nd To Last Value: " + secondToLastVal);

  let firstOddVal = arr.find((num) => num % 2 != 0);
  return "First Odd Value: " + firstOddVal;
}

let arr2 = [10, 55, 32, 5, 7, 1, -20];
console.log(printOneReturnAnother(arr2));

// DOUBLE VISION
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

let arr1 = [-1, 3, 5, -5];
function doubleVision(arr) {
  // we need to create an empty array to hold our new values
  // we'll also return this new array at the end of the function
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let newVal = arr[i] * 2;
    newArray.push(newVal);
  }
  return newArray;
}

let array = arr1;
let arrayDoubled = doubleVision(arr1);

console.log(array);
console.log(arrayDoubled);
