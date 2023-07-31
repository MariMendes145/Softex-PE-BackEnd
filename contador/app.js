let contador = 0;
const contadorElemento = document.getElementById("contador");

function incrementar() {
  contador = contador + 1;
  contadorElemento.innerHTML = contador;
}

function decrementar() {
  contador = contador - 1;
  contadorElemento.innerHTML = contador;
}

function resetar() {
  contador = 0;
  contadorElemento.innerHTML = contador;
}
