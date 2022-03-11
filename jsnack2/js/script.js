console.log('js ok')


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.



const numberArrey = [];

for(let i = 0; i < 6; i++){
    let number;
    while (isNaN(number)){
        number = parseInt(prompt(`${i+1} Inserisci un numero`));
        
    }
    if(number % 2 !== 0){
        numberArrey.push(number);
    }

}

console.log('i numeri dispari che hai inserito sono; ' + numberArrey);