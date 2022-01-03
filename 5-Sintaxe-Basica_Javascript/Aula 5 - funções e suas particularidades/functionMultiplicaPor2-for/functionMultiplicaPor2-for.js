function multiplicaPor2(array) {
    let multiplicados=[];
    
    for(let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
        }

    return multiplicados;
}

const meusNumeros = [ 2, 33, 646, 254, 14];

multiplicaPor2(meusNumeros);

// [  ]