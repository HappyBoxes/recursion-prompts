/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copy = [...array];

  if (copy.length === 0) {
    return 0;
  }

  if (copy.length === 1) {
    return copy[0];
  }

  return copy.shift() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  if (!Array.isArray(array)) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    sum += arraySum(array[i]);
  }

  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  var next = (n < 0) ? (n + 1) : (n - 1);
  return next + sumBelow(next);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var results = [];
  var next = (x < y) ? x + 1 : x - 1;
  if (next === y || x === y) {
    return [];
  }

  results.push(next);
  return results.concat(range(next, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  var next = (exp > 0) ? exp -1 : exp + 1;

  if (exp > 0) {
    return base * exponent(base, next);
  } else {
    return parseFloat(((1 / base) * exponent(base, next)).toFixed(5));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }

  return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().trim();

  if (string.length === 0) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, -1));
  }

  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  var absX = (x > 0) ? x : -x;
  var absY = (y > 0) ? y : -y;
  if (absX < absY || x === 0) {
    return x;
  }

  var next = (x > 0) ? x - absY : x + absY;
  return modulo(next, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }

  var nextY = (y > 0) ? y - 1 : y + 1;
  var switchX = (y > 0) ? x : -x;
  return switchX + multiply(x, nextY);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  var absX = (x > 0) ? x : -x;
  var absY = (y > 0) ? y : -y;
  if (absX < absY) {
    return 0;
  }

  var nextX = (x > 0) ? x - absY : x + absY;
  return 1 + divide(nextX, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x % y === 0) {
    return y;
  }

  if (y % x === 0) {
    return x;
  }

  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if (str1[0] !== str2[0]) {
    return false;
  }

  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var results = [];
  if (str.length === 0) {
    return results;
  }

  results.push(str[0]);
  return results.concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  results.push(array[array.length - 1]);
  array.pop();
  return results.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var list = [];
  if (length === 0) {
    return list;
  }

  list.push(value);
  return list.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var results = [];
  if (n === 0) {
    return results;
  }

  var value = '';
  if (n % 3 === 0) {
    value += 'Fizz';
  }

  if (n % 5 === 0) {
    value += 'Buzz';
  }

  if (value === '') {
    value += n;
  }

  return results.concat(fizzBuzz(n - 1), value);
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) {
    return 0;
  }

  if (array[0] === value) {
    count++;
  }

  array.shift();
  return count + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var copy = [...array];
  var results = [];
  if (copy.length === 0) {
    return results;
  }

  results.push(callback(copy.shift()));
  return results.concat(rMap(copy, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  if (obj[key] !== undefined ) {
    count++;
  }

  for (loopKey in obj) {
    if (typeof obj[loopKey] === 'object') {
      count += countKeysInObj(obj[loopKey], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  if (obj === value) {
    count++;
  }

  if (typeof obj === 'object') {
    for (key in obj) {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (obj[oldKey] !== undefined ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  for (key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var results = []
  if (n <= 0) {
    return null;
  }

  if (n === 1) {
    return results.concat([0], [1]);
  }

  results = results.concat(fibonacci(n - 1))
  var value = results[n - 1] + results[n - 2];
  return results.concat(value);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  var value = 0;
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  var value = array.shift().toUpperCase();
  return results.concat(value, capitalizeWords(array));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  var word = array.shift();
  var transformed = word.charAt(0).toUpperCase() + word.slice(1);
  return results.concat(transformed, capitalizeFirst(array));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  if (obj % 2 === 0) {
    sum += obj;
  }

  if (typeof obj === 'object') {
    for (key in obj) {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var results = [];
  if (!Array.isArray(array)) {
    results.push(array);
    return results;
  }

  for (var i = 0; i < array.length; i++) {
    results = results.concat(flatten(array[i]));
  }
  return results;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    var obj = {};
  }

  if (str.length === 0) {
    return obj;
  }

  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }

  return letterTally(str.substring(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var copy = [...list];
  var results = [];
  if (copy.length === 0) {
    return results;
  }

  var value = copy.shift();
  results = results.concat(compress(copy));
  if (value !== results[0]) {
    results.unshift(value);
  }
  return results;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  var value = array.shift();
  value.push(aug);
  results.push(value);
  return results.concat(augmentElements(array, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  var value = array.shift();
  results = results.concat(minimizeZeroes(array));
  if (value !== 0 || results[0] !== 0) {
    results.unshift(value);
  }

  return results;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var results = [];
  if (array.length === 1) {
    return (array[0] > 0) ? array[0] : -array[0];
  }

  var value = array.pop();
  value = (value > 0) ? value : -value;
  results = results.concat(alternateSign(array));
  if (results[results.length - 1] > 0) {
    results.push(-value);
  } else {
    results.push(value);
  }

  return results;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var result = '';

  if (str.length === 0) {
    return result;
  } else if (str[0] === '1') {
    result += 'one';
  } else if (str[0] === '2') {
    result += 'two';
  } else if (str[0] === '3') {
    result += 'three';
  } else if (str[0] === '4') {
    result += 'four';
  } else if (str[0] === '5') {
    result += 'five';
  } else if (str[0] === '6') {
    result += 'six';
  } else if (str[0] === '7') {
    result += 'seven';
  } else if (str[0] === '8') {
    result += 'eight';
  } else if (str[0] === '9') {
    result += 'nine';
  } else {
    result += str[0];
  }

  result += numToText(str.substring(1));
  return result;
};



// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
