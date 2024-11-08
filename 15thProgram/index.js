// 20. Longest palindromic substring

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}
function longestPalindrome(s) {
  let maxPalin = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.slice(i, j);
      if (isPalindrome(substr) && substr.length > maxPalin.length) {
        maxPalin = substr;
      }
    }
  }
  return maxPalin;
}
console.log(longestPalindrome("babad"));
