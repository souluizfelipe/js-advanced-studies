const student = {
  name: 'Maria',
  lastname: 'da Silva',
  grades: [7, 10, 8, 5, 7, 9],
}

const avarege = student.grades.reduce((acc, curr) => {
 return acc + curr
}, 0)

console.log(`${student.name}'s avarage from ${student.grades.lenght} grades is ${(avarege/6).toFixed(1)} `);
