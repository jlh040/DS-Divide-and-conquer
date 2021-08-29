// return the index of the left-most position of val
function leftMostSearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let leftMostIdx;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      leftMostIdx = middle;
      if (arr[middle - 1] !== val) {
        return leftMostIdx;
      }
      right = middle - 1;
    }
    else if (arr[middle] > val) {
      right = middle - 1;
    }
    else {
      left = middle + 1;
    }
  }
  return -1;
}

// return the index of the right-most position of val
function rightMostSearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let rightMostIdx;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      rightMostIdx = middle;
      if (arr[middle + 1] !== val) {
        return rightMostIdx;
      }
      left = middle + 1;
    }
    else if (arr[middle] > val) {
      right = middle - 1;
    }
    else {
      left = middle + 1;
    }
  }
  return -1;
}

function sortedFrequency(arr, val) {
  let leftIdx = leftMostSearch(arr, val);
  let rightIdx = rightMostSearch(arr, val);

  if (leftIdx < 0 || rightIdx < 0) return -1;

  return (rightIdx - leftIdx) + 1;
}

module.exports = sortedFrequency
