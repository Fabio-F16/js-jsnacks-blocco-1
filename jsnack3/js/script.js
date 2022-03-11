console.log('js okaaaaaw')

// Chiedi un numero di 4 cifre all’utente e 
// calcola la somma di
// tutte le cifre che compongono il numero. 



let numeroUtente;
while (isNaN(parseInt(numeroUtente)) || numeroUtente.length !== 4){
    numeroUtente = prompt("Inserisci un numero di quattro cifre");
}
let sommaCifre= 0;

for(let i=0; i < numeroUtente.length; i++){
    sommaCifre += parseInt(numeroUtente[i]);
}
console.log(`La somma delle cifre del numero è ${sommaCifre}`)