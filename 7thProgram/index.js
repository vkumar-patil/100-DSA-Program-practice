// 8. Find the intersection and union of two arrays

//let a = [1, 2, 3];
//let b = [2, 3, 4];
//let union = [...new Set([...a, ...b])];
//let intersection = a.filter(x => b.includes(x));
//console.log("Union:", union, "Intersection:", intersection);

let a = [1, 2, 3, 4];
let b = [1, 4, 5, 6];
let union = [...new Set([...a, ...b])];
console.log(union);

const c = [2, 3, 4, 5, 6];
const d = [1, 2, 3, 4, 56];
const unani = [...new Set([...c, ...d])];
const zz = unani.sort((a, b) => a - b);
const intersection = c.filter((x) => d.includes(x));
console.log(zz, intersection);

const e = [1, 2, 3, 3, 4, 4, 5];
const f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const g = [...new Set([...e, ...f])];
const h = e.filter((x) => f.includes(x));
console.log(g, h);
