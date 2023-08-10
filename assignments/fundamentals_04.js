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

// total: 100 days
// volcanos: 10 days
// tsunami: 15 days
// earthquakes: 20 days
// blizzards: 25 days
// meteor: 30 days

function whatHappensToday() {
  let totalDays = 100;
  let volcanoChance = 10 / totalDays;
  let tsunamiChance = 15 / totalDays;
  let earthquakeChance = 20 / totalDays;
  let blizzardChance = 25 / totalDays;
  let meteorChance = 30 / totalDays;

  let randomDayOutcome = Math.random();

  let dailyOutcome = "";

  // here, we need to create an if/else statement that determines what weather will occur using the math.random result value
  // if the outcome is less than the value of 'volcanoChance'
  if (randomDayOutcome < volcanoChance) {
    dailyOutcome = "Volcano eruption";
    // now we have to calculate for the chances of having a tsunami in addition to the chance of having a volcano eruption and so on
  } else if (randomDayOutcome < volcanoChance + tsunamiChance) {
    dailyOutcome = "tsunami";
  } else if (
    randomDayOutcome <
    volcanoChance + tsunamiChance + earthquakeChance
  ) {
    dailyOutcome = "earthquake";
  } else if (
    randomDayOutcome <
    volcanoChance + tsunamiChance + earthquakeChance + blizzardChance
  ) {
    dailyOutcome = "blizzard";
  } else {
    dailyOutcome = "meteor";
  }
  // since we are changing the dailyOutcome variable, we will need to return that variable at the end of this function
  return dailyOutcome;
}

// creating a new variable to store today's random outcome
let todayOutcome = whatHappensToday();
// printing that outcome into a statement in our console
console.log("Today's outcome: " + todayOutcome);

// WHAT REALLY HAPPENED?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

// first, we need to define the probabilities of each disaster
function whatReallyHappensToday() {
  // list of disaster types
  const disasters = ["earthquake", "tsunami", "volcano", "blizzard", "meteor"];
  // list of probabilities
  const probabilities = [0.1, 0.15, , 0.2, 0.25, 0.3];

  //today's results
  let todaysResults = [];

  // creating a for loop that goes through the list of disasters
  for (let i = 0; i < disasters.length; i++) {
    // creates a new variable for each value in the loop
    let randomNum = Math.random();
    // now, we compare each random num (value between 0 and 1) and checks whether it is greater or equal to the the value in the list of probabilities
    if (randomNum >= probabilities[i]) {
      // if it is, we are going to print that random num value to the console to check whether the function is working correctly
      console.log(randomNum);
      // we are also going to push the value (index of i) in the list of disasters to the todaysResults list
      todaysResults.push(disasters[i]);
    }
  }

  // after the for loop is finished, we are going to check on the list of todaysResults and check whether any values were added
  // if there are no values added, we are going to print "No crazy weather today" to the console
  if (todaysResults.length == 0) {
    return "No crazy weather today!";
  } else {
    // if there are values in the todaysResults list, we are going to print this statement to the console
    return `Today's weather: ${todaysResults}`;
  }

  // we are using return instead of console.log since its noting the end of the whatReallyHappenedToday() function
}

console.log(whatReallyHappensToday());
