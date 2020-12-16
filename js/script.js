// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Inseriamo le variabili
var giocatore = Math.floor(Math.random() * 6) + 1;
// console.log(giocatore);
var computer = Math.floor(Math.random() * 6) + 1;
// console.log(computer);

document.getElementById('utente').innerHTML = giocatore;
document.getElementById('utente-due').innerHTML = computer;


var vincitoreUno = 'Giocatore';
var vincitoreDue = 'Computer';
var pareggio = 'Parità';

// Inseriamo le istruzioni condizionali per realizzare il gioco e fare vincere il giocatore con il punteggio più alto.
if (giocatore > computer) {
  document.getElementById('risultato').innerHTML += 'Ha vinto:' + vincitoreUno;
} else if (computer > giocatore) {
  document.getElementById('risultato').innerHTML += 'Ha vinto:' + vincitoreDue;
} else if(computer == giocatore) {
  document.getElementById('risultato').innerHTML += '' + pareggio;
}
