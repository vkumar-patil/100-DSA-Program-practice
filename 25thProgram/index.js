// 21. Find the GCD of two numbers
const a = 20;
const b = 30;
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(a, b));

const c = 50;
const d = 80;
function gcd(c, d) {
  return d == 0 ? c : gcd(d, c % d);
}
console.log(gcd(c, d));

// 22. Find the LCM of two numbers

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(a, b));

// 23. Sum of all even numbers in an array
const arr = [1, 2, 3, 4, 5, 6];
function sumEven(arr) {
  return arr.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log(sumEven(arr));

const brr = [1, 2, 3, 4, 5, 6];
function num(brr) {
  return brr.filter((m) => m % 2 !== 0).reduce((a, b) => a + b, 0);
}
console.log(num(brr));

// // 32. Sort an array in ascending order
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAscending(arr));

// 33. Sort an array in descending order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortDescending(arr));

// 37. Find the square root of a number
function squareRoot(num) {
  return Math.sqrt(num);
}
console.log(squareRoot(60));

// 38. Convert decimal to binary
function decimalToBinary(num) {
  return num.toString(2);
}
