function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMostZeroIdx;

  if (arr[arr.length - 1] === 1) return 0;
  if (arr[0] === 0) return arr.length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === 1) {
      if (arr[middle + 1] == 0) {
        leftMostZeroIdx = middle + 1;
        break;
      }
      left = middle + 1
    }
    else if (arr[middle] === 0) {
      leftMostZeroIdx = middle;
      right = middle - 1;
    }
  }

  return arr.length - leftMostZeroIdx;
}

module.exports = countZeroes

