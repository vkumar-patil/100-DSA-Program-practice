//14. Check if two strings are anagrams

let s1 = "listen",
  s2 = "silent";
let sortedS1 = s1.split("").sort().join("");
let sortedS2 = s2.split("").sort().join("");
console.log(sortedS1 === sortedS2);


let t1 = "listen",
  t2 = "silent";
let tortedS1 = t1.split("").sort().join("");
let tortedS2 = t2.split("").sort().join("");
console.log(sortedS1 === sortedS2);


//15. Count the number of vowels and consonants in a string

let s = "hello world";
let vowels = s.match(/[aeiou]/gi)?.length || 0;
let consonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log("Vowels:", vowels, "Consonants:", consonants);