const read = require("readline-sync");

function verificarNprimo(numeroPrimo) {
  if (numeroPrimo <= 1) {
    return false;
  }
  if (numeroPrimo <= 3) {
    return true;
  }
  if (numeroPrimo % 2 === 0 || numeroPrimo % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= numeroPrimo) {
    if (numeroPrimo % i === 0 || numeroPrimo % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}
const numeroPrimo = Number(read.question("Digite um numero:"));
if (verificarNprimo(numeroPrimo)) {
  console.log(`${numeroPrimo} é um número primo.`);
} else {
  console.log(`${numeroPrimo} não é um número primo.`);
}
