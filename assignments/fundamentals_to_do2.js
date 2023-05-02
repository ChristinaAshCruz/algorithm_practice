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
