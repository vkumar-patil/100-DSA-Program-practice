//14. Check if two strings are anagrams

let s1 = "listen",
  s2 = "silent";
let sortedS1 = s1.split("").sort().join("");
let sortedS2 = s2.split("").sort().join("");
console.log(sortedS1 === sortedS2);