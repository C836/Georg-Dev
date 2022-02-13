function cadastro() {
  document.getElementById("insCaixa").style.opacity = 0;
  document.getElementById("insCaixa").style.visibility = "hidden";
  document.getElementById("insCad").style.display = "block";
  setTimeout(function () {
    document.getElementById("insCaixa").style.display = "none";
    document.getElementById("insCad").style.display = "block";
    document.getElementById("insCad").style.opacity = 1;
    document.getElementById("insCad").style.visibility = "visible";
  }, 400);
}

function next() { $('.carousel').carousel('next'); }
function prev() { $('.carousel').carousel('prev'); }
