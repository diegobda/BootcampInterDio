function mapThis(a) {
    return a.map(function(item) { 
        return item *2;
    });
}

const nums = [ 2, 4, 6, 8, 10];

console.log(mapThis(nums));
