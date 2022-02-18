// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let printString = "";
  for (i = 1; i <= n; i++) {
    printString = i;
    if (i % 3 === 0 && i % 5 === 0) {
      printString = "fizzbuzz";
    } else if (i % 3 === 0) {
      printString = "fizz";
    } else if (i % 5 === 0) {
      printString = "buzz";
    }
    console.log(printString);
  }
}

module.exports = fizzBuzz;
