// ONLY KEEP THE LAST FEW
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function lastFew(arr, num) {
  // we can easily change the array using .splice
  let valueAmtToRemove = 0;
  // here, we needd to get the value of the array length subtracted by the num given
  valueAmtToRemove = arr.length - num;
  // we are now going to set the index to start at 0 and remove the total from line 8 and then return the changed array
  arr.splice(0, valueAmtToRemove);
  return arr;
}

let array = [1, 2, 3, 4, 5];
let array2 = [2, 4, 6, 8, 10];
console.log(lastFew(array, 3));
console.log(lastFew(array2, 3));

// MATH HELP
// You are given two numbers – coefficients M and B in the equation Y = MX + B.
// Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

function mathHelp(m, b) {
  // so we know that we can retrieve our x value if y equates to 0
  let y = 0;
  // by shifting our main equation around, we can solve how we get x
  let x = (y - b) % m;
  return x;
}

console.log(mathHelp(10, 5));

// POOR KENNY
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
