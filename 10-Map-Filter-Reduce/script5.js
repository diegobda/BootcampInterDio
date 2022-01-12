const list = [
    {
        name:'Sabao barra',
        preco: 30,
    },
    {
        name:'Bolachaa',
        preco: 12,
    },

    {
        name:'Arroz',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculoSaldo(saldoDisponivel, list) {
    return list.reduce(function(prev, current, index) {
        console.log('rodada', index++);
        console.log({ prev });
        console.log({ current });

        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculoSaldo(saldoDisponivel, list));