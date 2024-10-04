// 3. Find the kth largest and kth smallest element in an array

let k = 2;
const arr = [22, 5, 7, 1, 79];

arr.sort((a, b) => a - b);
console.log(arr[k - 1], arr[arr.length - k]);

let l = 5;
const abc = [14, 22, 1, 33, 12, 20];
abc.sort((a, b) => a - b);
//console.log(abc);
console.log("ans:",abc[l - 1], abc[abc.length - l]);

let m = 3;
const def = [20, 1, 4, 44, 70, 2, 4, 6];
def.sort((a,b)=>a-b);
//console.log(def);
(box = def[m - 1]),
boxex= def[def.length - m];
console.log(box)
console.log(boxex)

let o=2;
const ghi=[28,44,1,33,42,12,50,55,11,12,22]
ghi.sort((a,b)=>a-b)
console.log(ghi[o-1],ghi[ghi.length-o])