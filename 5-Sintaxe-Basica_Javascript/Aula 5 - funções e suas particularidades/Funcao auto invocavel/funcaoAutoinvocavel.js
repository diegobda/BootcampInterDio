// Função autoinvocável IIFE (Immediately Invoked Function expression)
/*

(
    function() {
        let name = "Diego Santos proximo inter"
        return name;
    }
)();

//  Retorna a declaração "Diego Santos proximo inter"

/* Funçao anonima!!!

(
    function (a, b) {
        return a + b;
    }
)(1, 2); //3

*////---------------------------------------*///---------------------

/*

const soma4 =(
    function() {
        return a + b;
    }
)(3, 4);

console.log(soma4) // 7

*///---------------------------------------*///---------------------
//Callbacks

function calculadora(resultado, number1, number2) {
    return resultado(number1, number2);
}

const somar = function(number1, number2) {
    return number1 + number2;
}

const sub = function (number1, number2) {
    return number1 - number2;
}
const resultadoSomar = calculadora(somar, 3, 2);
const resultadoSub = calculadora(sub, 5, 12);

console.log(resultadoSub); // -7
console.log(resultadoSomar); // 5
