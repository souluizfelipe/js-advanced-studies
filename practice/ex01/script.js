const list = document.querySelector('.names');

const alunos = [
  {
    name: 'Maria',
    lastname: 'da Silva',
  },
  {
    name: 'José',
    lastname: 'Moreira',
  },
  {
    name: 'Paulo',
    lastname: 'Henrique',
  },
  {
    name: 'Pedro',
    lastname: 'Souza',
  },
];

let namesList = ''

const fullNames = alunos.map((item) => {
  let fullName = `${item.name} ${item.lastname}`;
  
  return namesList += `
    <li>${fullName}</li>
  `;
});

list.innerHTML = namesList



