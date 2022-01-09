/*const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const boyCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();


        return json.webpurl;
    }catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await boyCats();
}

catBtn.addEventListener('click', loadImg);
loadImg();
*/

//METODO 2*/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const boyCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));
        
    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await boyCats();
};

catBtn.addEventListener('click', loadImg);
loadImg();
