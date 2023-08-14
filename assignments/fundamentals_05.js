// FUNDAMENTALS 5

// SIGMA

// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
  // we will need a 'total' variable that we'll be returning at the end of the function
  let total = 0;

  // with our giver num, we need to create a for loop that ends when it reaches 'num' value]
  // in each for loop we'll be increasing the 'total' by the 'i' value
  for (let i = 0; i <= num; i++) {
    total = total += i;
  }

  return total;
}

console.log(sigma(5));

// FACTORIAL
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num) {
  // just like the previous algo, we will use similiar methods, except we will be multiplying instead of using addition
  // we'll still be needing to create a 'total' variable to return at the end of our function
  let total = 0;
  // our for loop will still loop through the same amount of values until it reaches the same value as our 'num'
  for (let i = 1; i <= num; i++) {
    // since our 'total' is at 0, we will need to add 1 to our total
    // our 'total' will need 1 since we are multiplying
    // if we leave our 'total' at 0, we will be multiplying against 0 for each loop
    if (total == 0) {
      total = total += 1;
    }
    // if the 'total' is not 0, we multiply 'total' by 'i'
    total = total * i;
  }

  return total;
}

console.log(factorial(5));
