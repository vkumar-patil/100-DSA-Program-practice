// 3. Find the kth largest and kth smallest element in an array

let k = 2;
const arr = [22, 5, 7, 1, 79];

arr.sort((a, b) => a - b);
console.log(arr[k - 1], arr[arr.length - k]);

let l = 5;
const abc = [14, 22, 1, 33, 12, 20];
abc.sort((a, b) => a - b);
//console.log(abc);
console.log("ans:", abc[l - 1], abc[abc.length - l]);

let m = 3;
const def = [20, 1, 4, 44, 70, 2, 4, 6];
def.sort((a, b) => a - b);
//console.log(def);
(box = def[m - 1]), (boxex = def[def.length - m]);
console.log(box);
console.log(boxex);

let o = 2;
const ghi = [28, 44, 1, 33, 42, 12, 50, 55, 11, 12, 22];
ghi.sort((a, b) => a - b);
console.log(ghi[o - 1], ghi[ghi.length - o]);

let p = 12;
const ijk = [12, 22, 12, 5, 6, 8, 9, 90, 6, 7, 22, 123, 56, 789, 900, 45, 55];
ijk.sort((a, b) => a - b);
console.log(ijk[p - 1], ijk[ijk.length - p]);

q = 3;
const lmn = [20, 12, 32, 33, 40, 90, 100, 102, 103, 104, 166, 700];
lmn.sort((a, b) => a - b);
console.log(lmn[q - 1], lmn[lmn.length - q]);

r = 4;
const opq = [28, 495, 92, 383, 484, 3, 33, 5, 20, 92, 90];
opq.sort(a, (b) => a - b);
console.log(opq[r - 1], opq[opq.length - r]);

s = 5;
const rst = [78, 9, 23, 45, 67, 8, 90, 6, 6, 6, 78, 89, 23, 35, 67, 90];
rst.sort((a, b) => a - b);
console.log(rst[s - 1], rst[rst.length - s]);

t = 6;
const uvw = [76, 99, 80, 30, 40, 20, 10, 40, 77, 44, 99, 20];
uvw.sort((a, b) => a - b);
console.log(uvw[t - 1], uvw[uvw.length - t]);
u = 7;
const xyz = [23, 55, 20, 110, 30, 20, 25, 70];
xyz.sort((a, b) => a - b);
console.log(xyz[u - 1], xyz[xyz.length - 1]);

v = 8;
const zab = [34, 90, 87, 90, 67, 84, 55, 34, 50];
zab.sort((a, b) => a - b);
console.log(zab[v - 1], zab[zab.length - 1]);

w = 9;
bcd = [20, 30, 40, 50, 10, 33, 50, 65, 80, 23, 70];
bcd.sort((a, b) => a - b);
console.log(bcd[w - 1], bcd[bcd.length - w]);
