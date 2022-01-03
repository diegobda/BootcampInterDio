//Solução 1 palidromo Inter
function verificaPalidrom(string) {
    if(!string) return "String nao existe";

    return string.split("").reverse().join("") === string;
}

let myPal = null;

console.log(verificaPalidrom(myPal));


// Solução two 

function verificaPalidrom2(string) {
    if(!string) return "String no existe padre quevedo";

    for (let i = 0; i < string.length / 2; i++) {
       if(string[i] !== string[string.length -1 -i]) {
           return false;
       }
    }
    return true;
}
console.log(verificaPalidrom2("oddo"));
