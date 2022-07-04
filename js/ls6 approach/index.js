// !!! How to work on tech task. Step by step guide
// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// input: number
// output: undefined

// algo:
// 1. iterate from 2 to num
// 2. check it prime
// 3. if prime print it

const numberIsPrime = number => {
  let isPrime = true;

  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      isPrime = false;
    }
  }

  return isPrime;
};

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    if (numberIsPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(17);
