// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the cha  racters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToInt(s) {
  // list out key pair values with roman numerals and their value as an object
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // we'll need a variable that will hold our result value since we'll be returning this at the end of our function
  let result = 0;

  // now, we need to create a for loop that loops through our 'roman' object
  for (let i = 0; i < s.length; i++) {
    // we need to create a variable that holds our current roman numeral and the next roman numeral
    let current = roman[s[i]];
    let next = roman[s[i + 1]];

    // since number that are not divisible by 5 use subtraction, we need to check if the current value is less than the next value
    if (current < next) {
      // if so, we need our add the total (of our next value subtracted by our current value) to our result
      result += next - current;
      //   we then increase our index ('i') by 1 since we are essentially skipping the next value since we have already taken the current and next value into account
      i++;
    } else {
      // if our current value is more than our next value, we will just add our current value to our result
      result += current;
    }
  }
  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// LONGEST COMMON PREFIX

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  // we will also need to create a for loop that will run the full length of our strs[0] string
  for (let i = 0; i < strs[0].length; i++) {
    // during our for loop, we will need to compare strs[0][i] to the next string index of i
    for (
      let nextStringIndex = 1;
      nextStringIndex < strs.length;
      nextStringIndex++
    ) {
      // if i is greater than the next word's length OR if the next word's current char doesn't match the strs[0][i]...
      if (
        i >= strs[nextStringIndex].length ||
        strs[nextStringIndex][i] !== strs[0][i]
      ) {
        // we'll return our current reference string from the starting point of 0 until the endpoint of our current 'i' value
        return strs[0].substring(0, i);
      }
    }
  }

  // if we haven't returned inside the loop, that means that the entire strs[0] string is a common prefix, therefore we will return strs[0]
  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
