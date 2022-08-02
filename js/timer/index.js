// timer
// 1. what is context?
// объект который владеет вызовом функции
// нужен для того, чтобы функции могли делиться данными
// 2. when context is lost?
// 3. how to fix context?

// -- example

// получим this - window
// если 'use strict' (type="module" - переключает в 'use strict')
// this - undefined
// когда не строгий режим контекст вызова window

// function getName() {
//   console.log(this);
//   return 'James';
// }

// console.log(window); // в строгом режиме в window не увидим переменных и функций
// // window.getName();
// getName();

// export const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   intervalId: null,

//   // startTimer: function () {}
//   startTimer() {
//     // console.log('startTimer context: ', this);
//     // console.log(this);
//     function timerRun() {
//       console.log('callback context: ', this); // window, т.к. setInterval метод window
//       if (this.secondsPassed === 60) {
//         this.secondsPassed = 1;
//         this.minsPassed += 1;
//         return;
//       }

//       this.secondsPassed += 1;

//       console.log(this.minsPassed, ':', this.secondsPassed);
//     }
//     // option 1
//     // this.intervalId = setInterval(() => timerRun(), 1000);
//     // this.intervalId = setInterval(() => {
//     //   console.log('callback context: ', this);
//     //   this.secondsPassed += 1;
//     //   console.log('this.secondsPassed: ', this.secondsPassed);
//     // }, 1000);
//     // option 2
//     // this.intervalId = setInterval(
//     //   function () {
//     //     console.log('callback context: ', this);
//     //     this.secondsPassed += 1;
//     //     console.log('this.secondsPassed: ', this.secondsPassed);
//     //   }.bind(this),
//     //   1000,
//     // );
//     // or long syntax
//     // const callback = function () {
//     //   console.log('callback context: ', this);
//     //   this.secondsPassed += 1;
//     //   console.log('this.secondsPassed: ', this.secondsPassed);
//     // };
//     // const bindedcallback = callback.bind(this);
//     // setInterval(bindedcallback, 1000);
//   },

//   stopTimer() {},
//   getTime() {},
//   resetTimer() {},
// };

// // test data
// timer.startTimer(); // context

// lost context
// 1. func called separately
// const func = timer.startTimer;
// func(); // context - undefined
// 2. callback func
// 3. nested functions

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    const timerRun = () => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    };
    this.intervalId = setInterval(timerRun, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  getTime() {
    const formatSecondsPassed =
      this.secondsPassed < 10 ? `0${this.secondsPassed}` : `${this.secondsPassed}`;
    return `${this.minsPassed}:${formatSecondsPassed}`;
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// test data
timer.startTimer();
setTimeout(() => {
  timer.stopTimer();
  console.log('timer.getTime(): ', timer.getTime());
  timer.resetTimer();
  console.log('timer.getTime(): ', timer.getTime());
}, 5000);
