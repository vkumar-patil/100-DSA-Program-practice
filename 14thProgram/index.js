//19. Longest common prefix of strings in an array

let strs = ["flower", "flow", "flight"];
if (strs.length === 0) console.log("");
let prefix = strs.reduce((acc, str) => {
  while (str.indexOf(acc) !== 0) {
    acc = acc.slice(0, -1);
  }
  return acc;
});
console.log(prefix);
