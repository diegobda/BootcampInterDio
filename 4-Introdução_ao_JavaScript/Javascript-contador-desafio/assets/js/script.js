let numContainer = document.getElementById('num');
let value = 0;
let btnInc = document.querySelector('.inc');
let btnDec = document.querySelector('.dec');

btnInc.addEventListener("click", () => {value++, numContainer.textContent = value});

btnDec.addEventListener("click", () => {value--, numContainer.textContent = value});

// Função que muda a cor dos números se forem negativos, zero ou positivos
function setColor() {
    if(count < 0){
        num.style.color = "#f08080";
    } else if (count === 0){
        num.style.color = "#000"
    } else {
        num.style.color = "#32bd67";
    }
  }