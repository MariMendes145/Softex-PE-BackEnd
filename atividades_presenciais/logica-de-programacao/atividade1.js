const numeros = [0, 1, 2, 3, 4, 5];
const itemDoNumeros = numeros.forEach((numeros) => {
  if (numeros % 2 == 0) {
    console.log(numeros, "é par");
  } else {
    console.log(numeros, "é ímpar");
  }
});
console.log(itemDoNumeros);
