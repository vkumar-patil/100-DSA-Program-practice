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

let i = [1, 2, 3, 4, 5, 7, 8];
let j = [1, 2, 3, 4, 11, 12, 13, 14];
let k = [...new Set([...i, ...j])];
let l = i.filter((x) => j.includes(x));
console.log(k, l);

let m = [1, 2, 3, 4, 5, 6];
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let o = [...new Set([...m, n])];
let p = m.filter((x) => n.includes(x));
console.log(o, p);

let q = [1, 2, 3, 4, 5, 6, 7];
let r = [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15];
let s = [...new Set([...q, ...r])];
let t = q.filter((x) => r.includes(x));
console.log(s, t);

u = [1, 2, 3, 4, 5, 6, 7, 8, 9];
v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
w = [...new Set([...u, ...v])];
x = u.filter((x) => v.includes(x));
console.log(w, x);

y = [1, 2, 3, 4];
z = [1, 2, 3, 4, 5, 6, 7];
aa = [...new Set([...y, ...z])];
bb = y.filter((x) => z.includes(x));
console.log(aa, bb);
