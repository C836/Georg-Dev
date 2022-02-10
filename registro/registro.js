'use strict';

const limparForm = () => {
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
}

const preencherForm = (endereco) => {
  document.getElementById('endereco').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('uf').value = endereco.uf;
  document.getElementById('cidade').value = endereco.localidade;
}

const numero = (num) => /^[0-9]+$/.test(num);
const validCep = (cep) => cep.length == 8 && numero(cep);

const pesquisarCep = async() => {
  limparForm();

  const cep = document.getElementById('cep').value.replace("-", "");
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if(validCep(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty("erro")) {
      document.getElementById('cep').value = 'CEP não encontrado 🙁';
    }else{
      preencherForm(endereco);
    }
  }else{
    document.getElementById('cep').value = 'CEP incorreto 🧐';
  }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);


/////////////////////VALIDAÇÃO DE EMAIL
let validEmail = document.querySelector('#email');
var validaEmail = false;

email.addEventListener('keyup', () => {
  var email  = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    document.getElementById('email').setAttribute('style', 'border: 4px solid green');
    validaEmail = true;
  }else {
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
  if(senha.value.length <= 3){
    document.getElementById('senha').setAttribute('style', 'border: 4px solid #990014');
    validSenha = false;
  }else{
    document.getElementById('senha').setAttribute('style', 'border: 4px solid green');
    validSenha = true;
  }
});

confirmarSenha.addEventListener('keyup', () => {
  if(senha.value != confirmarSenha.value){
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid #990014');
    validConfirmarSenha = false;
  }else{
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid green');
    validConfirmarSenha = true;
  }
});


function cadastrar() {
  if (validSenha && validConfirmarSenha && validaEmail) {
    location.assign("../login/login.html")
  }else {
    document.getElementById('senha').setAttribute('style', 'border: 4px solid red');
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid red');
    document.getElementById('email').setAttribute('style', 'border: 4px solid red');
    alert('Por favor, preencha os campos corretamente');
  }
}

function voltar() {
  let confirmou;
  confirmou = confirm("Tem certeza que deseja voltar ao Login?");

  if(confirmou == true) {
    location.assign("../login/login.html");
  }else {
    location.reload();
  }

}