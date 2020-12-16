// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var giocatore = Math.floor(Math.random() * 6) + 1;
// console.log(giocatore);

document.getElementById('utente').innerHTML = giocatore;

var computer = Math.floor(Math.random() * 6) + 1;
// console.log(computer);

document.getElementById('utente-due').innerHTML = computer;
