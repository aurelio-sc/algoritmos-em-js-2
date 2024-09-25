const listaLivros = require('./array');

//esquerda e direita são indices onde começa e termina o array.
function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }

        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }    
    return array;
}

function particiona(array, esquerda, direita) {
    //No nosso caso, o pivô vai ser sempre o elemento cetral do array analisado.
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; //na primeira chamada da função esse valor será zero.
    let atualDireita = direita; //na primeira chamada da função esse valor será o tamanho do array menos 1.

    //Quando atualEsquerda for maior que autalDireita significa que esses índices já "se cruazaram".
    while (atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;

}

function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[de] = elem2;
    array[para] = elem1;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));