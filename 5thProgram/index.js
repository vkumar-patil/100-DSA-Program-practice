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

//5. Rotate an array to the left by d positions

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;
let rotetedArray = arr.slice(d).concat(arr.slice(0, d));
console.log(rotetedArray);

let arrr = [2, 3, 4, 5, 6, 7, 8, 9];
let e = 3;
let roteArray = arrr.slice(e).concat(arrr.slice(0, e));
console.log(roteArray);

let arrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 23, 45, 6, 7, 89, 90];
let f = 5;
let rote = arrrr.slice(f).concat(arrrr.slice(0, f));
console.log(rote);

let brr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let g = 6;
let r = brr.slice(g).concat(brr.slice(0, g));
console.log(r);

let brrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let h = 1;
let s = brrr.slice(h).concat(brrr.slice(0, h));
console.log(s);

let brrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let i = 4;
let t = brrrr.slice(i).concat(brrrr.slice(0, i));
console.log(t);

let crrr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];
let j = 8;
let u = crrr.slice(j).concat(crrr.slice(0, j));
console.log(u);

let err = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let k = 3;
let v = err.slice(k).concat(err.slice(0, k));
console.log(v);

// 1. Find the largest and smallest element in an array
const zrr = [16, 5, 8, 10, 65, 3, 77];
let vijay = Math.min(...zrr);
let ajay = Math.max(...zrr);
let narsing = ` ${vijay},${ajay}  `;
console.log(narsing);
//console.log(Math.min(...zrr), Math.max(...zrr));
//2. Reverse an array
1;
const zz = [1, 43, 8, 90, 900, 55, 70, 210, 100];
let patil = zz.reverse();
console.log(patil);

// 3. Find the kth largest and kth smallest element in an array

let zzz = 2;
const ar = [22, 5, 7, 1, 79];
ar.sort((a, b) => a - b);
console.log(ar[zzz - 1], ar[ar.length - zzz]);

//l; //et result=(ar[zzz-1] ,ar[ar.length-zzz])
//console.log(result)
//4. Find the frequency of each element in an array
let xr = [1, 2, 3, 4, 2, 6, 2, 7, 9];
let frequency = {};
xr.forEach((e) => (frequency[e] = (frequency[e] || 0) + 1));
console.log(frequency)