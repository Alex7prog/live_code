// Algo
// 1. read input
// 2. create new task obj
// 3. add obj to array
// 4. render

// const createNewTask = () => {
//   const taskInputField = document.querySelector('.task-input');
//   const inputFieldValue = taskInputField.value;
//   if (inputFieldValue === '') {
//     return;
//   }
//   const newTask = {
//     text: inputFieldValue,
//     done: false,
//   };
//   tasks.push(newTask);
//   taskInputField.value = '';
//   taskInputField.innerHTML = '';
//   listElem.innerHTML = '';
//   renderTasks(tasks);
// };

// refactoring

// const handleCreateTask = () => {
//   const inputElem = document.querySelector('.task-input');
//   const inputValue = inputElem.value;

//   if (inputValue === '') {
//     return;
//   }

//   tasks.push({
//     text: inputFieldValue,
//     done: false,
//   });

//   inputElem.value = '';
//   // listElem.innerHTML = ''; // to render
//   renderTasks(tasks);
// };

// etalon
// const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskData = tasks.find(task => task.id === e.target.dataset.id);
//   Object.assign(taskData, { done: e.target.checked });
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);

// events
// 1. types of events (top-5)
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, don't update DOM (!!!!)
// 4. re-render

// events
// 1. types of events (top-5)
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, don't update DOM (!!!!)
// 4. re-render

// const tasks = [
//   { text: 'Buy milk', done: false },
//   { text: 'Pick up Tom from airport', done: false },
//   { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
//   { text: 'Buy meat', done: true },
// ];

const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// ======
const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);

// programmer work
// 80%
// - Reading sumeone else code
// - Debug code
// - testing
// 20%
// - writing code

// !!! HOW WORK WITH BUGS
// 1. Определяем точку входа цепочки
// 2. Проверить работу цепочки кода (дебагер) => локализация проблемы
// 3. fix
