const listaLivros = require('./arrayOrdenado');

//A ideia é dividir o array ao meio, excluir a parte que não contém o valor buscado e repetir o processo até encontrar o valor que desejamos.
function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    //Essa primeira condição é satisfeita se não encontrarmos o elemento buscado na lista.
    if (de > ate) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 202));