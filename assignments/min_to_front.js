// Given an array of comparable values,
//move the lowest element to array’s front
// shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
var arr = [4, 2, 1, 3, 5];
// first we have to find the lowest value of the array
function minToFront(array) {
  var startIndex = 0;
  // then we have to create a FOR loop that will go through the array
  // we are going to have to start the for loop at 1 instead of 0 since we are comparing each number to the start index
  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[startIndex]) {
      // overwrite startIndex with new index that has a lower value
      startIndex = i;
    }
  }
  // for loop is going to start at whatever index has the lowest value
  // then it's going to go until the index reaches 0
  // during each loop, it's going to move that
  for (var i = startIndex; i > 0; i--) {
    var temp = array[i];
    // the index that currently holds the lowest value is now going to equate to the value of the number before it
    array[i] = array[i - 1];
    // now that number is going to equate to the temp value
    array[i - 1] = temp;
  }
  // this will move the numbers after the array[index with lowest value] to the front without looping through the entire array
  return array;
}
console.log(minToFront(arr));
