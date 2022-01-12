function somaN(a) {
     return a.reduce(function(prev, current) {
         console.log({prev});
         console.log({current});
         return prev + current;
     }, 0);    
}

const a = [ 1, 2];
console.log(somaN(a));