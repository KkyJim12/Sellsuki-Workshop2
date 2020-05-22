let arr = [
  "DAYO",
  "AOYD",
  "YODA",
  "DOYA",
  "OCRTRA",
  "TRORCA",
  "AOTRCR",
  "GUPB",
  "UBPG",
  "GINU",
  "NUIG",
  "TAIKA",
];
let result = {};
arr.forEach((e) => {
  let word = e.split("").sort().join("");
  if (result[word]) {
    result[word].push(e);
  } else {
    result[word] = [e];
  }
});

let last = Object.values(result);

console.log(last);
