function calIdade(anos) {
    return ` Daqui a ${anos} anos, ${this.nome} tera ${
    this.idade + anos
    } anos de idade`;
}
const pessoa1 = {
    nome: 'Maria',
    idade: 15,
};
const pessoa2 = {
    nome: "Diego",
    idade: 16,
};
const pessoa3 = {
    nome: "Diogo",
    idade: 25,
};

console.log(calIdade.call(pessoa3, 30));
console.log(calIdade.apply(pessoa3, [4]));
