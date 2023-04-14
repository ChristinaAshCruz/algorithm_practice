var isPalindrome = function (x) {
  // sort backwards and compare
  // loop through number
  // can convert number to an array
  // can conver number to a string

  let string = String(x);
  let start = 0;
  let end = string.length - 1;

  // having two pointers
  while (start < end) {
    if (string[start] == string[end]) {
      start++;
      end--;
    } else {
      console.log("This is not a palindrome 😕");
      return false;
    }
  }
  return true;
};

// time complexity = O(N)
// only going through the loop once
// don't have to go through it a certain amount of times or repeatedly
