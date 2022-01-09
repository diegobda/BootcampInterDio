//Estrurura promises

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('resolvida');
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    // Após 2 segundos, retornará o valor
    //"Resolvida passando pelo then e agora acabou"

//Async/await
//Funçoes assíncronas precisam dessas duas palavras chaves

async function resolvePromise(){
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('resolvida');
    }, 3000);
});

const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    return resolved;
}

//Async/await
//TRY catch

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('resolvida');
        }, 3000);
    });

    let result;
    
    try {
        result = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    } catch (err) {
        result = err.message;
    }    
        return result;
}
   
//FETCH CONSUMINDO APIs
//pode fazer operações no banco(POST, GET, PUT, DELETE, OPTIONS)

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))


    

//exemplos GET
fetch('https://endreco-api.com', { 
    method: 'GET',
    cache: 'no-cache',
})
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma promise


//exemplo post
fetch('https://endreco-api.com', { 
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
//retorna uma promise