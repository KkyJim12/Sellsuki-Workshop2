let s = "(es(taw(era)hou)ika)";

function reverse1(s) {
  if (s.includes("(")) {
    return reverse1(reverse2(s));
  } else {
    return s;
  }
}

function reverse2(s) {
  let regexp = /\(([^()]*)\)/i;
  let word = regexp.exec(s)[1];
  word = word.split("").reverse().join("");
  return s.replace(regexp, word);
}

console.log(reverse1(s));
