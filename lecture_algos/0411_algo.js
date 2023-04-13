// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @param {number[]}
//  */
var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function (nums, target) {
  // memory object
  // map, hashmap, hashtable

  // big 0 solution
  const memoryObj = {
    // will be storying
  };
  // creating a base for loop
  for (let i = 0; i < nums.length; i++) {
    // looking for the difference from the target
    const compliment = target - nums[i];
    // will need 2 conditions (or possible paths)
    // condition 1 : num is the compliment we are looking for
    if (compliment in memoryObj) {
      // is the compliment in the memoryObj??
      // if so, we are going to return the compliment
      return [i, memoryObj[compliment]];
    } else {
      //  condition 2: num is NOT the compliment we are looking for and we need to continue
      // creates new value pair -> value(as key):key(as value)
      memoryObj[nums[i]] = i;
    }
  }

  // brute force solution

  // we have create a function
  // in the function, we need to loop through the array
  // does the current num + num2 = target?
  // if not, does num2 + num = target
  // we need to keep tract of 2 indces
  // in the loop, we need to nest a FOR loop
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // check i and j to see if they're equal to target
      if (nums[i] + nums[j] == target) {
        // i + j -> will be
        // what do we want to do if we find what we are looking for
        return [i, j];
      }
    }
  }
};
