const formInp = document.querySelector('#form');
const inp = document.querySelector('.inp');
const list = document.querySelector('.list');

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
    name: 'Sara',
    lastname: 'Souza',
    grade: 5,
  },
  {
    name: 'Noronha',
    lastname: 'Barbosa',
    grade: 9,
  },
  {
    name: 'Rodrigo',
    lastname: 'Barros',
    grade: 4,
  },
  {
    name: 'Renato',
    lastname: 'Barros',
    grade: 7,
  },
  {
    name: 'Andrea',
    lastname: 'Batista',
    grade: 6,
  },
  {
    name: 'Carla',
    lastname: 'Campos',
    grade: 3,
  },
];

formInp.onsubmit = (event) => {
  event.preventDefault();
  const grade = inp.value;
  let searchList = ''
  
  let searchRes = students.filter(item => {
    if (item.grade == grade){
      return searchList += ` <li>${item.name} ${item.lastname} - nota ${item.grade}</li>`;
    };
  });
  
  if(searchRes.length === 0) {
    searchList = `Nenhum aluno tirou essa nota`;
  }
  
  list.innerHTML = searchList
};
