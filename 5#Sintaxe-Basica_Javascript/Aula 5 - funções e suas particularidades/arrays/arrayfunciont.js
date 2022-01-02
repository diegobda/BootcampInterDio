// sintaxe arrow function não faz hoisting

const helloWorld = () => "Hello World";

const soma = (a, b) => a + b;
soma(5, 5);


soma1(2, 4);
function soma1(d, e) {
    return d + e;
}

/*Aula 5 etapa 2 outras restriçoes this sempre sera o objeto global.
-Métodos para modificar seu valor nao irao funcionar.
- nao existe o objeto ``arguments``; 
-O construtur (ex new meuobjeto()) tambem nao pode ser utilizado */



