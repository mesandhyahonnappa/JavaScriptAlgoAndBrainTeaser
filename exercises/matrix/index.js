// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = [];
  for (let r = 0; r < n; r++) {
    matrix.push([]);
  }
  let count = 1;

  let startRow = (startCol = 0);
  let endRow = (endCol = n - 1);

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = count;
      count++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = count;
      count++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = count;
      count++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = count;
      count++;
    }
    startCol++;
  }
  return matrix;
}

module.exports = matrix;
