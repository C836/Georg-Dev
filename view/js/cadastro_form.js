'use strict';

function select(num) {
  $('.carousel').carousel('pause');
}

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