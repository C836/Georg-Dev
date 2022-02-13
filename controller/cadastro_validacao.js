/////////////////////VALIDAÇÃO DE EMAIL
let validEmail = document.querySelector('#email');
var validaEmail = false;

email.addEventListener('keyup', () => {
  var email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    document.getElementById('email').setAttribute('style', 'border: 4px solid green');
    validaEmail = true;
  } else {
    document.getElementById('email').setAttribute('style', 'border: 4px solid #990014');
    validaEmail = false;
  }
});

//////////////////////// VALIDAÇÃO DE SENHAS
let senha = document.querySelector('#senha');
var validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha');
var validConfirmarSenha = false;

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 3) {
    document.getElementById('senha').setAttribute('style', 'border: 4px solid #990014');
    validSenha = false;
  } else {
    document.getElementById('senha').setAttribute('style', 'border: 4px solid green');
    validSenha = true;
  }
});

confirmarSenha.addEventListener('keyup', () => {
  if (senha.value != confirmarSenha.value) {
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid #990014');
    validConfirmarSenha = false;
  } else {
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid green');
    validConfirmarSenha = true;
  }
});