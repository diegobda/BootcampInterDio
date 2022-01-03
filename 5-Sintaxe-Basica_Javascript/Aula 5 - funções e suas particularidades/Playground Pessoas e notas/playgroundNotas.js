
const study = [
    {
        nome: 'Soraia',
        nota: 8,
        turma: '1d'
    },
    {
        nome: 'Margarida',
        nota: 3,
        turma: '3b'
    },
    {
        nome: 'Leticia',
        nota: 7,
        turma: '4b'
    },
];

function alunosAprovados ( a, m) {
    let aprovados = [];

    for (let i = 0; i < a.length; i++) {
        const {nota, nome} = a[i];

        if(nota >= m) {
            aprovados.push(nome);
        }
    }

    return aprovados;
};

console.log(alunosAprovados(study, 6));

