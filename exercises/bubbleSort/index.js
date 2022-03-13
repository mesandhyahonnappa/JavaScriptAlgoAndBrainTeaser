function sort(arr) {
  let hasSwapped = false;
  for (i = arr.length; i > 0; i--) {
    hasSwapped = false;
    for (j = 0; j < i - 1; j++) {
      //console.log(`${arr[j]} > ${arr[j+1]} - ${arr[j]>arr[j+1]}`);
      if (arr[j] > arr[j + 1]) {
        hasSwapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(arr);
      }
    }
    if (hasSwapped === false) {
      break;
    }
  }
  return arr;
}

module.exports = sort;

// sort([3, 0, 1, 10, 5, 2, 4, 12]);
