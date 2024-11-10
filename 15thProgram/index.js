// 20. Longest palindromic substring
const s = "babab";
function isPalindrome() {
  //return
  const k = s.split("").reverse().join("");
  if (s === k) {
    console.log("ispallendram");
  } else {
    console.log("not a pallendram");
  }
}

isPalindrome();
// function longestPalindrome(s) {
//   let maxPalin = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let substr = s.slice(i, j);
//       if (isPalindrome(substr) && substr.length > maxPalin.length) {
//         maxPalin = substr;
//       }
//     }
//   }
//   return maxPalin;
// }
// console.log(longestPalindrome("babad"));
