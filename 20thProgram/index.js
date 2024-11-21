const str = "avand";
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels(str));

const arr = [1, 2, 3, 4, 5, 6];
const brr = arr.filter((n) => n % 2 === 0);
console.log(brr);
