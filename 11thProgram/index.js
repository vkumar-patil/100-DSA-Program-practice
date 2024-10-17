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
