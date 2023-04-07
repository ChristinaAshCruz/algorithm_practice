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

// Don't worry, be happy: create beCheerful(). Within function, console.log string "good morning!". Call it 98 times.
function beCheerful(amount) {
  // created function with amount of times called as the parameter
  for (i = 0; i <= amount; i++) {
    // made the for loop start at 0 and have it loop through until it is less than or equal to the 'amount'
    console.log("good morning!");
  }
}
// calling beCheerful() with amount of times needed as the argument
beCheerful(98);

// Multiples of 3, but not all: using a FOR loop, print mulitples of 3 from -300 to 0. Skip -3 and -6.
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
