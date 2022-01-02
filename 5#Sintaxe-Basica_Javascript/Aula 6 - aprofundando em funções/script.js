var jogador1 = 1;
var jogador2 = 0;
var placar;

// if normal is // if (jogador1 != -1) {

// if ternario ----->
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos') :
console.log('jogadores invalidos');

// Usando if
if (jogador1 > 0 && jogador2 == 0) {
        console.log('jogador1 Marco ponto!');
        placar = jogador1 > jogador2;

// Usando else if
}
else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou ponto!'); 
        placar = jogador2 > jogador1;  

}
// Usando else  
else {
        console.log('Ninguem marcou pronto!');
}


switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 Ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 Ganhou');
        break;
    default:
        console.log('Ninguem ganhou!');
}