console.log('js ok')


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.



const numberArrey = [];

for(let i = 0; i < 6; i++){
    let number = parseInt(prompt("Inserisci un numero"));
    
    if(isNaN(number) != (number % 2)){
        numberArrey.push(number);
        console.log(numberArrey);
    }
    
}

