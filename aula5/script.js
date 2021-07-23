const clients = [
  {name:'Fulano' , age: 14},
  {name:'Ciclano' , age: 19},
  {name:'Beltrano' , age: 40},
];

const clientsOverAge =  clients.filter(client => client.age >= 18);

console.log(clients);
console.log(clientsOverAge);