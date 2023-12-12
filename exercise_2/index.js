const { createApp } = Vue
//https://softauthor.com/vuejs-prevent-form-submission/


createApp({
    data() {
      return {
        author: 'Jorge Antonio Moreno',
        suscribe_done: false,
        email_suscriptor: null,
        email_is_valid:true
      }
    },
    methods: {
      suscribe(e){
        e.preventDefault();
        console.log(this.email_suscriptor);
        if (!this.is_valid_suscription_email()) {
          console.error("Invalid Email!");
          this.email_is_valid=false
          return;
        }
        this.email_is_valid=true
        this.suscribe_done=true
      },
      is_valid_suscription_email(){
        const email_regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return email_regex.test(this.email_suscriptor)
      },
      reset_suscription(){
        this.suscribe_done=false
        this.email_suscriptor=null
        this.email_is_valid=true
      }
    },
    computed:{
      email_validate_class(){
        if (this.email_is_valid) {
          return 'email-submit'
        }else{
          return 'email-submit-error'
        }
      }
    }
}).mount('#app')