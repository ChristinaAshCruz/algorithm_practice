// FUNDAMENTALS TO-DO 1

//Setting and Swapping
// set myNumber to 42
var myNumber = 42;
// Set myName to your name
var myName = "Christina";
// Swap myNumber with myName
myNumber = myName;
console.log(myNumber);
//and vice versa
// myName = myNumber;
// console.log(myName);

// print integers from -52 to 1066 using a FOR loop
for (i = -52; i <= 1066; i++) {
  // making my starting point at -52 and having the loop go until i = 1066. that way all the integers needs will be printed in the console
  console.log(i);
}

// DON'T WORRY, BE HAPPY: create beCheerful(). Within function, console.log string "good morning!". Call it 98 times.
function beCheerful(amount) {
  // created function with amount of times called as the parameter
  for (i = 0; i <= amount; i++) {
    // made the for loop start at 0 and have it loop through until it is less than or equal to the 'amount'
    console.log("good morning!");
  }
}
// calling beCheerful() with amount of times needed as the argument
beCheerful(98);

// MULTIPLES OF 3, but not all: using a FOR loop, print mulitples of 3 from -300 to 0. Skip -3 and -6.
for (i = -300; i <= 0; i++) {
  // made my starting point at -300 and had the loop go on until it was equal 0. I also had the loop increment by 1 so that it would run the if conditional against every integer.
  if (i % 3 == 0 && i != -3 && i != -6) {
    // created an if statement that filters through each integer
    // checks if i is a multiple of 3
    // also checks if i is not equal to -3 or -6 and therfor skips those 2 numbers
    console.log(i);
    // then it will log that integer in the console
  }
}

// PRINTING INTEGERS WITH WHILE
// Print integers from 2000 - 5280, using a while
var startingNum = 1999;
// creating the starting point for while loop
// since we're increasing by 1 each time, the starting point is one less.
while (startingNum < 5280) {
  // creating equation that increases the number
  startingNum = startingNum + 1;
  // printing the equation result for each loop
  console.log(startingNum);
}

// YOU SAY IT'S YOUR BIRTHDAY:
// If given numbers represent your birth month and day in either order, log "How did you know?"
// else log "Just another day..."
function isItMyBirthday(num1, num2) {
  // writing an if statement testing whether num1 or num2 is 6 or 21 and vice versa
  if ((num1 == 6 && num2 == 21) || (num1 == 21 && num2 == 6)) {
    console.log("How did you know? 😏");
  } else {
    // then writing a print statement for when num1 or num2 are not either 6 or 21
    console.log("Just another day... 🥲");
  }
}
// Testing if statement
isItMyBirthday(6, 21);
isItMyBirthday(21, 6);
// Testing else statement
isItMyBirthday(3, 15);

// LEAP YEAR:
// Write a function that determines whether a given year is a leap year.
// If a year is divisible by four, it is a leap year
// unless it is divisible by 100. However, if it is divisible by 400, then it is.
function checkIfLeapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    // if year is divisible by 4 or 400
    console.log("It's a leap year!");
  } else {
    console.log("It's not a leap year.");
  }
}
// Testing a leap year
checkIfLeapYear(2024);
// Testing 100 conditional
checkIfLeapYear(100);
// Test #2
checkIfLeapYear(2000);

// PRINT AND COUNT:
// Print all integer multiples of 5, from 512 -4096. Afterward, also log how many there were
var amount = 0;
function printAndCount() {
  for (i = 512; i <= 4096; i++) {
    amount = amount + 1;
    console.log(i);
  }
}
printAndCount();
console.log(amount);

// MULTIPLES OF 6:
// print multiples of 6-60,000 using a WHILE
let num = 0;
// made num the starting point for while loop
while (num <= 60000) {
  // while num is less than or equal to 60000
  if (num % 6 == 0) {
    // if num is divisible by 6 it will log num and add 1 afterwards
    console.log(num);
    num += 1;
  } else {
    // if num is not a multiple of 6, it will only add 1 to num
    num += 1;
  }
}

// CODING THE DOJO WAY:
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// made starting point at 1
var num = 1;
// while num is less than or equal to 100...
while (num <= 100) {
  // if num is divisible by 5 AND divisible by 10, it will print "Coding Dojo" and increase num by 1
  if (num % 5 == 0 && num % 10 == 0) {
    console.log("Coding Dojo");
    num += 1;
    // if num is ONLY divisible by 5, it will print "Coding" and increase num by 1
  } else if (num % 5 == 0) {
    console.log("Coding");
    num += 1;
    // if none of the previous conditionals result as true, then it will print num and increase num by 1
  } else {
    console.log(num);
    num += 1;
  }
}

// WHAT DO YOU KNOW?
// Your function will be given an input parameter incoming. Please console.log this value.
function log(incoming) {
  console.log(incoming);
}

log("Hello there");
log(24);

// WHOA, THAT SUCKER'S HUGE...
// Add odd integers from -300,000 to 300,000
// console.log the final sum.
// Is there a shortcut?

// creating a for loop and starting it at -300000 and looping until i = 300000 and incrementing by 1 each time
var num = -5;
var limit = 10;
let numList = [];

while (num < limit) {
  if (num % 2 != 0) {
    num++;
  } else {
    num++;
    numList.push(num);
  }
}
console.log(numList);
var sum = 0;
for (let i = 0; i < numList.length; i++) {
  sum += numList[i];
}
console.log(sum);

// COUNTDOWN BY FOURS
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

// since we cannot use a for loop, we'll use a WHILE loop instead
// loop: while our startNum = 2016 is greater than 0, we'll print every 4th number
var num = 2016;
while (num > 0) {
  if (num % 4 == 0 && num != 0) {
    console.log(num);
    num--;
  } else {
    num--;
  }
}

// FLEXIBLE COUNTDOW
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

// Since we're passing through multiple arguments to our equation, we'll need to make a new function
function flexCountdown(lowNum, highNum, mult) {
  // while the highNum is greater than the lowNum
  while (highNum > lowNum) {
    // if the highNum is a multiple of mult
    if (highNum % mult == 0) {
      // print current highNum
      console.log(highNum);
      // decrement by 1 to continue through the loop
      highNum--;
    } else {
      // if not divisible by the mult, decrement by 1
      highNum--;
    }
  }
}

flexCountdown(2, 9, 3);
flexCountdown(2, 103, 3);

// THE FINAL COUNTDOWN
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off!

// Given 4 parameters (param1,param2,param3,param4)

// print the multiples of param1, starting at param2 and extending to param3.

// One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
