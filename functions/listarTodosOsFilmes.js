const fs = require('fs');
const path = require('path');
const catalogo = require('../database/catalogo.json');

function listarTodosOsFilmes(catalogo) {
   let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
   
   let lista = catalogo.map(filme => filme.titulo) 
   console.log(lista);
   
}
listarTodosOsFilmes(catalogo);
module.exports = listarTodosOsFilmes;

    
// let listarTodosOsFilmes = (filmes) => {
//    filmes.forEach(filme => {
//        console.log(`
//        Filme: ${filme.titulo}
//        Duracao: ${filme.duracao}hrs
//        Atores: ${filme.atores}
//        Ano de lancamento: ${filme.anoDeLancamento}
//        Em cartaz: ${filme.emCartaz ? 'Sim' : 'Nao'}
//        `);
//    });
// }