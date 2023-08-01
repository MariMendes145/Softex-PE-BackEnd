/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

const read = require("readline-sync");

function dadosUsuario() {
  nomeCompleto = String(read.question("Informe seu nome completo: "));
  calcularIdade();
}
dadosUsuario();

function calcularIdade() {
  const anoAtual = 2023;
  while (anoAtual === 2023) {
    anoNascimento = Number(read.question("Informe o seu ano de nascimento: "));
    idade = anoAtual - anoNascimento;
    if (anoNascimento >= 1922 && anoNascimento <= 2022) {
      console.log(
        "Nome: ",
        nomeCompleto + "\n" + "Idade: " + idade + " anos de idade em 2023."
      );
      break;
    }

    function UserException(message) {
      this.message = message;
      this.name = "UserException";
    }
    try {
      if (anoNascimento < 1922 || anoNascimento > 2022) {
        throw new UserException(
          "Informe um ano válido! O ano de nascimento deve ser maior que 1921 e menor que 2023!"
        );
      } else if (idade !== "") {
        throw new UserException(
          "Informe um ano válido! Foi digitado uma letra!"
        );
      }
    } catch (error) {
      console.log("mensagem:", error.message);
      console.log("name", error.name);
    }
  }
}
