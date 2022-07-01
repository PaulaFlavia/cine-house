//Importar modulos
const catalogo = require('./database/catalogo.json');

const mostrarFilmes = require('./functions/mostrarFilmes');

const buscarFilme = require('./functions/buscarFilme');

const listarTodosOsFilmes = require('./functions/listarTodosOsFilmes');

//capturando a informação do usuário
let acao = process.argv[2];

//decidir o que fazer
switch(acao){  
   
        case 'mostrar': 
            mostrarFilmes(catalogo);
            break;
        case 'buscar':
            let codigo = process.argv[3];
            let filmeEncontrado = buscarFilme(codigo);
            console.log(filmeEncontrado);
            break;
        case 'adicionar':
            console.log('buscar o filme');
            break;
        default :
        console.error('comand não encontrado');    
    }

//momstrando filmes
//mostrarFilmes(catalogo);
//buscarFilme();
