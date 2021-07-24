const tasks = [
  {tasks: 'study js'},
  {tasks: 'study node.js'},
  {tasks: 'study react.js'},
];

const JSONTasks = JSON.stringify(tasks);

localStorage.setItem('tasks', JSONTasks);

const getTasks = localStorage.getItem('tasks');

const objTasks = JSON.parse(getTasks);

console.log(getTasks);
console.log(objTasks);