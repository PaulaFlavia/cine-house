let cinema = "Cinemark";
//console.log(cinema);
let catalogo = [
    {   codigo: 1,
        titulo:"Doutor Estranho no Multiverso da Loucura",
        duração:2.061,
        atores:["Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor"],
        anoDeLançamento:2022,
        emCartaz:true,
    },
    {   
        codigo: 2,
        titulo:"Vingadores Ultimato",
        duração:3.01,
        atores:["Robert Downey Jr., Chris Evans, Mark Ruffalo "],
        anoDeLançamento:2019,
        emCartaz:false,
    }
];
//console.log(catalogo);

function adicionarFilme(){
    let newFilme = {
        codigo: 3,
        titulo:"Mulher Maravilha",
        duração:2.21,
        atores:["Gal Gadot, Chris Pine, Connie Nielsen "],
        anoDeLançamento:2017,
        emCartaz:false,

    }
    catalogo.push(newFilme);
    //console.log(catalogo);
    return catalogo;
}

adicionarFilme();

function buscarFilme (){
    let filme = catalogo.find((element) => element.codigo === 3 );
    //console.log(filme);
}

buscarFilme ();


function alterarStatusEmCartaz (){
    console.log('array antes da mudança: ', catalogo)

    for (let i = 0; i < catalogo.length; i ++) {
        if (catalogo[i].emCartaz === true) {
            catalogo[i].emCartaz = false
        } else {
            catalogo[i].emCartaz = true
        }
    }

    console.log("array depois da mudança: ", catalogo)
}
alterarStatusEmCartaz ();

