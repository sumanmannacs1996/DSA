// Binary search
function binarySearchRecursion(list, value, start = 0, end = list.length - 1) {
  if (start > end) return false;
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] === value) return true;
  else if (list[mid] > value)
    return binarySearchRecursion(list, value, start, mid - 1);
  else if (list[mid] < value)
    return binarySearchRecursion(list, value, mid + 1, end);
}

console.log(binarySearchRecursion([10, 20, 30, 40, 50, 60, 70, 80, 90], 20));

// Get the First Indes Of An Elemnet Of a Sotred List
function getFirstIndexRecursion(list, value, start = 0, end = list.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] === value) {
    if (mid === 0 || list[mid - 1] !== value) return mid;
    return getFirstIndexRecursion(list, value, start, mid - 1);
  } else if (list[mid] > value) {
    return getFirstIndexRecursion(list, value, start, mid - 1);
  } else if (list[mid] < value) {
    return getFirstIndexRecursion(list, value, mid + 1, end);
  }
}

console.log(getFirstIndexRecursion([3, 4, 4, 4, 4, 4, 5, 6], 4));

// Get the Last Indes Of An Elemnet Of a Sotred List
function getLastIndexRecursion(list, value, start = 0, end = list.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] === value) {
    if (mid === list.length - 1 || list[mid + 1] !== value) return mid;
    return getLastIndexRecursion(list, value, mid + 1, end);
  } else if (list[mid] > value) {
    return getLastIndexRecursion(list, value, start, mid - 1);
  } else if (list[mid] < value) {
    return getLastIndexRecursion(list, value, mid + 1, end);
  }
}

console.log(getLastIndexRecursion([3, 4, 4, 4, 4, 4, 4, 5], 4)); // 6

// Find the number of repeated item in a sorted list
function getNumberOfRepeatedItemsRecursion(list, value) {
  const firstIndex = getFirstIndexRecursion(list, value);
  const lastIndex = getLastIndexRecursion(list, value);
  if (firstIndex === -1 || lastIndex === -1) return 0;
  else return lastIndex - firstIndex + 1;
}

console.log(getNumberOfRepeatedItemsRecursion([3, 4, 4, 4, 4, 4, 4, 5], 4)); // 6

// Find the missing elment on a sorted list each incrimented by 1
function findMissingElemnetRecursion(list, start = 0, end = list.length - 1) {
  if (start > end) return list[list.length - 1] + 1;
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] !== list[0] + mid) {
    if (list[mid - 1] === list[0] + mid - 1) return list[mid] - 1;
    return findMissingElemnetRecursion(list, start, mid - 1);
  } else {
    return findMissingElemnetRecursion(list, mid + 1, end);
  }
}

console.log(findMissingElemnetRecursion([10, 11, 12, 13, 15, 16, 17, 18, 19])); // 14

// pick mountain
// list[i] < list[i+1] left
// list[i] > list[i+1] right
// list[i] > list[i+1] && list[i] > list[i-1] pick

function peakIndexInMountainArrayRecursion(
  list,
  start = 0,
  end = list.length - 1
) {
  if (start >= end) return list[start];
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] < list[mid + 1]) {
    return peakIndexInMountainArrayRecursion(list, mid + 1, end);
  } else {
    return peakIndexInMountainArrayRecursion(list, start, mid);
  }
}

console.log(
  peakIndexInMountainArrayRecursion([10, 20, 30, 90, 70, 60, 50, 40])
);
// Alternative
function getPickIndexOfAMountainArray(list, start = 0, end = list.length - 1) {
  if (start > end) return;
  const mid = Math.floor(start + (end - start) / 2);
  if (list[mid] > list[mid - 1] && list[mid] > list[mid + 1]) return mid;
  else if (list[mid] > list[mid - 1]) return getPickIndexOfAMountainArray(list, mid + 1, end);
  else if (list[mid] > list[mid + 1]) return getPickIndexOfAMountainArray(list, start, mid - 1);
}

console.log(getPickIndexOfAMountainArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 60, 50, 40]));

// find pivit elemnet in a rotated sorted array
function findPivitElementIndex(list, start = 0, end = list.length - 1) {
  if (start > end) return;
  const mid = Math.floor(start + (end - start) / 2);
  if (start === end) return start;
  else if (list[mid] < list[mid - 1]) return mid - 1;
  else if (list[mid] > list[mid + 1]) return mid;
  else if (list[mid] < list[0]) return findPivitElementIndex(list, start, mid - 1);
  else return findPivitElementIndex(list, mid + 1, end);
}

console.log(findPivitElementIndex([12, 14, 16, 2, 4, 6, 8, 10]));

// find the index of an elemnet in a rotated sorted array
function getInexInSortedRotatedList(list, item) {
  const pivotIndex = findPivitElementIndex(list);
  if (item === list[pivotIndex]) return pivotIndex;
  else if (list.length === 1 && item !== list[pivotIndex]) return -1;
  else if (item >= list[0] && item <= list[pivotIndex]) {
    return binarytSearch(list, item, 0, pivotIndex - 1);
  } else {
    return binarytSearch(list, item, pivotIndex + 1, list.length - 1);
  }
}

console.log(getInexInSortedRotatedList([12, 14, 16, 2, 4, 6, 8, 10], 6)); // 5
console.log(getInexInSortedRotatedList([1, 3], 4)); // 0
