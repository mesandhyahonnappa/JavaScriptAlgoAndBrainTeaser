// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("");
}

// function reverse(str) {
//   let reverseString = "";
//   for (const character of str) {
//     reverseString = character + reverseString;
//   }
//   return reverseString;
// }

// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

module.exports = reverse;
