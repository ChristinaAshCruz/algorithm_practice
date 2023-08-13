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

// SOARING IQ

// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

// dojo student -> has IQ = 101
// 14wk bootcamp
// IQ increases to 101.1 (on 1st day) and an ADDITIONAL .02 on the 2nd day
// then increases to .98 on his 98th day (end of 14 weeks)

// write out function
function soaringIQ() {
  // creating a variable for the amount of days the bootcamp will last
  // we'll be using const since this value will not be changed/manipulated throughout the function
  const bootcampTotalDays = 2;
  let bogdanIQ = 101;
  // let's now create a for loop that loops through the same amount of days the bootcamp will last
  for (let i = 0; i <= bootcampTotalDays; i++) {
    // for each time we run the loop, Bogdan's IQ is going to increase by .01
    bogdanIQ += 0.01;
  }
  // after the loop, return Bogdan's final IQ
  return bogdanIQ;
}

console.log("Bogdan's final IQ:" + soaringIQ());

// LETTER GRADE

// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

// write function that prints letter grade
// function is given an integer
// that int represents score from 0-100

//A: 90+
//B: 80-89
//C: 70-79
//D:60-69
//F:59 and below

// lets establish a new function named letterGrade that passes in the given score as a parameter
function letterGrade(score) {
  // for this function we'll be using a switch case
  // for the switch case to work, we'll need to state 'true' as the switch's expression
  switch (true) {
    // each case will check whether the score falls within a value range
    case score >= 90:
      // if true, it will return the given statement along with the letter grade
      return `Score: ${score}, Grade: A`;
      // and break to end the case instructions and exits the case enitrely
      break;
    // we will repeat this method for each score value range
    case score <= 89 && score >= 80:
      return `Score: ${score}, Grade: B`;
      break;
    case score <= 79 && score >= 70:
      return `Score: ${score}, Grade: C`;
      break;
    case score <= 69 && score >= 60:
      return `Score: ${score}, Grade: D`;
      break;
    case score <= 59:
      return `Score: ${score}, Grade: F`;
    // At the end of our switch case, we'll end with a default case, in case there are any scores given that do not fall within our score ranges or include values that are undefined
    default:
      return "Unknown grade";
  }
}

console.log(letterGrade(91));
console.log(letterGrade(85));
console.log(letterGrade(75));
console.log(letterGrade(65));
console.log(letterGrade(40));

// MORE ACCURATE GRADES

// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

// function moreAccurateGrades(score) {
//   switch (true) {
//     case score >= 90:
//       if (score - 90 <= 2) {
//         return `Score: ${score}, Grade: A-`;
//       } else if (score - 100 <= 2) {
//         return `Score: ${score}, Grade: A+`;
//       } else {
//         return `Score: ${score}, Grade: A`;
//       }
//       break;
//   }
// }

function moreAccurateGrades(score) {
  switch (true) {
    // case: score is 98-100
    case score >= 98:
      return `Score: ${score}, Grade: A+`;
      break;
    // case: score is 93-97
    case score >= 93 && score <= 97:
      return `Score: ${score}, Grade: A`;
      break;
    // case: score is 90-92
    case score >= 90 && score <= 92:
      return `Score: ${score}, Grade: A-`;
      break;
    // ---------------------- //
    // case: score is 88-90-
    case score == 88 || score == 89:
      return `Score: ${score}, Grade: B+`;
      break;
    // case: score is 83-87
    case score >= 83 && score <= 87:
      return `Score: ${score}, Grade: B`;
      break;
    // case: score is 80-82
    case score >= 80 && score <= 82:
      return `Score: ${score}, Grade: B-`;
      break;
    // ---------------------- //
    // case: score is 78-80
    case score == 78 || score == 79:
      return `Score: ${score}, Grade: C+`;
      break;
    // case: score is 73-77
    case score >= 73 && score <= 77:
      return `Score: ${score}, Grade: C`;
      break;
    // case: score is 70-72
    case score >= 70 && score <= 72:
      return `Score: ${score}, Grade: C-`;
      break;
    // ---------------------- //
    // case: score is 68-70
    case score == 68 || score == 69:
      return `Score: ${score}, Grade: D+`;
      break;
    // case: score is 63-67
    case score >= 63 && score <= 67:
      return `Score: ${score}, Grade: D`;
      break;
    // case: score is 60-62
    case score >= 60 && score <= 62:
      return `Score: ${score}, Grade: D-`;
      break;
    // ---------------------- //
    // case: score is 68-70
    case score <= 59:
      return `Score: ${score}, Grade: F`;
      break;
    default:
      return "Unknown grade";
  }
}

console.log(moreAccurateGrades(91));
console.log(moreAccurateGrades(85));
console.log(moreAccurateGrades(75));
console.log(moreAccurateGrades(65));
console.log(moreAccurateGrades(40));
