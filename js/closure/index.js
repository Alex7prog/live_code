const records = [1, 2, 3];

// option1

const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords(type) {
      return (type ? records.filter(el => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const logger2 = createLogger();
logger2.log('sdsdsdsd');

console.log(logger2.getRecords());

// option2
// нет замыкания
// 1
// function go() {
//   console.log(records);
// }

// go();

// // 2
// function wrapper() {
//   const records = [1, 2, 3];

//   function go(prop) {
//     records.push(prop);
//     console.log(records);
//   }

//   return go;
// }
// получили замыкание, !!! независимость лексических окружений
// лексическое окружение сохраняется
// const runner1 = wrapper();
// const runner2 = wrapper();
// runner1(1);
// runner1(2);
// runner1(3);

// runner2(7);
