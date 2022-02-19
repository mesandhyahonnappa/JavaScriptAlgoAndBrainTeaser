// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowel = ["a", "e", "i", "o", "u"]; //"aeiou"; // ["a", "e", "i", "o", "u"]; //
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

// function vowels(str) {
//   const vowel = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;
//   const strArray = str.toLowerCase().split("");
//   for (let char of vowel) {
//     for (let inputChr of strArray) {
//       if (inputChr === char) {
//         vowelCount++;
//       }
//     }
//   }
//   return vowelCount;
// }

module.exports = vowels;
