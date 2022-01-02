//Manipular this with Apply ok man

const pessoa = {
    nome: 'Diego',
};

const animal = {
    nome : 'Lindio',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);

const myObj = {
    number : 1,
    number2 : 8,
};

function soma (a, b) {
    console.log(this.number + this.number2 + a + b);
}

soma.call(myObj, 21, 5);

const meta = {
    nome: 'Passar ',
};

const objetivo = {
    nome: 'No desafio',
};

function getSomething () {
    console.log(this.nome);
}

getSomething.apply(meta);
getSomething.apply(objetivo);

// função bind

//clona  ESTRUTURA

const retornaNome = function () {
    return this.name;
};

let diego = retornaNome.bind({ name: 'Diego'});

diego();