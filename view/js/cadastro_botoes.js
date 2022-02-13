function cadastrar() {
  if (validSenha && validConfirmarSenha && validaEmail) {
    location.assign("../../index.html")
  } else {
    document.getElementById('senha').setAttribute('style', 'border: 4px solid red');
    document.getElementById('confirmarSenha').setAttribute('style', 'border: 4px solid red');
    document.getElementById('email').setAttribute('style', 'border: 4px solid red');
    alert('Por favor, preencha os campos corretamente');
  }
}

function voltar() {
  let confirmou;
  confirmou = confirm("Tem certeza que deseja voltar ao Login?");

  if (confirmou == true) {
    location.assign("../login/login.html");
  } else {
    location.reload();
  }

}