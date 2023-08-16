// THREEs and FIVEs

// Create threesFives()
// adds values from 100 and 4000000 (inclusive)
// if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function threeFives() {
  let finalSum = 0;
  // we wll need to create a for loop that loops from 100 - 4,000,000
  for (let i = 100; i <= 4000000; i++) {
    // now we need to create an if/else statement that checks whether 'i' is divisible by 3 OR 5
    if ((i % 3 === 0 && !i % 5 === 0) || (i % 5 === 0 && !i % 3 === 0)) {
      finalSum += i;
    }
  }
  return finalSum;
}

console.log(threeFives());
