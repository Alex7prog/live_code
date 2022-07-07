// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// map:
// input: callback function
// output: array
// callback:
// input: element, index (optional), array (optional)
// output: new element

// option 1

// const squaredNumbers = numbersList.map(el => {
//   const newEl = el * el;
//   return newEl;
// });

// const squaredNumbers = numbersList.map(el => el * el);

// option 2
// const squaredNumbers = numbersList.map((el, index) => {
//   // if (index > 2) {
//   //   return el * el;
//   // }

//   // return el;
//   return index > 2 ? el * el : el;
// });

const squaredNumbers = numbersList.map((el, index) => (index > 2 ? el * el : el));

// data test

console.log('numbersList: ', numbersList);
console.log('squaredNumbers: ', squaredNumbers);

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// find:
// input: callback
// output: value/undefined
// callback:
// input: element, optional: index, array
// output: true /false

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// foreach:
// input: callback
// output: undefined
// callback:
// input: element, index (optional), array (optional)
// output: undefined

// const forEachRes = numbersList.forEach(el => el * el);

// forEachRes не будет отличаться от numbersList,
// forEach игнорирует результат callback
// console.log('numbersList: ', numbersList);
// console.log('forEachRes: ', forEachRes);

numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});

// put your code here

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// reduce:
// input: callback, accumulator init value
// output: result value
// callback:
// input: accumulator, elemet, index (optional), array  (optional)
// output: new accumulator

// oprion 1
// const sumTransactions = transactions.reduce((sum, el) => {
//   console.log('acc: ', sum);
//   // console.log('el: ', el);
//   if (el > 100) {
//     console.log('el: ', el);
//     return sum + el;
//   }

//   return sum;
// }, 0);

// oprion 2
const sumTransactions = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);

console.log('sumTransactions: ', sumTransactions);

// put your code here

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
