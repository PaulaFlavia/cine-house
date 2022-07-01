const tirarFilmeDeCartaz = (codigo) => {
     const fs = require('fs');
     const path = require('path');
     const buscarFilme = require('./buscarFilme.js');
     const salvarFilmes = require('./salvarFilmes.js');
     
    // Importar o catálogo
        let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
        let catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
        
        // Encontrar o filme com o código dado (buscarFilme)
            let filmeEncontrado = buscarFilme();
            console.log(filmeEncontrado);
    // Altera a propriedade emCartaz para FALSE
                filmeEncontrado.emCartaz == true ? filmeEnocntrado.emCartaz = false : 0;
                var index = catalogoAtual.map(function(filmeEncontrado){ return filmeEncontrado.emCartaz = false}).indexOf(codigo);
                console.log(catalogoAtual.indexOf(filmeEncontrado));
    // salva o catálogo de volta para o arquivo
            salvarFilmes(catalogoAtual);
    
} 

tirarFilmeDeCartaz(1)


module.exports = tirarFilmeDeCartaz;


//switch(filmeEncontrado.onDisplay) {
  //  case true :
    //    filmeEncontrado.onDisplay = false;
      //  console.log("Mudado para false");
        //break;
    //case false :
      //  filmeEncontrado.onDisplay = true;
        //console.log("Mudado para true");

        //break;
//}
// const tirarFilmeDeCartaz = (codigo) => { 
//     //Dependências
//     const fs = require('fs');
//     const path = require('path'); //Fução que resolve os caminhos no JS
//     const buscarFilme = require("./buscarFilme.js");
//     const salvarFilme = require("./salvarFilmes.js")
    
//     //Importar o catalogo

//     let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
//     const catalogoAtual = JSON.parse(fs.readFileSync(arquivo));
//     //console.log(catalogoAtual);

//     //Encontrar o filme com o código dado (buscarFilme)

//     filmeEncontrado = buscarFilme(codigo);
//     console.log(filmeEncontrado);

//     //Alterar

//     //console.log(catalogoAtual);
    
//     filmeEncontrado.emCartaz == true ? filmeEncontrado.emCartaz = false : 0;
//     var index = catalogoAtual.map(function(catalogo) { return catalogo.codigo; }).indexOf(codigo); //Estudar sobre .map
//     catalogoAtual[index] = filmeEncontrado;
//     console.log(catalogoAtual[index]) 
//     salvarFilme(catalogoAtual);
// }

// tirarFilmeDeCartaz(1);