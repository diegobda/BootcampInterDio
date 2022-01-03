/*// Parâmetros 
//------------------------------------------------------------
1- Ensinar como manipular parâmetros de uma funçao
2- técnica para lidar com números indefinidos de parâmetros
--------------------------------------------------------------*/
// Valores padões Pré ES2015 como se escreviar desatualizado
/*
function expo(a, num) {
    if( num === undefined) {
        num = 1;

    }
    const result = [];

    for (let i = 0; i < a.length; i++) {
        result.push(a[i] ** num);
    }

    return result;
}

expo([2 , 4, 6, 8, 9])

expo([2 , 4, 6, 8, 9], 4)

console.log(expo);

*///-----------------------------------------
// Valores padões Pós ES2015 atualizado

function exponecial(a, num =1) {
    const result = [];

    for(let i = 0; i < a.length; i++) {
        result.push(a[i] ** num);
    }
    return result;
}

exponecial([ 1, 2, 4, 6])
// [ 1, 2, 4, 6]

exponecial([ 1, 2, 3, 4], 4)
// [ 1, 8, 27, 64]

//Objeto arguments

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
          }
    }
    return max;
}

function showArgs() {
    return arguments;
}

