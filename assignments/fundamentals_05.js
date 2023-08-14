// FUNDAMENTALS 5

// SIGMA

// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
  // with our giver num, we need to create a for loop that ends before it reaches 'num' value]

  // we will also need a 'total' variable that we'll be returning at the end of the function
  let total = 0;

  // in each for loop we'll be increasing the 'total' by the 'i' value
  for (let i = 0; i < num; i++) {
    total = total += i;
  }

  return total;
}

console.log(sigma(5));
