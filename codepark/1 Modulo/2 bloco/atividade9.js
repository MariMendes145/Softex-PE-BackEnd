/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

const read = require("readline-sync");
//Definindo variáveis de cada opção de voto e contador no inicio 0
let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let nulo = 0;

function verificarVotacao() {
  const candidatos = {
    CandidatoX: 889,
    CandidatoY: 847,
    CandidatoZ: 515,
    Branco: 0,
  };
  console.log(candidatos); //mostrando numeros dos candidatos

  while (true) {
    let votacao = Number(
      read.question("Informe o numero do candidado que deseja votar: ")
    );
    if (votacao == 889) {
      console.log("Voto computado! Voce votou no candidato X!");
      resultadoCandX = candidato_X += 1; // computa o voto
    } else if (votacao == 847) {
      console.log("Voto computado! Voce votou no candidato Y!");
      resultadoCandY = candidato_Y += 1;
    } else if (votacao == 515) {
      console.log("Voto computado! Voce votou no candidato Z!");
      resultadoCandZ = candidato_Z += 1;
    } else if (votacao !== 889) {
      console.log("Voto computado! Você votou nulo!");
      resultadoNulo = nulo += 1;
    }
    while (votacao == true) {}
    sair = String(read.question("Deseja encerrar a votacao? Digite(S/N)! "));
    if (sair == "S") {
      console.log("Encerrando o programa!");
      console.log(
        "Resultado da eleição:\n" + "Candidato X: ",
        candidato_X + " votos\n" + "Candidato Y: ",
        candidato_Y +
          " votos\n" +
          "Candidato Z: " +
          candidato_Z +
          " votos\n" +
          "Votos Nulos: " +
          nulo +
          " votos"
      );
      verificarVencedor();
      break;
    } else if (sair == "N") {
      continue;
    }
  }
}
verificarVotacao();

function verificarVencedor() {
  // Verifica o vencedor
  if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
    console.log("O vencedor é o candidatoX com", candidato_X, "votos.");
  } else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
    console.log("O vencedor é o candidato Y com", candidato_Y, "votos.");
  } else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
    console.log("O vencedor é o candidato Z com", candidato_Z, "votos.");
  } else {
    console.log(
      "Os votos computados são nulos ou deu empate, refaça a eleição!"
    );
  }
}
