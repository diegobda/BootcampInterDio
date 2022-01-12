const maça = {
    value: 2,
}

const laranja = {
    value:3,
}

function mapthis (a, thisArg) {
    return a.map(function (item) {
     return  item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('This -> maça', mapthis(nums, maça));
console.log('This -> Laranja', mapthis(nums, laranja));