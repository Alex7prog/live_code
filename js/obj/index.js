/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// !!! need
// Objects:
// get key/value
// add key/value
// build new objects

// in: object, key: string, value: any / out: object

const transaction = {
  value: 170,
};

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// const res1 = addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// const res2 = addPropertyV1(res1, 'amount', 300); // ==> { value: 170, currency: 'USD' }
// console.log('result 1: ', res1);
// console.log('result 2: ', res2);
// console.log('obj after: ', transaction);

function addPropertyV2(obj, key, value) {
  // in: target obj,obj,...obj / out: obj
  return Object.assign(obj, { [key]: value });
}

// const res1 = addPropertyV2(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// const res2 = addPropertyV2(res1, 'amount', 300); // ==> { value: 170, currency: 'USD' }
// console.log('result 1: ', res1);
// console.log('result 2', res2);
// console.log('obj after ', transaction);

function addPropertyV3(obj, key, value) {
  // in: target obj,obj,...obj / out: new obj
  return Object.assign({}, obj, { [key]: value });
}

// const res1 = addPropertyV3(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// const res2 = addPropertyV3(res1, 'amount', 300); // ==> { value: 170, currency: 'USD' }
// console.log('result 1: ', res1);
// console.log('result 2', res2);
// console.log('obj after ', transaction);

function addPropertyV4(obj, key, value) {
  // in: target obj,obj,...obj / out: new obj
  return { ...obj, [key]: value };
}

// const res1 = addPropertyV4(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// const res2 = addPropertyV4(res1, 'amount', 300); // ==> { value: 170, currency: 'USD' }
// console.log('result 1: ', res1);
// console.log('result 2', res2);
// console.log('obj after ', transaction);

// examples
// const transaction = {
//   value: 170,
// };
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
