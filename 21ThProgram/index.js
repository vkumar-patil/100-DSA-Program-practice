// 9. Find the factorial of a number

const n = 10;
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(n));

const o = 11;
function fac(o) {
  return o <= 1 ? 1 : o * fac(o - 1);
}
console.log(fac(o));

const p = 2;
function fectt(p) {
  return p <= 1 ? 1 : p * fectt(p - 1);
}
console.log(fectt(p));
