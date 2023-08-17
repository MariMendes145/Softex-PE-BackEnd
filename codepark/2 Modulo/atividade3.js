/*A atividade que faremos é a da "calculadora de média". Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado
no console Primeiro, solicite que o usuário insira très notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3 com o tipo de dado Number. Depois, some as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().*/
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

function calculadoraMedia() {
  while (true) {
    let nota1 = Number(prompt("Informe sua primeira nota entre (0 a 10): "));
    let nota2 = Number(prompt("Informe sua segunda nota entre (0 a 10): "));
    let nota3 = Number(prompt("Informe sua terceira nota entre(0 a 10): "));
    if (
      (nota1 >= 0 && nota1 <= 10,
      nota2 >= 0 && nota2 <= 10,
      nota3 >= 0 && nota3 <= 10)
    ) {
      let media = (nota1 + nota2 + nota3) / 3;
      console.log("Média:", media.toFixed(2));
      break;
    } else {
      console.log("Nota inválida, informe nota entre 0 a 10");
    }
  }
}

calculadoraMedia();
