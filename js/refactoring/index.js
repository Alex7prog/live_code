// refactoring

// Don't use:
// 1. naming of files/funcs/variables is important
// 2. magical numbers or strings

// 3. nesting of the code, more than 2
// 4. too much if/else statements
// 5. duplicates of the code
// 6. variable that is used only once
// 7. for/while and other loops, use arrays methods

// 8. redundant iteration throught arrays or objects - speed
// 9. take attention to the memory usage, don't create new array if it is not needed
// 10. divide your code into logical blocks
// 11. BIG code blocks (inside {} - if, loop or array methods)

// 12. every line of code should be easy to read
// 13. every piece of code must be tested

// 1

// remote logic from if
// get read of duplicate code
// don't use find

// const withdraw = (clients, balances, client, amount) => {
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// bad
// balances.find((item, index) => clients.indexOf(client) === index)

// good
// balances[clients.indexOf(client)];

// no refactoring

// 2

// const res = bool & value : value;
// no refactoring, rewrite
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//   ? (balances[clients.indexOf(client)] -= amount)
//   : -1;

// 3

// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];

//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// refactoring
// good
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// 3
// no refactoring
// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// 4
// NORM
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// GOOD
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// 5
// NORM
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };
//
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// 6
// bad logic
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// 7
// BAD
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

// 8
// Bad
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

// 1
// BAD
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// BAD, BAD Validation
// const getRandomNumbers = (length, from, to) => {
//   if (to - from < 1) {
//     return null;
//   }

//   const arr = new Array(length);

//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

const getRandomNumbers = (length, from, to) => {
  const toCeil = Math.ceil(to);
  const fromCeil = Math.ceil(from);

  if (toCeil - fromCeil < 1) {
    return null;
  }

  return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
};
