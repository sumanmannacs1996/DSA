// binary search

function isElemnetPresentUsingBinarySearch(list, value) {
  function searchLogic(list, start, end, value) {
    const mid = Math.floor(start + (end - start) / 2);
    // const mid = Math.floor((start + end) / 2);
    if (list[mid] === value) return true;
    else if (start >= end) return false;
    else if (value > list[mid]) return searchLogic(list, mid + 1, end, value);
    else if (value < list[mid]) return searchLogic(list, start, mid - 1, value);
  }
  const start = 0;
  const end = list.length - 1;
  return searchLogic(list, start, end, value);
}

console.log(
  isElemnetPresentUsingBinarySearch([10, 20, 30, 40, 50, 60, 70, 80], 60)
);

// Find the index first occurance of the number in a sorted array

function getFirstOccuranceUsingBinarySearch(list, value) {
  function searchLogic(list, start, end, value) {
    const mid = Math.floor(start + (end - start) / 2);
    // const mid = Math.floor((start + end) / 2);
    if (list[mid] === value) {
      if (mid === 0 || list[mid - 1] !== value) return mid;
      return searchLogic(list, start, mid - 1, value);
    } else if (start >= end) return -1;
    else if (value > list[mid]) return searchLogic(list, mid + 1, end, value);
    else if (value < list[mid]) return searchLogic(list, start, mid - 1, value);
  }
  const start = 0;
  const end = list.length - 1;
  return searchLogic(list, start, end, value);
}

console.log(
  getFirstOccuranceUsingBinarySearch([10, 20, 30, 30, 30, 30, 40, 50], 30)
);
console.log(
  getFirstOccuranceUsingBinarySearch([30, 30, 30, 30, 30, 30, 40, 50], 30)
);

function getFirstOccuranceUsingBinarySearch2(
  list,
  value,
  start = 0,
  end = list.length - 1
) {
  if (start > end) return -1;

  const mid = Math.floor(start + (end - start) / 2);
  //   const mid = Math.floor((start + end) / 2);

  if (list[mid] === value) {
    if (mid === 0 || list[mid - 1] !== value) return mid;
    return getFirstOccuranceUsingBinarySearch2(list, value, start, mid - 1);
  } else if (value > list[mid]) {
    return getFirstOccuranceUsingBinarySearch2(list, value, mid + 1, end);
  } else if (value < list[mid]) {
    return getFirstOccuranceUsingBinarySearch2(list, value, start, mid - 1);
  }
}

console.log(
  getFirstOccuranceUsingBinarySearch2([10, 20, 30, 30, 30, 30, 40, 50], 30)
);

console.log(
  getFirstOccuranceUsingBinarySearch2([30, 30, 30, 30, 30, 30, 40, 50], 30)
);

// find the index of last occurance using binary search

function getLastOccuranceUsingBinarySearch(
  list,
  value,
  start = 0,
  end = list.length - 1
) {
  if (start > end) return -1;
  const mid = Math.floor(start + (end - start) / 2);
  // const mid = Math.floor((start + end) / 2);
  if (list[mid] === value) {
    if (mid === list.length - 1 || list[mid + 1] !== value) return mid;
    return getLastOccuranceUsingBinarySearch(list, value, mid + 1, end);
  } else if (value > list[mid]) {
    return getLastOccuranceUsingBinarySearch(list, value, mid + 1, end);
  } else if (value < list[mid]) {
    return getLastOccuranceUsingBinarySearch(list, value, start, mid - 1);
  }
}

console.log(
  getLastOccuranceUsingBinarySearch([30, 30, 30, 30, 30, 30, 40, 50], 30)
);

console.log(
  getLastOccuranceUsingBinarySearch([30, 30, 30, 30, 30, 30, 30, 30], 30)
);

console.log(
  getLastOccuranceUsingBinarySearch([30, 30, 30, 30, 30, 30, 30, 30], 40)
);

// get the total number of occurance

function getTotalOccurance(list, value) {
  const firstOccuranceIndex = getFirstOccuranceUsingBinarySearch2(list, value);
  const lastOcccuranceIndex = getLastOccuranceUsingBinarySearch(list, value);
  if (firstOccuranceIndex !== -1 && lastOcccuranceIndex !== -1)
    return lastOcccuranceIndex - firstOccuranceIndex + 1;
  else return 0;
}

console.log(getTotalOccurance([30, 30, 30, 30, 30, 30, 30, 30], 30));
console.log(getTotalOccurance([30, 30, 30, 30, 30, 30, 30, 30], 40));

// find the missing element from a continus list

function getMissingElement(list, start = 0, end = list.length - 1) {
  if (start > end) return list[list.length - 1] + 1;
  const mid = Math.floor(start + (end - start) / 2);

  if (list[mid] !== list[0] + mid) {
    if (mid === 0 || list[mid - 1] === list[0] + mid - 1) return list[mid] - 1;
    return getMissingElement(list, start, mid - 1);
  } else {
    return getMissingElement(list, mid + 1, end);
  }
}

console.log(getMissingElement([1, 2, 3, 4, 6, 7, 8, 9]));
console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));
