
const fs = require('fs');
const path = require('path');

const salvarFilmes = (filmes) => {
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    let json = JSON.stringify(filmes, null, 4); 
    
    //console.log('arquivo ' + arquivo);
    //console.log('json ' + json);

    fs.writeFileSync(arquivo, json);

};

//testando

//const  catalogo = require('../database/catalogo.json');
// catalogo.push({titulo: "Ajornada de uma turma"});
// catalogo(salvarFilmes);

module.exports = salvarFilmes

