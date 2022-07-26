/* eslint-disable */

// lexical environment

// GLOBAL LEX ENV
//   'enviromentRecord': {
// --- scan
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
// -- execution
//     'message': 'Test',
//     'weight': 55,
//      'messanger1': ....
//      'messanger2': ....
//      'messanger3': ....
//   },
//   'outherLexicalEnv': null
// }

// messenger1 LEX ENV
// {
//   'enviromentRecord': {
// 'sendMessage': func,
// 'setMessage': func,
// 'setSender': func,
// 'message': 'Just learn it',
// 'sender': 'Gromcode',
//   'outherLexicalEnv': GLOBAL LEX ENV
// }

// sendMessage LEX ENV
// {
//   'enviromentRecord': {
// 'name': '...',
//   },
//   'outherLexicalEnv': createMessenger
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  // option 3
  if (sender === 'Gromcode') {
    sender = 'Any message';
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// option 1
// const messanger1 = createMessenger();

// option 2
const messenger1 = createMessenger();
const messenger2 = createMessenger();
messenger2.sendMessage('John');
const messenger3 = createMessenger();

run();

// Lexical env count
// option 1
// 3 created + 1 console.log

// not count console.log

// option 2
// not count console.log 6

// option 3
//  9
