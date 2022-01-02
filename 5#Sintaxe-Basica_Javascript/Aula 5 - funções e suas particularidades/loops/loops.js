//Loops ensinar como utilizar javascrip
//if and else
function numPos(num) {
    let result;
    
    if(num < 0) {
        result = false;
    } else {
        result = true;
    }

    return result;
}

numPos(2)
numPos(-2)

//Outras maneiras do mesmo código

function numPos(num) {
    let result;

    const ehNeg = num < 0;

    if(ehNeg) {
        result = false;
    }else {
        result = true;
    }
    
    return result;
}

//outra maneira mais fatorado ainda
function numPos(num) {
    const ehNeg = num < 0;

    if(ehNeg) {
        return false;
    }

    return true;
}

// Alinhar IF UM NO OUTRO
function numPos(num) {
    const ehNeg = num < 0;
    const maiorQue10 = num > 10;

    if(ehNeg) {
        return "this number is negativo";
    } else if (!ehNeg && maiorQue10) {
        return "This numer is positivo maior que 10"
    }
    return "This numer is positivo";
}

// witch case equivale a comparação de tipo e values

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