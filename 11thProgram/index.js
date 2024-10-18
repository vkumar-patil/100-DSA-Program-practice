// 12. Check if a string is a palindrome
let s = "madam";
let ss = s.split("").reverse("").join("");
console.log(s === ss);

let t = "vijay";
console.log(t === t.split("").reverse().join(""));

// 13. Find all permutations of a string
// function permute(str) {
//     if (str.length < 2) return [str];
//     let permutations = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let remainingStr = str.slice(0, i) + str.slice(i + 1);
//         for (let subPermute of permute(remainingStr)) {
//             permutations.push(char + subPermute);
//         }
//     }
//     return permutations;
// }
// console.log(permute("abc"));

function parmute(str) {
  if (str.length < 2) return [str];
  let permutations = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let riminingstr = str.slice(0, i) + str.slice(i + 1);
    for (let subPermute of parmute(riminingstr)) {
      permutations.push(char + subPermute);
    }
  }
  return permutations;
}
console.log(parmute("abc"));

function premute(str) {
  if (str < 2) return str;
  const permtetion = [];
  for (i = 0; i < str.length; i++) {
    const char = str[i];
  }
  const riminig = str.slice(0, i) + str.slice(i + 1);
  for (let sub of premute(riminig)) {
    permtetion.push(char + sub);
  }
  return permtetion;
}
console.log(premute("def"));

// What the function does:
// The function generates all possible permutations of a given string. A permutation is an arrangement of the characters of a string in every possible order.

// Step-by-step breakdown:
// Base Case:

// If the string length is less than 2 (meaning it's either an empty string or just one character), it simply returns the string as the only possible permutation.
// js
// Copy code
// if (str.length < 2) return [str];
// Recursive Case:

// For longer strings, the function loops through each character of the string.
// js
// Copy code
// for (let i = 0; i < str.length; i++) {
// For each character, it removes that character and generates all the permutations of the remaining string (using recursion).
// js
// Copy code
// let riminingstr = str.slice(0, i) + str.slice(i + 1);
// Recursive Call:

// The function is then called recursively on this remaining string to generate all its permutations.
// js
// Copy code
// for (let subPermute of parmute(riminingstr)) {
// Combine Characters:

// It combines the current character (char) with each permutation of the remaining string (subPermute), and stores the result in the permutations array.
// js
// Copy code
// permutations.push(char + subPermute);
// Return the Result:

// Finally, after looping through all characters and building all permutations, it returns the complete list of permutations.
// Example:
// For the string "abc":

// It will first remove 'a' and generate permutations of "bc" (["bc", "cb"]).
// Then it combines 'a' with each of these ("abc", "acb").
// It does the same for 'b' and 'c'.
// Final result:

// css
// Copy code
// ["abc", "acb", "bac", "bca", "cab", "cba"]
// This is how the function works recursively to generate all possible permutations of the input string.
