

//const adicionarFilme = (filme) => {

    // 1 - Importar o catálogo

    // 2 - adicionar o filme ao final do array do catálogo

    // 3 - Salvar o catálogo de volta no arquivo
    //     (Chamar a função salvarFilmes(catalogo))

//}
// var  novoFilme = {   "codigo": 6,
//         "anoDeLancamento": 2009,
//         "titulo": "Bastardos Inglórios",
//         "atores": [
//             "Brad Pitt", 
//             " Mélanie Laurent", 
//                 " Christoph Waltz"
//             ],
//             "duracao": 153,
//             "emCartaz": false
//         } // de outro lugar

const adicionarFilme = (novoFilme) =>{
    //Dependências
    const fs = require('fs');
    const path = require('path'); //Fução que resolve os caminhos no JS
   const salvarFilmes = require('./salvarFilmes.js');

    //Adcionar filme no final do catálogo;
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    const catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
    catalogoAtual.push(novoFilme);

    console.table(catalogoAtual);

    //Salvar novo catálogo
    salvarFilmes(catalogoAtual);
}
adicionarFilme(novoFilme);

module.exports = adicionarFilme;

 