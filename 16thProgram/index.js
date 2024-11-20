// 1. Check if a number is even or odd
const number = 3;
function isEvenOrOdd(number) {
  //return

  console.log(number % 2 === 0 ? "Even" : "Odd");
}
isEvenOrOdd();

const numbers = 4;
function evenorodd() {
  console.log(numbers % 2 === 0 ? "even" : "odd");
}
evenorodd();

const numberr = 5;
function EorO() {
  if (numberr % 2 === true) {
    //return E;
    console.log("E");
  } else {
    //O;
    console.log("o");
  }
}
EorO();

const numberrr = 18;
function EO() {
  if (numberrr % 2 === true) {
    console.log("even ok");
  } else {
    console.log("odd ok");
  }
}
EorO();


//print is the even
// const arr=[1,2,3,4,5]
// const brr=arr.filter(e=>{e %2===0})
// console.log(brr)

const arr = [1, 2, 3, 4, 5];
const evenNumbers = arr.filter(e => e % 2 === 0); // Filter even numbers
console.log(evenNumbers); // Output: