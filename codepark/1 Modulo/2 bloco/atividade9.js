/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

const read = require("readline-sync");
function EscolhaCandidato() {
  while (true) {
    console.log(
      "Escolha o candidato que deseja votar:\n 1-Candidato X = 889\n 2-candidato Y = 847\n 3-candidato Z = 515\n 4-Sair(Digite: 4)"
    );
    let votacao = Number(
      read.question("Informe o numero do candidado que deseja escolher: ")
    );
    if (votacao === 889) {
      console.log("Voto computado! Voce votou no candidato X!");
      resultado_candidatoX = votacao;
    } else if (votacao === 847) {
      console.log("Voto computado! Voce votou no candidato Y!");
      resultado_candidatoY = votacao;
    } else if (votacao === 515) {
      console.log("Voto computado! Voce votou no candidato Z!");
      resultado_candidatoZ = votacao;
    } else if (votacao !== 889 || votacao !== 847 || votacao !== 515) {
      console.log("Voto computado! Você votou nulo!");
      try {
        if (votacao == " ") {
          throw new Error(
            "Ação inválida! Informe um número de candidato ou se deseja sair do programa!"
          );
        }
      } catch {
        console.log("mensagem:", error.message);
      }
    } else if (votacao == 4) {
      sair = read.question("Deseja encerrar a votação? Digite (4) : ");
    }
  }
}

EscolhaCandidato();
