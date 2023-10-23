// Factorila of a given number
function getFactorial(num) {
  if (num === 0) return 1;
  return num * getFactorial(num - 1);
}
console.log(getFactorial(5)); //120

// Get the pow of a number
function getPow(num, pow) {
  if (pow === 0) return 1;
  return num * getPow(num, pow - 1);
}
console.log(getPow(3, 3)); //27

// Print number from 0
function printNumber(num) {
  if (num < 0) return 0;
  printNumber(num - 1);
  console.log(num);
}
printNumber(5);

// Print number in reverse order
function printReverse(num) {
  if (num < 0) return 0;
  console.log(num);
  printReverse(num - 1);
}
printReverse(5);

// Get the nth number of a fibonnachi serease start from 0
// 0,1,1,2,3,5,8,13,21,34
function getFibStartZero(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  return getFibStartZero(num - 1) + getFibStartZero(num - 2);
}
console.log(getFibStartZero(9)); //34

// Get the nth number of a fibonnachi  serease start from 1
// 1,2,3,5,8,13,21,34,55
function getFibStartOne(num) {
  if (num === 1) return 1;
  else if (num === 2) return 2;
  return getFibStartOne(num - 1) + getFibStartOne(num - 2);
}
console.log(getFibStartOne(9)); // 55
/*
Count the number of ways to reach the nth stairs
you have been given a number of stairs. Initially you are at oth stair, and you need to reach the nth stair.
Each time you can either climb one steps or two steps. you are suppose to return the number of distinct ways
in which you can climb from the 0th step to Nth step.
*/
function countDistinctWaysToClimbStair(num) {
  if (num <= 0) return 0;
  else if (num === 1) return 1;
  else if (num === 2) return 2;
  return (
    countDistinctWaysToClimbStair(num - 1) +
    countDistinctWaysToClimbStair(num - 2)
  );
}
console.log(countDistinctWaysToClimbStair(5));

// Print digits by name
function printDigitByName(num) {
  function getName(n) {
    const arr = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "saven",
      "eight",
      "nine",
    ];
    return arr[n];
  }
  if (num === 0) return "";
  const rem = num % 10;
  //   printDigitByName(Number.parseInt(num / 10));
  //   process.stdout.write(getName(rem) + " ");
  return printDigitByName(Number.parseInt(num / 10)) + getName(rem) + " ";
}
console.log(printDigitByName(123)); // one two three

// Check if the array is sorted or not
function isSorted(arr) {
  if (arr.length === 0 || arr.length === 1) return true;
  else if (arr[0] > arr[1]) return false;
  else {
    return isSorted(arr.slice(1));
  }
}
console.log(isSorted([1, 2, 3, 4, 5, 3])); // false

// Check if the array is sorted or not alternative method
function isSorted1(arr, current = 0) {
  if (arr.length - current <= 1) return true;
  else if (arr[current] > arr[current + 1]) return false;
  else {
    return isSorted1(arr, ++current);
  }
}
console.log(isSorted1([1, 2, 3, 4, 5, 3])); // false
console.log(isSorted1([1, 2, 3, 4, 5])); // true

// get sum of digits of an array
function getSum(arr) {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return arr[0];
  return arr[0] + getSum(arr.slice(1));
}
console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 45

// get sum of digits of an array alternative method
function getSum2(arr, current = 0) {
  if (arr.length === 0) return 0;
  else if (arr.length - current === 1) return arr[current];
  return arr[current] + getSum2(arr, ++current);
}
console.log(getSum2([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 45

// Check if an element present in the array or not
function linierSearch(arr, key) {
  if (arr.length === 0) return false;
  else if (arr[0] === key) return true;
  return linierSearch(arr.slice(1), key);
}
console.log(linierSearch([1, 3, 4, 5, 6, 7, 3], 3));

// Check if an element present in the array or not alternative
function linierSearch2(arr, current, key) {
  if (arr.length - current <= 1) return false;
  else if (arr[current] === key) return true;
  return linierSearch2(arr, ++current, key);
}
console.log(linierSearch2([1, 3, 4, 5, 6, 7, 3], 0, 3));
console.log(linierSearch2([1, 3, 4, 5, 6, 7, 3], 0, 9));

// Binary search
function binarySearch(arr, key) {
  function searchLogic(arr, start, end, key) {
    const mid = start + Math.floor((end - start) / 2); /// very important
    if (arr[mid] === key) return true;
    else if (start > end) return false;
    else if (arr[mid] > key) return searchLogic(arr, start, mid - 1, key);
    else return searchLogic(arr, mid + 1, end, key);
  }

  let start = 0;
  let end = arr.length - 1;
  return searchLogic(arr, start, end, key);
}
console.log(binarySearch([1, 3, 4, 5, 6, 7, 9, 11], 3)); // true
console.log(binarySearch([1, 3, 4, 5, 6, 7, 9, 11], 2)); // false

// String reversal
function revrseString(str, current = 0) {
  if (str === "") return "";
  else if (str.length - current <= 1) return str[current];
  return revrseString(str, current + 1) + str[current];
}
console.log(revrseString("Hello"));

// String reversal another aproach
function reverseString2(str) {
  function reverseArr(arr, s, e) {
    if (s > e) return arr;
    const temp = arr[e];
    arr[e] = arr[s];
    arr[s] = temp;
    ++s;
    --e;
    return reverseArr(arr, s, e);
  }
  const arr = str.split("");
  return reverseArr(arr, (s = 0), (e = arr.length)).join("");
}
console.log(reverseString2("Hello!")); // !olleH

// Check if a staring is palindrom or not
function checkPalindrome(str, s = 0, e = str.length - 1) {
  if (str.length <= 1) return true;
  else if (s > e) return true;
  else if (str[s] !== str[e]) return false;
  return checkPalindrome(str, ++s, --e);
}
console.log(checkPalindrome("Abc01cbA")); // false
console.log(checkPalindrome("Abc0cbA")); // true

// Get pow of a number optmized way
function getOptmizedPow(num, pow) {
  if (pow == 0) return 1;
  if (pow % 2 === 1) {
    const val = getOptmizedPow(num, (pow - 1) / 2);
    return num * val * val;
  } else {
    val = getOptmizedPow(num, (pow - 2) / 2);
    return num * num * val * val;
  }
}
console.log(getOptmizedPow(2, 10)); //1024

// Buble sort
function bubleSort(arr, current = 0) {
  if (arr.length - current <= 1) return arr;
  for (let i = 0; i < arr.length - current; i++) {
    if (arr[i] > arr[i + 1]) {
      //   const temp = arr[i + 1];
      //   arr[i + 1] = arr[i];
      //   arr[i] = temp;
      arr[i] = arr.splice(i + 1, 1, arr[i])[0]; // logic to swap the elements
    }
  }
  return bubleSort(arr, ++current);
}
console.log(bubleSort([5, 4, 3, 2, 1]));

// Merge sort
function mergeSort(arr, s = 0, e = arr.length - 1) {
  // Function to merge the left and right element
  function merge(left, right) {
    const result = [];
    let a = (b = 0);
    for (i = 0; i < left.length + right.length; i++) {
      if (left[a] > right[b] || a >= left.length) {
        result.push(right[b]);
        ++b;
      } else {
        result.push(left[a]);
        ++a;
      }
    }
    return result;
  }

  if (arr.length <= 1) return arr;
  if (s >= e) return arr;
  const mid = Math.ceil((s + e) / 2);
  const left = arr.slice(s, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([3, 7, 0, 1, 5, 8, 3, 2, 34, 66, 87, 23, 12, 12, 12]));
