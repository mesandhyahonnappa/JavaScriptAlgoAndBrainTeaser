function sort(arr) {
  let hasSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    hasSwapped = false;
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        hasSwapped = true;
      }
    }
    if (hasSwapped) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

module.exports = sort;
