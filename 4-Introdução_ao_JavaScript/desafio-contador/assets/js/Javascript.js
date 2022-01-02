// Função incremento 'add'
document.getElementById("add").addEventListener("click", increment); 

// Função decremento'sub'
document.getElementById("sub").addEventListener("click", decrement);

// Invocar as variaveis 
let buttonSub = document.getElementById("sub");
let buttonAdd = document.getElementById("add");

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

// Função alterar cores positivo negativo e zeo
function mudarCor() {
  if(count < 0){
    CURRENT_NUMBER.style.color = "red";
  } else if (count === 0){
    CURRENT_NUMBER.style.color = "black"
  } else {
    CURRENT_NUMBER.style.color = "blue";
  }
}


function increment() {
  // Habilita o botão e realiza o incremento ao clicar nele
  count++;
  buttonSub.disabled = false;
  CURRENT_NUMBER.innerHTML = count;


  // Incremento maximo 20
  if(count === 20){
    buttonAdd.disabled = true;
  } else {
    buttonAdd.disabled = false;
  }

  // Invoca função cor
  mudarCor();
}

  // Habilita decremento
function decrement() {
  count--;
  buttonAdd.disabled = false;
  CURRENT_NUMBER.innerHTML = count;

  // Decremento -20 maximo
  if(count === -20){
    buttonSub.disabled = true;
  } else {
    buttonSub.disabled = false;
  }

  // alterar cores
  mudarCor();
}