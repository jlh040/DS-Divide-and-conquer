function findRotatedIndex(arr, val) {
  let left;
  let right;
  let middle = Math.floor((arr.length - 1) / 2);
  if (val === arr[middle]) {
    return middle;
  }
  else if (val <= arr[arr.length - 1]) {
    left = middle + 1;
    right = arr.length - 1
  }
  else {
    left = 0;
    right = middle - 1;
  }

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    }
    else if (arr[middle] < val) {
      left = middle + 1;
    }
    else {
      right = middle - 1;
    }
  }

  return -1;
}

module.exports = findRotatedIndex