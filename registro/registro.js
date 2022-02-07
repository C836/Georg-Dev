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
    document.getElementById('cep').value = 'CEP incorreto 🧐'
  }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

