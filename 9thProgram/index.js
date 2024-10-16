// 10. Find the missing number in an array of 1 to N

// let arr = [1, 2, 4, 5];
// let n = arr.length + 1;
// let sumN = (n * (n + 1)) / 2;
// let sumArr = arr.reduce((a, b) => a + b, 0);
// console.log(sumN - sumArr);

// let arrr = [1, 2, 3, 5, 6];
// let nn = arrr.lenth + 1;
// let sumNN = (n * (n + 1)) / 2;
// let sumarr = arrr.reduce((a, b) => a + b, 0);
// console.log(sumNN - sumarr);

let br = [1, 2, 3,4, 5, 6,8,9,10];
let b = br.length + 1;
console.log(b);
let bmn = (b * (b + 1)) / 2;
console.log(bmn);
let bum = br.reduce((a, b) => a + b, 0);
console.log(bum);
console.log(bmn - bum);
