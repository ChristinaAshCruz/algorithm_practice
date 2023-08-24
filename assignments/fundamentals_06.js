// THREEs and FIVEs

// Create threesFives()
// adds values from 100 and 4000000 (inclusive)
// if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function threeFives() {
  let finalSum = 0;
  // we wll need to create a for loop that loops from 100 - 4,000,000
  for (let i = 100; i <= 4000000; i++) {
    // now we need to create an if/else statement that checks whether 'i' is divisible by 3 OR 5
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      finalSum += i;
    }
  }
  return finalSum;
}

console.log(threeFives());

//GENERATE COIN CHANGE

// Change is inevitable (especially when breaking a twenty).
// Make generateCoinChange(cents).
// Accept a number of American cents --> print how to represent that amount with the smallest number of coins

// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// create a new function
function coinChange(amount) {
  // we need to create a list of coinValues and coinNames
  // coinValues will be used to divide the amount, whereas we'll use coinNames to represent each type of coin in the object that we will return at the end of our function
  let coinValues = [25, 10, 5, 1];
  let coinNames = ["quarters", "dimes", "nickels", "pennies"];

  // we're going to create an empty object to hold our result since we will be creating key-value pairs and then returning the object
  let finalResult = {};

  // now we will create a for loop that loops through the list of coinValues
  for (let i = 0; i < coinValues.length; i++) {
    // we will need a new variable that will hold the current coinValue and a variable that will hold the current coinName
    let currentCoinValue = coinValues[i];
    let currentCoinName = coinNames[i];
    // we need to calculate the whole number that the coin value goes into our 'amount'
    // also, we need to use Math.floor() to round down to the nearest whole number
    let numberOfCoins = Math.floor(amount / currentCoinValue);

    // now, we need to multiply the numberOfCoins by the currentCoinValue and subtract that total from our amount
    amount -= numberOfCoins * currentCoinValue;
    // this should leave us with the remaining change to go through the for loop until amount hits 0

    // we need to add the numberOfCoins to the 'finalResult' object
    finalResult[currentCoinName] = numberOfCoins;

    // however, if the amount is indeed 0, we need to end the for loop using break
    if (amount === 0) {
      break;
    }
  }
  return finalResult;
}

console.log(coinChange(65));

// with half-dollar and dollar amounts included

function coinChange(amount) {
  let coinValues = [100, 50, 25, 10, 5, 1];
  let coinNames = [
    "dollars",
    "half-dollars",
    "quarters",
    "dimes",
    "nickels",
    "pennies",
  ];
  let finalResult = {};

  for (let i = 0; i < coinValues.length; i++) {
    let currentCoinValue = coinValues[i];
    let currentCoinName = coinNames[i];
    let numberOfCoins = Math.floor(amount / currentCoinValue);

    amount -= numberOfCoins * currentCoinValue;
    if (numberOfCoins > 0) {
      finalResult[currentCoinName] = numberOfCoins;
    }
    if (amount === 0) {
      break;
    }
  }
  return finalResult;
}

console.log(coinChange(65));

// MESSY MATH MASHUP

// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.

// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

function messyMath(num) {
  // returns a sum from adding all integers from 0 to 'num'
  var sum = 0;

  // we'll need to create a for loop that runs from 0 to num
  for (let i = 0; i <= num; i++) {
    // if i is exactly 1/3 of num
    if (num * (1 / 3) == i) {
      sum = -1;
      return sum;
    }
    // if i is evenly divisble by 7, add it to sum 2x
    if (i % 7 === 0 && i % 3 != 0) {
      sum += 2 * i;
    }
    // if if i is not divisible by 3
    if (i % 3 != 0 && i % 7 != 0) {
      // if it doesn't reach any of the previous conditions, simply add 'i' to our sum
      sum += i;
    }
  }
  return sum;
}

console.log(messyMath(8));

// TWELVE-BAR BLUES

// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

// and repeat until it reaches 12
function twelveBarBlues() {
  // first we need a for loop that runs until it reaches 12
  for (let i = 0; i <= 12; i++) {
    console.log(i);
    // then "chick"
    console.log("chick");
    // then boom
    console.log("boom");
    // then "chick"
    console.log("chick");
  }
}

twelveBarBlues();

// FIBONACCI

// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

// create a new function that accepts an argument (index)
function fibonacci(index) {
  let currentSum = 0;
  // from what we can tell from the exapmples, fibonacci(0) and fibonnacci(1) are the only ones that have given values
  if (index == 0) {
    return currentSum;
  } else if (index == 1) {
    currentSum += 1;
    return currentSum;
  } else {
    // if 0 or 1 is the index, let's make the two previous values as variables for us to use further in the function
    let previousPreviousIndex = 0;
    let previousIndex = 1;

    // now we have to create a for loop that runs until it reaches index and adds the sum of the last two index values
    for (let i = 2; i <= index; i++) {
      // add the previous 2 indexes together to equate to the currentSum
      currentSum = previousIndex + previousPreviousIndex;
      // overwrite the previousPreviousIndex as the current previousIndex
      previousPreviousIndex = previousIndex;
      // now overwrite the previousIndex as the currentSum
      previousIndex = currentSum;
    }

    return `Fibonacci(${index}): ${currentSum}`;
  }
}

console.log(fibonacci(6));

// SUM TO ONE DIGIT

// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result.

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

// create a function that can take in a integer as a parameter
function sumToOne(num) {
  // first we need to parse num and covert it to a string to separate ea. digit
  let numString = num.toString();
  // now we need to convert it back to integers and place the values into an array
  let digits = numString.split("").map(Number);

  // since we are adding the sum of an array, let's use the .reduce() method
  // we'll be passing our accumulator and the current digit
  // for each loop, we'll be adding the sum with the current digit
  let sum = digits.reduce(
    (accumulator, currentDigit) => accumulator + currentDigit
  );

  // now, we need to check if the sum is single digit
  if (sum < 10) {
    return sum;
  } else {
    // if we still have double digits and less than 10, we have to run the function again with our current sum as an argument
    return sumToOne(sum);
  }
}

console.log(sumToOne(16));

// CLOCK HAND ANGLES

// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock.

// Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds.

// Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands.

// As a review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs."

function clockHandAngles(secondsTotal) {
  // so we know that we get each hour equates to 30deg AND that each hour is 3600sec
  let secondsinHour = 3600;
  let degreesinHour = 360 / 12;

  // our hourHand is calculated by dividing our secondsTotal by how many seconds there are in an hour
  // then, we need to take that number and see how many times it goes into our 12-hour cycle (giving us how many hours total)
  // then we take our hours total and multiply by how many degrees within an hour
  let hourHand = ((secondsTotal / secondsinHour) % 12) * degreesinHour;

  let secondsInMinute = 60;
  let degreesInMinute = 360 / 60;

  // similar to before, we need to calculate the secondsTotal by how many seconds there are in a minute
  // then, we need to take that number and check how many times it goes into our 60minute cycle (giving us how many minutes) -> we use 60, since we are calculating the remainder of minutes within 1 hour
  // then we take that remainder and multiply it by 6 (how many degrees there are in a minute)
  let minuteHand = ((secondsTotal / secondsInMinute) % 60) * degreesInMinute;

  // we need to remember that the secondHand makes a full rotation at 360degs
  // we can find how many degrees in a second by calculating the total rotation by how many seconds
  let degreeInSecond = 360 / 60;

  let secondHand = (secondsTotal % 60) * degreeInSecond;
  return `Hours: ${hourHand} degs. Minutes: ${minuteHand} degs. Seconds: ${secondHand} degs.`;
}

console.log(clockHandAngles(119730));

console.log(((119730 / 3600) % 24) * 30);
