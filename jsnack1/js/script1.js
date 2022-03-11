// console.log('js ok')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const invitati = ['Elena', 'Marco', 'Alberto', 'Daniele', 'Diego', 'Fabio', 'Francesca'];
const yourName = prompt('Come ti chiami?');
let nonPresente = false;


if(yourName){

    for (let i = 0; i < invitati.length && !nonPresente; i ++){
        const validName = invitati[i];

        if(yourName === validName){
            nonPresente = true;
        }   
    }
}

if (nonPresente){
    console.log('Sei stato invitato! Puoi accedere');
}else{
    console.log('Non sei stato invitato, mi dispiace :-(');
}

 
        