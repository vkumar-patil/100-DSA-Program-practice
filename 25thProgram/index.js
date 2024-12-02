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
