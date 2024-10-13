// 8. Find the intersection and union of two arrays
//8. Find the intersection and union of two arrays

let a = [1, 2, 3];
let b = [2, 3, 4];
let union = [...new Set([...a, ...b])];
let intersection = a.filter(x => b.includes(x));
console.log("Union:", union, "Intersection:", intersection);