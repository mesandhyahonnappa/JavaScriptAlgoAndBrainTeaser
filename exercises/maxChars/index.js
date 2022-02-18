// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxCharOccurrence(str) {
  let obj = {};
  let maxCount = 0;
  let maxCountChar = "";
  for (const char of str) {
    obj[char] = obj[char] + 1 || 1;
    if (maxCount < obj[char]) {
      maxCountChar = char;
      maxCount = obj[char];
    }
  }
  return maxCountChar;
}

module.exports = maxCharOccurrence;
