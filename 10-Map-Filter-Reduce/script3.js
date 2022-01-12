function filterPar(a) {
    return a.filter(callback)
}

function callback(i) {
    return i % 2 === 0;
}

const myArray = [1, 23, 53, 64, 35, 21, 44];

console.log(filterPar(myArray));