var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
// need to loop through the code
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    countPositives++;
  }
}
// if numbers[i] > 0
// then countPositives++

console.log("there are " + countPositives + " positive values");

function tip(bill) {
  // console.log(bill * 1.2);
  // calculate bill with tip
  // divide by 4
  return bill * 1.2;
}
var thaiFood = 150;
var group = 4;

var total = tip(thaiFood);
var perPerson = total / group;
console.log("The final total is $" + total);
console.log("It's going to be $" + perPerson + " per person (including tip)");

// writing code to check whether word is a palindrome or not
function palindrome(myString) {
  // FOR loop
  length = myString.length;
  backwardsResult = [];
  for (var i = 0; i < length; i++) {
    // console.log(myString[i], myString[length - 1 - i]);
    if (myString[i] == myString[length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(palindrome("schedule"));

for (var j = 0; j < 5; j++) {
  var str = "";
  for (var i = 0; i < 5; i++) {
    str += "$";
  }
  console.log(str);
}
