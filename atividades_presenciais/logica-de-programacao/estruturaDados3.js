/*Ler 20 elementos de uma matriz A do tipo vetor e construir uma matriz B de
mesma dimensão com os mesmos elementos da matriz A, sendo que deverão
estar invertidos. Ou seja, o primeiro elemento de A passa a ser o último de B, o
segundo elemento de A passa a ser o penúltimo de B e assim por diante.
Apresentar as matrizes A e B.*/

const read = require("readline-sync");
const matrizA = [];

for (let i = 0; i < 20; i++) {
  let elementosMatrizA = Number(
    read.question(`Digite o elemento ${i + 1} da matriz A:`)
  );
  matrizA.push(elementosMatrizA);
}
const matrizB = matrizA.slice().reverse();
console.log("Matriz A", matrizA);
console.log("Matriz B", matrizB);
