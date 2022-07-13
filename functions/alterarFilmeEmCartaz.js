
let catalogo = require('../database/catalogo.json');
const buscar = require('./buscarFilme');

function alterarFilmeEmCartaz(codigo){
  let filmeBuscado = buscar(codigo);
  if(filmeBuscado){
    filmeBuscado.emCartaz =! filmeBuscado.emCartaz;
  }
  return filmeBuscado;
}

// alterarFilmeEmCartaz(3);
// console.table(catalogo);

// let alterarStatusEmCartaz = codigo => {
//   let filmeBuscado = buscarFilme(codigo);

//   // filmeBuscado.emCartaz ? filmeBuscado.emCartaz = false : filmeBuscado.emCartaz = true;

//   if (filmeBuscado) {
//       filmeBuscado.emCartaz = !filmeBuscado.emCartaz;
//   }

//   return filmeBuscado;
// }

// // console.log(alterarStatusEmCartaz(3));
// // console.log(alterarStatusEmCartaz(3));
