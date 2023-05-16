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

// COUNT POSITIIVES
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

let arr1 = [-1, 3, 5, -5];

function countPositives(arr) {
  // first, we need to create a variable that can hold the total amount of negative values counted
  let positiiveAmt = 0;
  // now, we need to create loop that will go through each value of the array and test whether the vaule is positive or negative
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        let positiiveAmt = 0;
++;
    }
  }
  arr[arr.length - 1] = positiiveAmt;
  return arr;
}

console.log(countPositives(arr1));

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

let arr1 = [-1,1,1,1]
let arr2 = [2,2,2,5,5]

function evensAndOdds(arr){
  // creating empty variables that can count the total of even #s and odd #s
  let oddCounter = 0;
  let evenCounter = 0;
  // now, creating a for loop that will go through each value of the array
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 != 0){
      // if the value is not even, increase the oddCounter by 1
      oddCounter++;
      // Also, check whether the odd counter is divisible by 3
      if(oddCounter % 3 == 0){
        console.log("That's odd!")
      }
    } else {
      // if the value turns out to be even, increase the even counter by 1
      evenCounter++;
      // also, check whether the even counter is divisible by 3
      if(evenCounter % 3 == 0){
        console.log("Even more so!");
      }
    }
  }
}

evensAndOdds(arr1);
evensAndOdds(arr2);

// INCREMEMENT THE SECONDS
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
let arr1 = [2,2,2,5,5]

function incrementTheSeconds(arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 != 0){
      arr[i] = arr[i] + 1
      console.log(arr[i])
    }
    console.log(arr[i])
  }
  return arr
}

console.log(incrementTheSeconds(arr1))

// PREVIOUS LENGTHS
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLengths(arr){
  // we need to write a for loop that will run through the entire array
  for(let i = 0; i< arr.length; i++){
    // if i equates to 0...
    if(i === 0){
      // we want to set that index value to 0 
      arr[i] = 0;
    } else {
      // if it doesn't equate to 0
      let newLength = arr[i-1].length
      arr[i] = newLength;
    }
  }
  return arr;
}

let arr1 = ["sapphire", "jungle", "blossom", "whisper", "glitter"];
let arr2 = previousLengths(arr1)
console.log(arr2)

// ADDS SEVEN TO MOST
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addsSevenToMost(arr){
  let newArray = []
  // first, we are going to need to make a loop that will run through the array given
  for(let i = 0; i<arr.length; i++){
    // if i is not the first value
    if (i != 0){
      // next we need to push this value to the new array
      newArray.push(arr[i])
    }
  }
  // after the loop is finished, we also need to add a value of 7 to the end of the new array
  newArray.push(7)
  return newArray
}

const arr1 = [-1, 3, 5, -5];
console.log(addsSevenToMost(arr1))

// REVERSE ARRAY
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverseArray(arr){
  // we will need to variables: one to hold the new array values and one that will be our starting point for our reverse loop
  let newArray = []
  // our reverse loops needs to start at the end of our array. We subtract 1 since array start at an index of 0
  let i = arr.length-1
  // let's create an array that will run through an array backwards
  // we also need i to decrease by 1 until it equates to -1, since we want to include the index of 0
  while(i>-1){

      newArray.push(arr[i])
      i--
  }
  return newArray
}
const arr1 = [-1, 3, 5, -5];
console.log(reverseArray(arr1))

// OUTLOOK: NEGATIVE 
// Given an array, create and return a new one containing all the values of the provided array, made negative.

function outlookNegative(arr){
  let newArray = []

  for(let i = 0; i <arr.length; i++){
    if(arr[i]<0){
      let tempVal = 0;
      tempVal = arr[i] * -1
      newArray.push(tempVal)
    } else {
      let tempVal = 0;
      tempVal = arr[i] * -1
      newArray.push(tempVal)
    }
  }
  return newArray
}

const arr1 = [-1, 3, 5, -5];
console.log(outlookNegative(arr1))

// ALWAYS HUNGRY 
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
// first we need to check whether the array actually contains "food" 
// if so...
if(arr.includes("food")){
  for(let i = 0; i <arr.length; i++){
    if(arr[i] == "food"){
      console.log("yummy")
    } else {
      console.log(arr[i])
    }
  }
// if the array does not contain "food"
} else {
  console.log("I'm hungry")
}
}

const arr1 = [-1, 3, 5, -5];
const arr2 = [-1, "food", 5, -5];
alwaysHungry(arr1)
alwaysHungry(arr2)

// SWAP TOWARD THE CENTER
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapToCenter(arr){
  if(arr.length > 4){
    let tempValStart = arr[0]
    let tempValEnd = arr[arr.length-1]
    arr[0] = tempValEnd
    arr[arr.length-1] = tempValStart

    let tempValThird = arr[2]
    let tempValThirdToLast = arr[arr.length-3]
    arr[2] = tempValThirdToLast
    arr[arr.length-3] = tempValThird

    return arr
  }
  if(arr.length <= 4){
     let tempValStart = arr[0]
    let tempValEnd = arr[arr.length-1]
    arr[0] = tempValEnd
    arr[arr.length-1] = tempValStart
    return arr
  }
}

const arr1 = [1,2,3,4,5,6]
const arr2 = [true,42,"Ada",2,"pizza"] 
console.log(swapToCenter(arr1))
console.log(swapToCenter(arr2))

// SCALE THE ARRAY
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleArray(arr, num){
  let newArray = []
  for(let i = 0; i<arr.length; i++){
    let newVal = arr[i] * num
    newArray.push(newVal)
  }
  return newArray
}

const arr1 = [1,2,3,4,5,6]
console.log(scaleArray(arr1, 4))
