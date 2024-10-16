// 10. Find the missing number in an array of 1 to N

let arr = [1, 2, 4, 5];
let n = arr.length + 1;
let sumN = (n * (n + 1)) / 2;
let sumArr = arr.reduce((a, b) => a + b, 0);
console.log(sumN - sumArr);
