
const fs = require('fs');
const path = require('path'); 
const buscarFilme = require('./buscarFilme.js');
const salvarFilme = require('./salvarFilmes.js');
const catalogo = require('../database/catalogo.json');

function tirarFilmeDeCartaz(codigo) {
  let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
  // const catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
  let filmeEncontrado = buscarFilme(codigo);
  let index;
  
  filmeEncontrado.emCartaz === true ? filmeEncontrado.emCartaz = false: 0;
  index = catalogo.findIndex(filme => filme  == filmeEncontrado);
  catalogo[index] = filmeEncontrado;
  salvarFilme(catalogo);
} 
  
tirarFlmeDeCartaz(2);