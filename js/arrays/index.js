/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

// input: -
// output: - number, last array elem
// pop
const numbersList1 = [1, 2, 3, 4, 5];
console.log('array BEFORE POP ', numbersList1);

const lastNumber = numbersList1.pop();
console.log('.pop() => ', lastNumber);
console.log('array AFTER POP ', numbersList1);

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

// push
// input: - element(number)
// output: - new length of array

const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ', numbersList2);

console.log('.push(777) => ', numbersList2.push(777));
console.log('after push ', numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// shift
// input: -
// output: - number, first elem of array

const numbersList3 = [1, 2, 3, 4, 5];

console.log('before shift ', numbersList3);
console.log('shift() =>', numbersList3.shift());
console.log('after shift ', numbersList3);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// unshift
// input: - number
// output: - new length of array

const numbersList4 = [1, 2, 3, 4, 5];

console.log('before unshift: ', numbersList4);
console.log('unshift(888) =>', numbersList4.unshift(888));
console.log('after unshift:  ', numbersList4);

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
ф-ция callback запустится по очереди для каждого элемента начального массива arr
в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
callback(arr[i]) === true -> элемент будет добавлен в финальный массив
callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// filter()
// input: callback
// output: new filtered array

// callback
// input: elem of array
// output: boolean

function filterCallback(element) {
  return element > 5;
}

//option1

// const newArr = anotherNumbersList.filter(function filterCallback(element) {
//   return element > 5;
// });

//option2

const newArr = anotherNumbersList.filter(elem => elem > 5);

console.log('array ', anotherNumbersList);
console.log('filtered array ', newArr);

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

// callback function

function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index < to; index++) {
    sumRes += index;
  }

  resolver(sumRes);
}

// test data

const func = function (arg) {
  console.log(arg);
};

sum(1, 10, func);
