// const result = [
//   "B$u$i$ld",
//   "$t$$h$e",
//   "N$e$x$t",
//   "E$$ra",
//   "$$o$f$",
//   "S$$of$t$wa$r$e",
//   "De$$ve$l$op$me$n$t",
// ]
//   .map((word) => word.replace(/\$/g, "").toUpperCase())
//   .join(" ");

// console.log(result);

/******************************************************************************** */

/* Fid Pair Sum */
// function findPairSum(arr, target) {
//   const seen = new Set();
//   console.log(seen);
//   for (const num of arr) {
//     const complement = target - num;
//     if (seen.has(complement)) {
//       return [num, complement];
//     }
//     console.log("sem, ", seen);
//     seen.add(num);
//   }
//   return null;
// }
// const exparray = [2, 3, 4, 5, 1, 2, 4, 5];
// console.log(findPairSum(exparray, 9));

/******************************************************************************** */

/* char count question */
// function countCharacters(str) {
//   const charCount = {};

//   // Remove spaces and convert the string to lowercase
//   const cleanedStr = str.replace(/\s/g, "").toLowerCase();

//   // Iterate through the cleaned string
//   for (const char of cleanedStr) {
//     // If the character is not in the charCount object, initialize it with a count of 1
//     if (!charCount[char]) {
//       charCount[char] = 1;
//     } else {
//       // If the character is already in charCount, increment its count
//       charCount[char]++;
//     }
//   }

//   return charCount;
// }

// const str = "hello how are you";
// const charFrequency = countCharacters(str);
// console.log(charFrequency);

/******************************************************************************** */
/* Rotate Array */
// function rotateArray(arr, steps) {
//   const n = arr.length;
//   steps = steps % n; // Handle steps greater than array length
//   const rotated = arr.slice(n - steps).concat(arr.slice(0, n - steps));
//   return rotated;
// }
// const exparray = [2, 3, 4, 5, 1, 2, 4, 5];
// console.log(rotateArray(exparray, 2));

// const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
// const result = [];

// const CheckAnswer = (data) => {
//   if (Array.isArray(data)) {
//     // console.log("data", data);
//     data.map((res) => CheckAnswer(res));
//   } else {
//     result.push(data);
//   }
// };

// CheckAnswer(myArr1);

// console.log(result);

// const result = myArr1.flat(2);
// console.log("resu", result);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.map((x) => x * 2);

// console.log("new qrr", newArr);

/******************************************************************************** */
// let text = "hello how are you?";
// const result = {};
// console.log("result", result);

// const cleardata = text.replace(/\s/g, "").toLowerCase();

// for (let data of cleardata) {
//   if (result[data]) {
//     result[data]++;
//   } else {
//     result[data] = 1;
//   }
// }

// console.log("myarr", result);

/******************************************************************************** */

// function mergeSortedArrays(arr1, arr2) {
//   const merged = [...arr1, ...arr2];
//   console.log("meerged", merged);
//   return merged.sort((a, b) => a - b);
// }

// const Arr1 = [3, 34, 22, 4, 1];
// const Arr2 = [2, 3, 32, 5, 1, 5, 2, 3];

// console.log(mergeSortedArrays(Arr1, Arr2));

// const fruits = ["Banana", "Orange", "Apple", "Banana", "Mango"];
// console.log(fruits.includes("Banana", 3));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log("text", keys);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();

// console.log("fruits", fruits);

/******************************************************************************** */

// var reverseWords = function (stringToReverse) {
//   var splitString = stringToReverse.split(" "); //split only on space
//   console.log("splitString", splitString);
//   var reversedStringArray = [];

//   // reverse the array
//   for (var i = 0; i < splitString.length; i++) {
//     reversedStringArray.unshift(splitString[i]);
//   }
//   // array looks fine, want to test the join now
//   console.log("revresrd", reversedStringArray);

//   var reversedString = reversedStringArray.join(" "); // return joined string from reversed array

//   return reversedString;
// };

// let testStr = "Allice, do you like Bob?";
// console.log(reverseWords(testStr));

/******************************************************************************** */

// let isSorted =  (arrayToTest) =>{
//   if (arrayToTest.length <= 1) {
//     // take care of cases where array is empty or has one element
//     return true;
//   }

//   for (var i = 1; i < arrayToTest.length; i++) {
//     if (arrayToTest[i - 1] > arrayToTest[i]) {
//       // if the array has any places where the next element is smaller, it is not sorted lowest to highest
//       return false;
//     }
//   }

//   return true; // if we got through the loop, everything should be sorted properly
// };

/******************************************************************************** */
// function generatePascalsTriangle(numRows) {
//   const triangle = [];

//   for (let i = 0; i < numRows; i++) {
//     const row = [];

//     for (let j = 0; j <= i; j++) {
//       if (j === 0 || j === i) {
//         console.log("j and i", j, "adn", i);
//         row.push(1);
//       } else {
//         const prevRow = triangle[i - 1];
//         console.log("triangle", triangle);
//         console.log("pre role", prevRow);
//         row.push(prevRow[j - 1] + prevRow[j]);
//       }
//     }
//     console.log("row", row);
//     triangle.push(row);
//   }

//   return triangle;
// }

// function printPascalsTriangle(triangle) {
//   for (const row of triangle) {
//     console.log(row.join(" "));
//   }
// }

// const numRows = 6;
// const pascalsTriangle = generatePascalsTriangle(numRows);
// printPascalsTriangle(pascalsTriangle);

// var pascalTriangle = function (numberOfLines) {
//   var result = [];

//   if (numberOfLines === 0) {
//     return undefined;
//   }

//   result.push([1]); // we need to add them as arrays

//   if (numberOfLines === 1) {
//     return result;
//   }

//   result.push([1, 1]);

//   if (numberOfLines === 2) {
//     return result;
//   }

//   var createNextRow = function (lastRowCreated) {
//     var newRowResult = [];

//     newRowResult.push(1); //add first element
//     for (var i = 1; i < lastRowCreated.length; i++) {
//       //we are only creating the inner elements, shortened loop
//       newRowResult.push(lastRowCreated[i - 1] + lastRowCreated[i]);
//     }
//     newRowResult.push(1); //add last element

//     return newRowResult;
//   };
//   /// TESTING: createNextRow in console:::PASSED

//   for (var i = 3; i <= numberOfLines; i++) {
//     result.push(createNextRow(result[result.length - 1])); //pass in the last row we created
//   }

//   return result;
// };

// console.log(pascalTriangle(6));

/******************************************************************************** */

// let deFactorial = (num) =>
//   num === 0 || num === 1 ? 1 : num * deFactorial(num - 1);

// const result = deFactorial(8);
// console.log("result", result);

// function doFactorial(num) {
//   // Base case: factorial of 0 or 1 is 1
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     // Recursive case: multiply num by the factorial of (num - 1)
//     return num * doFactorial(num - 1);
//   }
// }

// // Example usage:
// const result = doFactorial(8);
// console.log(result); // Output will be 24

/******************************************************************************** */

// const promise = Promise.resolve(42)
//   .then((value) => value - 42)
//   .then((value) => value / value)
//   .catch(() => -21)
//   .then((value) => value && value.toString())
//   .catch(() => 21)
//   .then((value) => value.charCodeAt(0))
//   .catch(() => 42)
//   .then((value) => value * 2)
//   .finally((value) => value + 5);

// console.log("data", promise);

/******************************************************************************** */

let getFirstUniq = (numList) => {
  const numCounts = {};

  //Count for each number
  for (const num of numList) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }
console.log("numlist",numCounts)

  //Find the first unique number
  for (const num of numList) {
    if (numCounts[num] === 1) {
      return num;
    }
  }

  //if no unique number is found
  return null;
};

let testArray = [2, 3, 4, 5, 3, 7, 2, 8];

const firstUnique = getFirstUniq(testArray);
console.log("first quique", firstUnique);
