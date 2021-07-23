const clients = [
  {name: 'Fulano', lastname: 'da Silva'},
  {name: 'Ciclano', lastname: 'Santos'},
  {name: 'Beltrano', lastname: 'Pinto'},
];

const clientsFullName = clients.map(client => `${client.name} ${client.lastname}`);

console.log(clients);
console.log(clientsFullName);
