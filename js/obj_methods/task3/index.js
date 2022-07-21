// // Object to user array

// const getCustomersList = obj => {
//   if (!Object.keys(obj).length) {
//     return [];
//   }

//   return Object.values(JSON.parse(JSON.stringify(obj)))
//     .map((customerObj, index) => {
//       customerObj.id = Object.keys(obj)[index];
//       return customerObj;
//     })
//     .sort((a, b) => a.age - b.age);
// };

// Algo
// get obj values => array {customer}
// iteration array of values
// add new prop to {customer} from obj keys
// sort array {customer}

// option 1

// const getCustomersList = obj => {
//   const keysObj = Object.keys(obj);

//   return Object.values(obj)
//     .map((customerObj, index) => {
//       customerObj.id = keysObj[index];
//       return customerObj;
//     })
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);
// };

// Refactoring option 1 (Best)

const getCustomersList = obj => {
  return Object.keys(obj)
    .map(key => ({ id: key, ...obj[key] }))
    .sort((a, b) => a.age - b.age);
};

// Algo option 2
// get obj entries => array [key, {value}, ...]
// iteration array of entries
// use destructuring  => get [{key, ...value}, ...]
// sort array {customer}

// option 2

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// Live coding
// in: object / out: array of object

// Algo
// 1. get [key, value] - use .entries - [[key, {value}], ...]
// 2. iterate array of entries - create new obj - [{obj}, ...]
// 3. sort array & return

// **************
// draft solution, step by step
// **************

// Algo
// get array keys [key, ...]
// iterate array of keys - create new obj - [{key, value} ...]
// sort array & return

// const getCustomersList = obj =>
//   // in: obj
//   // out: [[key, value], ...]
//   Object.entries(obj)
//     // .map(entry => {
//     //   // option 1
//     //   // console.log('entry is: ', entry);
//     //   // const obj = {};
//     //   // Object.assign(obj, { id: entry[0] });
//     //   // console.log('obj: ', obj);
//     //   // return Object.assign(obj, entry[1]);
//     //   // option 2
//     //   return { id: entry[0], ...entry[1] };
//     // })
//     // option 3
//     .map(([id, customer]) => {
//       return { id, ...customer };
//     })
//     .sort((a, b) => a.age - b.age);

// *************************
// code Review
// *************************

// good (Andriy Shevchuk)
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);
// good (Anna), warning - magical number, use destructuring
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };
// (Roman),
// 1. use push not concat
// 2. reduce norm, best map
// 3. data - bad naming
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);
// (My)
// best a, b
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);
// refactoring
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// bad (Anastasiya)
// don't use .values, iteration for keys
// don't use index
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };

// refactoring
// const getCustomersList = obj => {
//   return Object.keys(obj)
//     .map(key => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);
// };

// bad (Aleksey)
// 1. don't use values
// 2. don't use index
// 3. bad naming
// 4. remove redunt variables
// use algoritm!!!
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// bad (Alexandr)
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// bad (Vitaliy)
// don't use shift
// fix eslint error
// bad naming
// redndant variable moderAff
// bad realisation algoritm
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

// refactoring
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => {
//       const idObj = { id: arr[0] };
//       return { ...arr[1], idObj };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// bad, (Evgeniy)
// 1. don't use index
// 2. use push
// 3. bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc[index] = { id: elem, ...customers[elem] };
//       // refactoring
//       // acc.push({ id: key, ...customers[key] });
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);
// Bad, (Dima)
// all bad, rewrite
// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };

// test-data

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: ' Tom',
    age: 17,
  },
};

// getCustomersList(customers);
console.log('getCustomersList(customers): ', getCustomersList(customers));
console.log('customers: ', customers);
