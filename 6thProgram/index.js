//7. Merge two sorted arrays

let a = [1, 3, 5];
let b = [2, 4, 6];
const c = a.concat(b).sort((x, y) => x - y);
console.log(c);

let d = [1, 2, 3, 4, 5];
let e = [7, 3, 24, 5, 6, 7, 8, 9];
const f = d.concat(e).sort((x, y) => x - y);
console.log(f);
