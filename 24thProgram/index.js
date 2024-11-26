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
    console.log("".repeat(roww - i) + "*".repeat(1 * i - 1));
  }
}
print(7);
