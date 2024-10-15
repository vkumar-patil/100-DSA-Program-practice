//9. Rearrange an array in alternating positive and negative items
// let arr = [-1, 2, -3, 4, -5, 6];
// let pos = arr.filter((x) => x > 0);
// let neg = arr.filter((x) => x < 0);
// let res = [];
// for (let i = 0; i < Math.max(pos.length, neg.length); i++) {
//   if (pos[i] !== undefined) res.push(pos[i]);
//   if (neg[i] !== undefined) res.push(neg[i]);
// }
// console.log(res);

let arrr = [-1, 2, -3, 4, -5, 6];
res = [];
let positive = arrr.filter((x) => x > 0);
let nigative = arrr.filter((x) => x < 0);
for (i = 0; i < Math.max(positive.length, nigative.length); i++) {
  if (positive[i] !== undefined) res.push(positive[i]);
  if (nigative[i] !== undefined) res.push(nigative[i]);
  console.log(res);
}
