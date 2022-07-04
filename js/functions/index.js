/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

function getSenseOfLife() {
  return 42;
}

//test data

console.log(getSenseOfLife());
console.log(getSenseOfLife('foo'));

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

const getSquared = number => number ** 2;

//test data

console.log('getSquared: ', getSquared(7));
console.log('getSquared: ', getSquared(-5));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

//test data

console.log('sum', sum(3, 5));
console.log('sum', sum(3, -5));
console.log('sum', sum(3, '5')); // don't work!
console.log('sum', sum('3', -5)); // don't work!
console.log('sum', sum(3, '-5')); // don't work!

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

function printMessage(age) {
  return `I am ${age} years old`;
}

//test data

console.log('sum', printMessage(34));
console.log('sum', printMessage('34'));

// --------------

function sumFunc(from, to) {
  let result = 0;

  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  return result;
}

function compareSums(firstFrom, fromTo, seconFrom, secondTo) {
  return sumFunc(firstFrom, fromTo) > sumFunc(seconFrom, secondTo);
}

//test data

console.log(sumFunc(1, 5));
console.log(sumFunc(-5, 5));
console.log(sumFunc(5, 2));

console.log(compareSums(1, 5, 2, 10));
console.log(compareSums(5, 10, -10, 10));

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const mult = (firstNumber, secondNumber) => firstNumber * secondNumber;

//test data

console.log('mult', mult(5, 5));
console.log('mult', mult(5, -5));
console.log('mult', mult('5', -5));
console.log('mult', mult(5, '-5'));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

const square = number => number * number;

//test data

console.log('square', square(5));
console.log('square', square(-5));
console.log('square', square('-5'));
console.log('square', square('-5.5'));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;

//test data

console.log(getMagicNumber());
console.log(getMagicNumber(15));
