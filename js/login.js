const button = document.getElementById('main-button');
const changePassButton = document.getElementById('change-pass');


button.addEventListener('click', (event) =>{
    event.preventDefault()

    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const underlineErrorEmail = document.getElementById('underline-email-error')
    const underlineErrorPassword = document.getElementById('underline-password-empty')
    const spanError = document.getElementById('error-email') 
    const spanErrorSenha = document.getElementById('error-senha')


    // Validação do email. 
    function validaEmail(){
        if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){

            underlineErrorEmail.classList.add("underlinePadrao")
            spanError.style.display = 'block';
            spanError.style.color = 'red';
            
        }
        else{
            underlineErrorEmail.classList = "underline"
            spanError.style.display = 'none';
            console.log('caiu errado')

        }
    }
        
   
    // Validacao senha
    function validaSenha(){
        const textLength = password.value.length;
    if (password.value == '' || textLength <=8){
        underlineErrorPassword.classList.add("underlinePadrao")
        spanErrorSenha.style.display = 'block';
        spanErrorSenha.style.color = 'red';
        password.placeholder = 'A senha deve conter no mínimo 8 dígitos'

    }
    else{
        underlineErrorPassword.classList = 'underline'
        spanErrorSenha.style.display = 'none';
        
    }
}
validaSenha();
validaEmail();
});

