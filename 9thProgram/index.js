// 10. Find the missing number in an array of 1 to N

// let arr = [1, 2, 4, 5];
// let n = arr.length + 1;
// let sumN = (n * (n + 1)) / 2;
// let sumArr = arr.reduce((a, b) => a + b, 0);
// console.log(sumN - sumArr);

// let arrr = [1, 2, 3, 5, 6];
// let nn = arrr.lenth + 1;
// let sumNN = (n * (n + 1)) / 2;
// let sumarr = arrr.reduce((a, b) => a + b, 0);
// console.log(sumNN - sumarr);

let br = [1, 2, 3, 4, 5, 6, 8, 9, 10];
let b = br.length + 1;
//console.log(b);
let bmn = (b * (b + 1)) / 2;
//console.log(bmn);
let bum = br.reduce((a, b) => a + b, 0);
//console.log(bum);
console.log(bmn - bum);

let cr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let c = cr.length + 1;
let cum = (c * (c + 1)) / 2;
let com = cr.reduce((a, b) => a + b, 0);
console.log(cum - com);

let dr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
let d = dr.length + 1;
let dm = (d * (d + 1)) / 2;
let dom = dr.reduce((a, b) => a + b, 0);
console.log(dm - dom);

let er = [2, 3, 4, 5, 6, 7, 8];
let e = er.length + 1;
let em = (e * (e + 1)) / 2;
let eom = er.reduce((a, b) => a + b, 0);
console.log(em - eom);

let fr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
let f = fr.length + 1;
let fm = (f * (f + 1)) / 2;
let fom = fr.reduce((a, b) => a + b, 0);
console.log(fm - fom);

let gr = [1, 2, 4, 5, 6, 7, 8];
let g = gr.length + 1;
let gm = (g * (g + 1)) / 2;
let gom = gr.reduce((a, b) => a + b, 0);
console.log(gm - gom);
