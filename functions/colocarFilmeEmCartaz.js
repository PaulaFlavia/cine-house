const colocarFilmeEmCartaz = (codigo) => { 
    //Dependências
    const fs = require('fs');
    const path = require('path'); //Fução que resolve os caminhos no JS
    const buscarFilme = require("./buscarFilme.js");
    const salvarFilme = require("./salvarFilmes.js")
    
    //Importar o catalogo

    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    const catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
    //console.log(catalogoAtual);

    //Encontrar o filme com o código dado (buscarFilme)

    filmeEncontrado = buscarFilme(codigo);
    console.log(filmeEncontrado);

    //Alterar

    //console.log(catalogoAtual);
    
    filmeEncontrado.emCartaz == false ? filmeEncontrado.emCartaz = true : 0;
    var index = catalogoAtual.map(function(catalogo) { return catalogo.codigo; }).indexOf(codigo); //Estudar sobre .map
    catalogoAtual[index] = filmeEncontrado;
    console.log(catalogoAtual[index]) 
    salvarFilme(catalogoAtual);
}

colocarFilmeEmCartaz
(1);