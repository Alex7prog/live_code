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

// https://gromcode.com/courses/javascript-full/tasks/2653?video_id=1
// https://gromcode.com/users/11789/solutions/396804

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

// Refactoring option 1

// const getCustomersList = obj => {
//   const keysObj = Object.keys(obj);

//   return Object.values(obj)
//     .map((customerObj, index) => {
//       const customerObjWithId = { ...customerObj };
//       customerObjWithId.id = keysObj[index];
//       return customerObjWithId;
//     })
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);
// };

// option 2 (Best)
// https://gromcode.com/users/11789/solutions/397031
const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

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
