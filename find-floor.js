function findFloor(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let floor;
  if (arr[left] > val) {
    return -1;
  }
  else if (arr[right] <= val) {
    return arr[right];
  }

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      return arr[middle];
    }
    else if (arr[middle] < val) {
      floor = arr[middle];
      left = middle + 1;
    }
    else {
      right = middle - 1;
    }
  };

  return floor;
}

module.exports = findFloor

