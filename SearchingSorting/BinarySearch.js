// Binary Search
function binarySearch(list, value) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] === value) return true;
    else if (list[mid] > value) end = mid - 1;
    else if (list[mid] < value) start = mid + 1;
  }
  return false;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 50)); // true

// Get the First Indes Of An Elemnet Of a Sotred List
function getFirstIndex(list, value) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] === value) {
      if (mid === 0 || list[mid - 1] !== value) return mid;
      end = mid - 1;
    } else if (list[mid] > value) {
      end = mid - 1;
    } else if (list[mid] < value) {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(getFirstIndex([3, 4, 4, 4, 4, 4, 5, 6], 4)); // 1

// Get the Last Indes Of An Elemnet Of a Sotred List
function getLastIndex(list, value) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] === value) {
      if (mid === list.length - 1 || list[mid + 1] !== value) return mid;
      start = mid + 1;
    } else if (list[mid] > value) {
      end = mid - 1;
    } else if (list[mid] < value) {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(getLastIndex([3, 4, 4, 4, 4, 4, 4, 5], 4)); //6

// Find the number of repeated item in a sorted list
function getNumberOfRepeatedItems(list, value) {
  const firstIndex = getFirstIndex(list, value);
  const lastIndex = getLastIndex(list, value);
  if (firstIndex === -1 || getLastIndex === -1) return 0;
  else return lastIndex - firstIndex + 1;
}

console.log(getNumberOfRepeatedItems([3, 4, 4, 4, 4, 4, 4, 5], 4)); // 6

// Find the missing elment on a sorted list each incrimented by 1
function findMissingElemnet(list) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] !== list[0] + mid) {
      if (list[mid - 1] == list[0] + mid - 1) return list[mid] - 1;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return list[list.length - 1] + 1;
}

console.log(findMissingElemnet([10, 11, 12, 13, 15, 16, 17, 18, 19])); // 14

// pick mountain

// list[i] < list[i+1] left
// list[i] > list[i+1] rigth
// list[i] > list[i+1] && list[i] > list[i-1] pick

function peakIndexInMountainArray(list) {
  let start = 0;
  let end = list.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] > list[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return list[start];
}

console.log(peakIndexInMountainArray([10, 20, 30, 90, 70, 60, 50, 40]));
// alternative
function getPickIndexOfAMountainArray(list) {
  let start = 0,
    end = list.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (list[mid] > list[mid - 1] && list[mid] > list[mid + 1]) return mid;
    else if (list[mid] > list[mid - 1]) start = mid + 1;
    else if (list[mid] > list[mid + 1]) end = mid - 1;
  }
}

console.log(getPickIndexOfAMountainArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 60, 50, 40]));
