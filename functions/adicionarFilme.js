

//const adicionarFilme = (filme) => {

    // 1 - Importar o catálogo

    // 2 - adicionar o filme ao final do array do catálogo

    // 3 - Salvar o catálogo de volta no arquivo
    //     (Chamar a função salvarFilmes(catalogo))

//}
var  novoFilme = {   "codigo": 6,
        "anoDeLancamento": 2009,
        "titulo": "Bastardos Inglórios",
        "atores": [
            "Brad Pitt", 
            " Mélanie Laurent", 
                " Christoph Waltz"
            ],
            "duracao": 153,
            "emCartaz": false
        } // de outro lugar

const fs = require('fs');
const path = require('path'); 
const salvarFilmes = require('./salvarFilmes.js');

const adicionarFilme = (novoFilme) =>{
let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
const catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
catalogoAtual.push(novoFilme);

console.table(catalogoAtual);
salvarFilmes(catalogoAtual);
}
 adicionarFilme(novoFilme);

module.exports = adicionarFilme;
// let cinema = 'CineHouse';
// let catalogo = require('./database/catalogo.json');

// let adicionarFilme = filme => catalogo.push(filme);

// adicionarFilme({
//     codigo: 4,
//     titulo: "Vingadores Ultimato",
//     duracao: 2.5,
//     atores:["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
//     anoDeLancamento: 2019,
//     emCartaz: false
// });

 