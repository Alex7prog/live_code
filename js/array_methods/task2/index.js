// method array.filter

// input: arr, callback func
// output: result arr

// callback
// i: el, index (optional), array (optional)
// output: boolean
// Algo:
// 1. new arr []
// 2. iterate input arr
// 3. apply callback for every elem
// 4. if true push
// 5. return arr

// const filterArrayElements = (arr, callback) => {
//   const resArr = [];

//   for (index = 0; index < arr.length; index += 1) {
//     if (callback(arr[index], index, arr)) {
//       resArr.push(arr[index]);
//     }
//   }

//   return resArr;
// };

// const testArr = [1, 2, 11, 0, -5, 5, '3', 50, 4, 8, NaN, 77];

// const testCallback = (el, index, arr) => {
//   if (index > 5 && el > 10) {
//     return true;
//   }
//   return false;
// };

// const filterRes = filterArrayElements(testArr, testCallback);
// console.log(filterRes);

// -- refactoring

const filterArrayElements = (arr, callback) => {
  const resArr = [];

  for (index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resArr.push(el);
    }
  }

  return resArr;
};

const testArr = [1, 2, 11, 0, -5, 5, '3', 50, 4, 8, NaN, 77];

const testCallback = (el, index, arr) => {
  if (index > 5 && el > 10) {
    return true;
  }
  return false;
};

const filterRes = filterArrayElements(testArr, testCallback);
console.log(filterRes);

// ---- multiply arguments in function

// bad, old metodology - use pseudo arr arguments
function multiplyArguments() {
  console.log(arguments);
}

multiplyArguments(10, 7, 6);

// good practice, ...rest
function multiply(...arg) {
  console.log(arg);
  return arg.reduce((acc, el) => acc * el);
}

multiply(10, 7, 6);

// -- test data
console.log(multiply(10, 7, 6));
