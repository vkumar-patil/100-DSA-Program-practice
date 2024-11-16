// 5. Sum of digits in a number
const number = 2313456734;
function sumOfDigits(number) {
  return String(number)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumOfDigits(number));

const numbers = 12345;
function sumnum() {
  console.log(
    String(numbers)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
}
sumnum();

const nnumber = 12234;
function suum(nnumber) {
  console.log(
    String(nnumber)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
}
suum(nnumber);
