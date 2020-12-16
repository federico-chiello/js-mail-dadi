// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Inseriamo le variabili dei giocatori
var giocatore = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;

document.getElementById('utente').innerHTML = giocatore;
document.getElementById('utente-due').innerHTML = computer;


// **** Primo metodo *****

// variabile risultato
var risultatoFinale = 'Parità'; // Con questo metodo riduciamo il codice perché si inserisce direttamente la terza condizione, senza scriverla sotto con else.

// Inseriamo le istruzioni condizionali per realizzare il gioco e fare vincere il giocatore con il punteggio più alto.
if (giocatore > computer) {
  risultatoFinale = 'Ha vinto il giocatore';
} else if (computer > giocatore) {
  risultatoFinale = 'Ha vinto il computer';
}

document.getElementById('risultato').innerHTML = risultatoFinale;



// ***** Secondo metodo ******

// variabile risultato
// var risultatoFinale;

// Inseriamo le istruzioni condizionali per realizzare il gioco e fare vincere il giocatore con il punteggio più alto.
// if (giocatore > computer) {
//   risultatoFinale = 'Ha vinto il giocatore';
// } else if (computer > giocatore) {
//   risultatoFinale = 'Ha vinto il computer';
// } else {
//   risultatoFinale = 'Parità';
// }
//
// document.getElementById('risultato').innerHTML = risultatoFinale;



// ***** Terzo metodo ****** (CODICE TROPPO LUNGO)

// variabili
// var vincitoreUno = 'Giocatore';
// var vincitoreDue = 'Computer';
// var pareggio = 'Parità';
//
// // Inseriamo le istruzioni condizionali per realizzare il gioco e fare vincere il giocatore con il punteggio più alto.
// if (giocatore > computer) {
//   document.getElementById('risultato').innerHTML = 'Ha vinto: ' + vincitoreUno;
// } else if (computer > giocatore) {
//   document.getElementById('risultato').innerHTML = 'Ha vinto: ' + vincitoreDue;
// } else {
//   document.getElementById('risultato').innerHTML = ' ' + pareggio;
// }
