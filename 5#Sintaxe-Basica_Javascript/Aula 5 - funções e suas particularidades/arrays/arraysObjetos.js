//Array spread: uma dorma de separar os elementos

function su( x, y, z) {
    return x + y + z;
}

const numbers = [1, 3, 4];

console.log(su(...numbers));

//Array Rest: Combina os argumentos em um array

function confereTam(...args) {
    console.log(args.length)
}

confereTam() // 0
confereTam(1, 2) // 2
confereTam(3, 4, 5) // 3


//Objetos Destructuring

const user = {
    id: 40,
    displayName: 'Dsantos',
    fullName: {
        firstName: 'Diego',
        lastName: 'Santos',
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user)
//40

getFullName(user)
// Diego Santos