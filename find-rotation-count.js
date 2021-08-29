function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle - 1] > arr[middle]) {
      return middle;
    }
    else if (arr[middle + 1] < arr[middle]) {
      return middle + 1;
    }
    else if (arr[left] > arr[middle]) {
      right = middle - 1;
    }
    else if (arr[right] < arr[middle]) {
      left = middle + 1;
    }
    else {
      return 0;
    }
  }
}

module.exports = findRotationCount;
