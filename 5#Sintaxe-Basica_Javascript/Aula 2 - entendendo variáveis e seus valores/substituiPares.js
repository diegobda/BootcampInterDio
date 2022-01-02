function substNumberPares(a) {
    if(!a.length) return -1;

    for (let i = 0; i < a.length; i++) {
        if(a[i] === 0) {
            console.log("This number is zero!")
            } else if (a[i] % 2 === 0) {
                console.log(`Replaced ${a[i]} to 0...`);
                a[i] = 0;
            }
    }
    return a;
}

let a = [1, 3, 4, 6, 80, 33, 23, 90];

substNumberPares[a];

console.log(substNumberPares(a));
console.log(substNumberPares([])); // return -1
console.log(substNumberPares([false])); // retun 0
console.log(substNumberPares([null]));// retun 0
