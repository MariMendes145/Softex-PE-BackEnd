/*Desenvolver um programa que efetue a leitura de cinco elementos de uma array A. No
final, apresente o total da soma de todos os elementos que sejam ímpares.*/

const read = require("readline-sync");
function lista() {
  let arrayA = [];
  for (let i = 0; i < 5; i++) {
    let elemento = Number(
      read.question(`Digite o elemento ${i + 1} da lista A:`)
    );
    arrayA.push(elemento);
    somaElementos = arrayA.reduce(function (soma, i) {
      return soma + i;
    });
  }
  console.log("Lista com 5 números:", arrayA);
  console.log("Soma elementos: ", somaElementos);
}
lista();
