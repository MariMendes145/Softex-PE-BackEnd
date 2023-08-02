/* Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas. */
//criando as 3 listas
let nome = [
  "Amanda",
  "Beatriz",
  "Carlos",
  "Diego",
  "João",
  "José",
  "Marianne",
  "Mirian",
  "Rodrigo",
  "Pedro",
];
let idade = [25, 20, 21, 22, 18, 30, 32, 36, 22, 21];
let cores = [
  "azul",
  "rosa",
  "preto",
  "vermelho",
  "branco",
  "preto",
  "preto",
  "verde",
  "preto",
  "vermelho",
];
// imprimindo as 3 listas
console.log("Lista de nomes inicial: ", nome);
console.log("Lista de idade inical: ", idade);
console.log("Lista de cores inicial: ", cores);
//alterando cor e idade da indice 5
idade[5] = 32;
cores[5] = "vinho";
// imprimindo as 3 listas com as alterações
console.log("Lista de nomes inicial", nome);
console.log("Lista com alteração de dados:", idade);
console.log("Lista com alteração de dados: ", cores);
