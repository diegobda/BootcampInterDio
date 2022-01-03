//Objetos
//1- Ensinar como utilizar declarações
//if/else

function numeroPositivo(num) {
    let resultados;

    if ( num < 0) {
        resultados = false;
    }else {
        resultados = true;
    }

    return resultados;
}

numeroPositivo(2)
//true
numeroPositivo(-2)
// false

/*metodo 2*/

function numeroPosit(num) {
    let result;

    const ehNeg = num < 0;

    if(ehNeg) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

/*metodo 2a*/

function nunberPos(n) {
    const eNeg = n < 0;

    if(eNeg) {
        return false;
    }
    return true;
}

function numberPositive (number) {
    const ehNegative = number < 0;
    const maiorQue10 = number > 10;

    if(ehNegative) {
        return "this number is Negative";
    } else if (!ehNegative && maiorQue10) {
        return "This number is positivo and bigger then"
    }
    return "this number is positive";

}


//Switch Case equivale uma comparação tipo e value sempre precisa de default
//ideal para comprar muitos values
function getAnimal(id) {
    switch(id) {
        case 1 :
        return "cachorro";
        case 2 :
            return "cat";
        case 3 :
            return "fish";
        default:
             return "hen";
            
    }
}

getAnimal(1) // cachorro
getAnimal(4) // hen
getAnimal("2") // hen pq e string entende algo diferente tipo e value
