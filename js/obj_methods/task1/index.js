// object methods
// build object

// in: [array string], [array] / out: obj
// 1. create new obj
// 2. iterate keyList
// 3. put value to object

// option 1
// function buildObject(keysList, valuesList) {
//   let obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     // obj[keysList[index]] = valuesList[index];

//     obj = { ...obj, [keysList[index]]: valuesList[index] };
//   }

//   return obj;
// }

// option 2

// Bad, Assignment to property of function parameter 'obj'
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     obj[key] = valuesList[index];
//     return obj;
//   }, {});
// }

// Good, with test
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     console.log(`iteration ${index}: `);
//     console.log('before', obj);
//     const res = { ...obj, [key]: valuesList[index] };
//     console.log('after', obj);
//     console.log('res: ', res, '\n\n');
//     return res;
//   }, {});
// }

// refactoring
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// examples
const keys = ['name', 'address', 'age', 'name'];
const values = ['Bob', 'Ukraine', 34, null];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log('result: ', result);
