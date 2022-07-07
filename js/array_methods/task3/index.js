// analog of method array.map

// input: arr, callback func
// output: result arr

// callback
// i: el, index (optional), array (optional)
// output: new el
// Algo:
// 1. new arr []
// 2. iterate input arr
// 3. apply callback for every el
// 4. push new el
// 5. return arr

const mapArrayElements = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const resArr = [];

  for (index = 0; index < arr.length; index += 1) {
    const el = callback(arr[index], index, arr);
    resArr.push(el);
  }

  return resArr;
};

const testArr = [1, '3', 0, -5, 5, '11', 50, 4, 8, NaN, 77, null, undefined];

const testCallback = (el, index, arr) => {
  if (index > 5 && el > 5) {
    return el * el;
  }

  return el;
};

// -- test data

const mapRes = mapArrayElements(testArr, testCallback);

console.log(testArr);
console.log(mapRes);

console.log(mapArrayElements([], testCallback));
console.log(mapArrayElements('foo', testCallback));
console.log(mapArrayElements(null, testCallback));
console.log(mapArrayElements(undefined, testCallback));
