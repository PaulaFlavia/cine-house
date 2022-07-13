
function mostrarFilmes(filmes) {
    console.table(filmes);
}

module.exports = mostrarFilmes;

// let listarFilmesEmCartaz = () => {
//     let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz);
//     listarTodosOsFilmes(filmesEmCartaz);
// }

// // listarFilmesEmCartaz();

// let listarFilmesDeLongaDuracao = () => {
//     let filmesDeLongaDuracao = catalogo.filter(filme => filme.duracao >= 2);
//     listarTodosOsFilmes(filmesDeLongaDuracao);
// }

// listarFilmesDeLongaDuracao();
//  26  
// modulo-03/11-07-22/CineHouse/database/catalogo.json

// [
//     {
//         "codigo": 1,
//         "titulo": "Top Gun",
//         "duracao": 2,
//         "atores": ["Tom Cruise", "Jennifer Connelly"],
//         "anoDeLancamento": 2022,
//         "emCartaz": true
//     },
//     {
//         "codigo": 2,
//         "titulo": "Dune",
//         "duracao": 1.5,
//         "atores": ["Timothée Chalamet", "Zendaya"],
//         "anoDeLancamento": 2021,
//         "emCartaz": false
//     },
//     {   
//         "codigo": 3,
//         "titulo": "Doutor Estranho no Multiverso da Loucura",
//         "duracao": 3,
//         "atores": ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
//         "anoDeLancamento": 2022,
//         "emCartaz": true
//     }
//   ]