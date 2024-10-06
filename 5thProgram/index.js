//i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < 6; ++i) {
  console.log(i);
}

let x = 1;
let y = 2;
let z = 3;

console.log((x + y) * (x - y));
console.log(Math.sqrt(z));
console.log(Math.abs(y / x));

let A = 100.230001;
console.log(A.toFixed(2));

let mid = 5;
let hiht = 50;
let low = 2;
let current = 13;
let found = -1;
if (current < mid) {
  mid = current - low;
} else if (current > mid) {
  mid = current + hiht;
} else {
  found = current;
}
