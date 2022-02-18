// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkArray = [];
  let index = 0;

  while (index < array.length) {
    chunkArray.push(array.slice(index, index + size));
    index += size;
  }

  return chunkArray;
}

// function chunk(array, size) {
//   let chunkArray = [];
//   for (let element of array) {
//     let last = chunkArray[chunkArray.length - 1];
//     if (!last || last.length === size) {
//       chunkArray.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunkArray;
// }

// function chunk(array, size) {
//   let chunkIndex = 0;
//   let chunkArray = [];
//   for (let i = 0; i < array.length; i = i + size) {
//     let chunk = array.slice(i, chunkIndex + size);
//     chunkIndex = chunkIndex + size;
//     chunkArray.push(chunk);
//   }
//   return chunkArray;
// }

module.exports = chunk;
