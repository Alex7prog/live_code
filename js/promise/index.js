const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Alex 7',
    password: '123',
  };

  console.log('1', JSON.stringify(user));

  // const HttpPromise = fetch(serverUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json;charset=utf-8',
  //   },
  // });
  // // .then(responce => {});

  // const thenResult = HttpPromise.then(response => {
  //   console.log(response);
  //   return response.json();
  // });

  // thenResult
  //   .then(data => {
  //     alert(data);
  //   })
  //   .catch(e => {
  //     alert(e);
  //   });

  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
    // body: "dfgfdfgsdgfdg",
  })
    .then(responce => {
      console.log('2 -');

      responce.json();
    })
    .then(data => {
      console.log('3 -');
      alert(data);
    })
    .catch(e => {
      alert(e);
    });

  console.log('4 - done');
}

// then
// input: callback (onFullFlled), callback (onRejected)
// output: Promise

// const createTask = taskData => {
//     return fetch(baseUrl, {
//       method: 'POST',
//       headers: {
//         // 'Content=Type': 'application/json;utc-8',
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(taskData),
//     }).then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to create task');
//       }
//     });
//   };
// }

formElem.addEventListener('submit', createUserHandler);
