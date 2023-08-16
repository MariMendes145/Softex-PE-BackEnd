/* Desenvolver um programa que efetue a leitura de dez elementos de uma array A.
Construir uma array B do mesmo tipo, observando a seguinte lei de formação: se o valor
do índice for par, o valor deverá ser multiplicado por 5. Sendo ímpar, deverá ser somado
com 5. Ao final mostrar o conteúdo do array B.*/

const read = require("readline-sync");
function listaA() {
  const arrayA = [];
  for (let i = 0; i < 10; i++) {
    let elemento = Number(
      read.question(`Digite o elemento ${i + 1} da array A:`)
    );
    arrayA.push(elemento);
  }
  return arrayA;
}

function listaB(arrayA) {
  const arrayB = arrayA.map((elemento) => {
    if (elemento % 2 == 0) {
      return elemento * 5;
    } else if (elemento % 2 == 1) {
      return elemento + 5;
    }
  });

  return arrayB;
}

// Função para exibir o conteúdo de uma array
function mostrarArray(array, nome) {
  console.log(`Conteúdo da array ${nome}: [${array.join(", ")}]`);
}

// Programa principal
const arrayA = listaA();
const arrayB = listaB(arrayA);

mostrarArray(arrayA, "A");
mostrarArray(arrayB, "B");
