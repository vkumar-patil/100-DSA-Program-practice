// JavaScript Code for Stars Pattern
function printStars(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
}

printStars(5);

function print(row) {
  for (let i = 1; i <= row; i++) {
    console.log("".repeat(row - i) + "*".repeat(1 * i - 1));
  }
}
print(5);

function print(roww) {
  for (let i = 1; i <= roww; i++) {
    console.log("".repeat(roww - i) + "*".repeat(2 * i - 1));
  }
}
print(7);

function p(r) {
  for (let i = 1; i <= r; i++) {
    console.log(" ".repeat(r + i) + "*".repeat(r - i) + " ".repeat(r - i));
  }
}
p(7);

function q(rof) {
  return rof.split("").reverse().join("");
}
console.log(q("mam"));
// 17. Generate a random number within a range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(10, 20));

// 20. Remove whitespace from a string
const str = "vijay patil";
function removeWhitespace(str) {
  return str.replace(/\s+/g, "");
}
console.log(removeWhitespace(str));
