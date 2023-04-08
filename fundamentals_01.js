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
