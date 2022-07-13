
const fs = require('fs');
const path = require('path');
const catalogo = require('../database/catalogo.json');

function mostrarFilmesEmCartaz(catalogo) {

   let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
   
   let lista = catalogo.map(filme => {if(filme.emCartaz){
    return filme.titulo;}});
    console.log(lista);
   }

       
   

// mostrarFilmesEmCartaz(catalogo);
// module.exports = mostrarFilmesEmCartaz;

// let listarFilmesEmCartaz = () => {
//    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz);
//    listarTodosOsFilmes(filmesEmCartaz);
// }

// // listarFilmesEmCartaz();
