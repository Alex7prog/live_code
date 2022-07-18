// compare objects

// in: {}, {} // out: boolean
// Algo:
// 1. get keys1, keys2
// 2. compare length [keys]
// 3. iterate keys1
// 4. compare key1 === key2 & value1 === value2
// 5. true => obj1 === obj2, false obj1 !== obj2
// choose method some (some iteration < every iteration)

// function compareObjects(obj1, obj2) {
//   const keysObj1 = Object.keys(obj1);

//   if (keysObj1.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return !keysObj1.some(key => !hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]);
// }

// Refactoring

// option 1
// const compareObjects = (obj1, obj2) =>
//   Object.keys(obj1).length !== Object.keys(obj2).length
//     ? false
//     : !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);

// option 2
const compareObjects = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  return keysObj1.length !== Object.keys(obj2).length
    ? false
    : !keysObj1.some(key => obj1[key] !== obj2[key]);
};
// compare objects

// in: {}, {} // out: boolean
// Algo:
// 1. get keys1, keys2
// 2. compare length [keys]
// 3. iterate keys1
// 4. compare key1 === key2 & value1 === value2
// 5. true => obj1 === obj2, false obj1 !== obj2
// choose method some (some iteration < every iteration)

// function compareObjects(obj1, obj2) {
//   const keysObj1 = Object.keys(obj1);

//   if (keysObj1.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return !keysObj1.some(key => !hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]);
// }

// Refactoring

// option 1
// const compareObjects = (obj1, obj2) =>
//   Object.keys(obj1).length !== Object.keys(obj2).length
//     ? false
//     : !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);

// option 2
const compareObjects = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  if (keysObj1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keysObj1.some(key => obj1[key] !== obj2[key]);
};

// Live code
// Andriy Shevchuk
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// test-data
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  student: false,
  name: 'Bob',
  age: 17,
};

const obj6 = {
  student: false,
  bob: 'name',
  age: 17,
};

console.log('compareObjects(obj1, obj2): ', compareObjects(obj1, obj2));
console.log('compareObjects(obj2, obj3): ', compareObjects(obj2, obj3));
console.log('compareObjects(obj1, obj4): ', compareObjects(obj1, obj4));
console.log('compareObjects(obj3, obj2): ', compareObjects(obj3, obj2));
console.log('compareObjects(obj3, obj5): ', compareObjects(obj3, obj5));
console.log('compareObjects(obj5, obj6): ', compareObjects(obj5, obj6));

// option - JSON.stringify
// function compareObjects(obj1, obj2) {
//   const sortObj1 = Object.keys(obj1)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj1[key];
//       return result;
//     }, {});
//   const sortObj2 = Object.keys(obj2)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj2[key];
//       return result;
//     }, {});

//   return JSON.stringify(sortObj1) === JSON.stringify(sortObj2);
// }

// Live code
// Andriy Shevchuk
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// test-data
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  student: false,
  name: 'Bob',
  age: 17,
};

const obj6 = {
  student: false,
  bob: 'name',
  age: 17,
};

console.log('compareObjects(obj1, obj2): ', compareObjects(obj1, obj2));
console.log('compareObjects(obj2, obj3): ', compareObjects(obj2, obj3));
console.log('compareObjects(obj1, obj4): ', compareObjects(obj1, obj4));
console.log('compareObjects(obj3, obj2): ', compareObjects(obj3, obj2));
console.log('compareObjects(obj3, obj5): ', compareObjects(obj3, obj5));
console.log('compareObjects(obj5, obj6): ', compareObjects(obj5, obj6));

// option 2 - JSON.stringify
// function compareObjects(obj1, obj2) {
//   const sortObj1 = Object.keys(obj1)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj1[key];
//       return result;
//     }, {});
//   const sortObj2 = Object.keys(obj2)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj2[key];
//       return result;
//     }, {});

//   return JSON.stringify(sortObj1) === JSON.stringify(sortObj2);
// }
