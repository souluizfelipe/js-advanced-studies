const students = [
  {name: 'Luiz', score: 34 },
  {name: 'Felipe', score: 50 },
  {name: 'Thaina', score: 29 },
  {name: 'Amanda', score: 67 },
  {name: 'Cleo', score: 98 },
];

const studentsResult = students.reduce((acc, curr) => {
  if(curr.score < 50){
    acc.fail.push(curr);
  } else {
    acc.pass.push(curr);
  };

  return acc
}, {
  pass: [],
  fail: [],
});

// console.log(students);
console.log(studentsResult);


const numbers = [1, 2, 3, 4];

const numFinal = numbers.reduce((acc, curr) => {
  if(numbers.length > curr) {
    acc += `${curr + 1} - `;
  } else {
    acc += `${curr + 1}`;
  }
  return acc
}, '');

console.log(numFinal);