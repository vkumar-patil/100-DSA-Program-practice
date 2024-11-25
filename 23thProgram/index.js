// 12. Find the area of a rectangle
const length = 10;
const width = 20;
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(length, width));

// 13. Swap two numbers without using a third variable
let a = 20;
let b = 30;
function swapNumbers(a, b) {
  [a, b] = [b, a];
  return { a, b };
}
// 14. Check if a number is positive or negative
const number = 4;
function isPositiveOrNegative(number) {
  return number >= 0 ? "Positive" : "Negative";
}
console.log(isPositiveOrNegative(number))