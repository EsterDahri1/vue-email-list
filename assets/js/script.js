/*
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. ✔️
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. ✔️
*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmails: [],
      }
    },

    mounted(){

        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.randomEmails.push(response.data.response)
            })
            
        }        
        
        /*axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            console.log(response);

           this.randomEmails = response.data.response
            console.log(response.data.response);
        })*/
    }
  }).mount('#app')