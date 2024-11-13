// 3. Find the largest of two numbers
const a = 45;
const b = 68;
function findLargest(a, b) {
  return a > b ? a : b;
}
console.log(findLargest(a, b));

const c = 267;
const d = 320;
function larg(c, d) {
  return c > d ? c : d;
}
console.log(larg(c, d));

// 4. Find the smallest of three numbers

function findSmallest(a, b, c) {
  return Math.min(a, b, c);
}
console.log(findSmallest(a, b, c));
const e = 768;
const f = 478;
const g = 6948;
function smallest(e, f, g) {
  return Math.min(e, f, g);
}
console.log(smallest(e, f, g));
