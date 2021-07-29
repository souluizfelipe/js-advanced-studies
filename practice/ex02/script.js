const list = document.querySelector('.pass');

const avarage = 7;

const students = [
  {
    name: 'Maria',
    lastname: 'da Silva',
    grade: 10,
  },
  {
    name: 'José',
    lastname: 'Moreira',
    grade: 4,
  },
  {
    name: 'Paulo',
    lastname: 'Henrique',
    grade: 7,
  },
  {
    name: 'Pedro',
    lastname: 'Souza',
    grade: 5,
  },
  {
    name: 'Luiz Felipe',
    lastname: 'Pereira',
    grade: 8,
  },
];

let aproved = '';

const overAvarage = students.filter(item => {
  item.grade >= 7 ?
    aproved += `<li>with grade ${item.grade}, ${item.name} ${item.lastname} is <b>aproved</b></li>` :
    aproved += `<li>with grade ${item.grade}, ${item.name} ${item.lastname} is <b>not aproved</b></li>` 
    
});

list.innerHTML = aproved;

console.log(overAvarage);

