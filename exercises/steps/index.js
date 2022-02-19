// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  // Base
  if (n === row) {
    return;
  }
  // Do something
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  stair += stair.length <= row ? "#" : " ";
  steps(n, row, stair);
}

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let step = "";
//     for (let col = 0; col < n; col++) {
//       step += col <= row ? "#" : " ";
//     }
//     console.log(step);
//   }
// }

// function steps(n) {
//   let index = 0;
//   let str = "";
//   while (index < n) {
//     str += "#";
//     console.log(str.padEnd(n, " "));
//     index++;
//   }
// }

// function steps(n) {
//   let index = 0;
//   let str = "";
//   while (index < n) {
//     str += "#";
//     console.log(str.padEnd(n, " "));
//     index++;
//   }
// }

module.exports = steps;
