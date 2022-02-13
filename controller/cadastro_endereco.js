const numero = (num) => /^[0-9]+$/.test(num);
const validCep = (cep) => cep.length == 8 && numero(cep);

const pesquisarCep = async () => {
  limparForm();

  const cep = document.getElementById('cep').value.replace("-", "");
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (validCep(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty("erro")) {
      document.getElementById('cep').value = 'CEP não encontrado 🙁';
    } else {
      preencherForm(endereco);
    }
  } else {
    document.getElementById('cep').value = 'CEP incorreto 🧐';
  }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
