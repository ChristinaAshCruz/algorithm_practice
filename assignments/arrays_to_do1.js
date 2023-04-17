// PUSH FRONT
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
var arr = [1, 2, 2, 3, 4];
var newValue = 7;
function push(array, value) {
  // open an empy list to pour new values into
  // in new array, we want the index of number to increment by 1
  // for example, arr[0] will now be newArr[1]
  var tempArr = [];
  // adding the value we want to the array first (before adding array's current numbers)
  tempArr.push(value);
  // now we need to loop through array through a for loop
  for (var i = 0; i < array.length; i++) {
    // push the value of array[i] to the temporary arry
    tempArr.push(array[i]);
  }
  // overwrite  array to temporary array
  array = tempArr;
  return array;
}

console.log(push(arr, newValue));

// POP FRONT
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
var arr = [1, 2, 3, 4, 5];
function removeAndReturn(array) {
  // store first value of array in a new variable
  // we need this to be able to return the value that was removed
  var removedValue = 0;
  // set removedValue to array[0]
  removedValue = array[0];
  // we need to also make an empty temp list to hold the new array values
  // we would need to do this since we need to remove the value at the beginning of the array
  var tempList = [];
  // we now need a for loop that will store the needed values
  // since we are removing the first value, the loop will start at array[1] instead of array[0], therefore leaving that value out of the new array
  for (var i = 1; i < array.length; i++) {
    tempList.push(array[i]);
  }
  array = tempList;

  return "Removed Value:" + removedValue + "; New array: [" + array + "]";
}
console.log("Original array: [" + arr + "]");
console.log(removeAndReturn(arr));

//INSERT AT
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// you're given: array, index, additional value
// insert value into array at given index

var arr = [1, 2, 3, 4, 5];
var indexGiven = 3;
var valueGiven = 10;
function insertAt(array, index, value) {
  // we need to create a tempArray to store our new values
  // we'll use this to ovewrite the array (that is being passed) later on
  var tempList = [];
  // now we need to loop through the array and add those values into our tempList
  for (var i = 0; i < array.length; i++) {
    // if the i (index) equates to the index being given, we are now going to add the new value into the list instead
    if (i == index) {
      tempList.push(value);
      // then we add the new value of the old array to tempList
      tempList.push(array[i]);
    } else {
      tempList.push(array[i]);
    }
  }
  array = tempList;
  return "New array:[" + array + "]";
}
console.log("Original array: [" + arr + "]");
console.log("Index: " + indexGiven);
console.log("Value: " + valueGiven);
console.log(insertAt(arr, indexGiven, valueGiven));
