const {edGalho, edFolha} = require('./arrays');

//A ideia aqui é pegar duas listas já ordenadas e juntá-las de forma que o resultado seja uma lista ordenada.
function juntaListas (lista1, lista2) {
    let listaFinal = [];
    let posiscaoAtualLista1 = 0;
    let posiscaoAtualLista2 = 0;
    let atual = 0;

    //Esse primeiro while vai executar até atingir o final da menor das duas listas.
    while (posiscaoAtualLista1 < lista1.length && posiscaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posiscaoAtualLista1];
        let produtoAtualLista2 = lista2[posiscaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posiscaoAtualLista1++;            
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posiscaoAtualLista2++;            
        }

        atual++;
    }

    //Os próximos 2 whiles inserem os elementos restantes da maior lista no final da lista.
    //Observe que apenas um deles será de fato executado.
    while (posiscaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posiscaoAtualLista1];
        posiscaoAtualLista1++;
        atual++;
    }

    while (posiscaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista1[posiscaoAtualLista2];
        posiscaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));