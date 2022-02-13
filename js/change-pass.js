 function validaEmail(){
        const email = document.getElementById('email')
        const voltar = document.getElementById('voltar')
        const btn = document.getElementById('enviar_troca_senha')
        const underlineErrorEmail = document.getElementById('underline-email-error')
        const spanError = document.getElementById('error-email') 

        //validando email
        if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
            
            underlineErrorEmail.classList.add("underlinePadrao");
            spanError.style.display = 'block';
            spanError.style.color = 'red';
            spanError.innerText = 'Digite um email válido'
        }
        else{
            underlineErrorEmail.classList = "underline"
            spanError.style.display = 'none';
            console.log('clica mais');
            spanError.style.display = 'block';
            spanError.style.color = 'blue';
            spanError.innerText = 'A sua nova senha foi enviada para o seu email'
            email.style.display = 'none';
            btn.style.display = 'none';
            voltar.style.display = 'block';
            

        }
    }

