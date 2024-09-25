const listaLivros = require('./array');

function quickSort(arr, key) {
    if (arr.length <= 1) {
        return arr;
    }

    const randomPivotIndex = Math.floor(Math.random() * arr.length);    
    const pivot = arr[randomPivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== randomPivotIndex) {
            if (arr[i][key] < pivot[key]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}

console.log(quickSort(listaLivros, 'preco'));
