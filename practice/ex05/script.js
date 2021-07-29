


// crie uma função que retorne uma promise
// essa função deverá levar 10 segundos para ser resolvida com o método resolve()
// ela deve resolver com texto: 'Ok, promise resolvida!' 
// você deve exibr esse texto no console

// function job() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('ok, parece que funcionou, yay');
//     }, 1000);

//   });
// };

// job().then(msg => console.log(msg));

function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ok, parece que funcionou!')
      console.log(resolve)
    }, 500)
  })
}

job().then(msg => console.log(msg))
