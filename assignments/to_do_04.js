// TO DO 4

// EXTRACT-O-MATIC

// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

function extractDigit(num, digitNum) {
  // since we are returning a single integer of the 'num', we have to separate the 'num' into an array
  // we can do this using by converting num to a string, splitting it, and then mapping each number
  let array = num.toString().split("").map(Number);

  // since 0 represents the ones digit and 1 represents the tens digit -> we are going to have to create an equation that will equate to our index that we'll use to find our numeral value

  // array.length - 1 ---> subtracting the array length by 1 sets our index at the most right value
  // subtracting that value by our digit num moves our index to the left (instead of the right)
  // thus, if our index is a negative result, we'll return a 0 since it is not within bounds of our array

  let index = array.length - 1 - digitNum;
  if (index >= 0 && index < array.length) {
    let numeralValue = array[index];
    return numeralValue;
  } else {
    return 0;
  }
}

console.log(extractDigit(1234, 2));
console.log(extractDigit(45789, 5));
console.log(extractDigit(1824, -1));

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.

function extractDigit2(num, digitNum) {
  let array = num.toString().split("").map(Number);

  if (digitNum <= -1) {
    // we'll need to find our numeralValue going from right to left instead of how we did previously
    let numNoRemainder = Math.floor(num);
    // we'll need to find out how long our array is before it reaches the decimal point
    let preDecimalLength = numNoRemainder.toString().length;
    let index = array.length - preDecimalLength - digitNum;
    return array[index];
  } else {
    let index = digitNum - 1;
    if (index >= 0 && index < array.length) {
      let numeralValue = array[index];
      return numeralValue;
    } else {
      return 0;
    }
  }
}

console.log(extractDigit2(32715.5892, -1));
console.log(extractDigit2(1234, 2));
console.log(extractDigit2(45789, 5));
// Third: handle negative num values as well, doing what you think is appropriate.
