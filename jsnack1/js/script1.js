console.log('js ok')

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const invitati = ['elena', 'Marco', 'Alberto', 'Daniele', 'Diego', 'Fabio', 'Francesca'];
const yourName = prompt('Come ti chiami?');
let presente = false;


if(yourName){

    for (let i = 0; i < invitati.length; i ++){
        const validName = invitati[i];

        if(yourName === validName){
            presente = true;
        }   
    }
}

if (presente){
    console.log('Sei stato invitato! Puoi accedere');
}else{
    console.log('Non sei stato invitato, mi dispiace :-(');
}

 
        