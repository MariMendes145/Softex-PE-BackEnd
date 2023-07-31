/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */

const read = require("readline-sync");

function calcular2numeros(numero1, numero2, operacao) {
  numero1 = Number(read.question("Digite um numero: "));
  numero2 = Number(read.question("Digite outro numero: "));
  operacao = read.question("Escolha a operacao que deseja realizar(+,-,*,/): ");

  if (operacao == "+") {
    let soma = numero1 + numero2;
    return console.log(
      "A soma dos valores: " + numero1 + " + " + numero2 + " = ",
      soma
    );
  } else if (operacao == "-") {
    let subtracao = numero1 - numero2;
    return console.log(
      "A subtracao dos valores: " + numero1 + " - " + numero2 + " = ",
      subtracao
    );
  } else if (operacao == "*") {
    let multiplicacao = numero1 * numero2;
    return console.log(
      "A multiplicacao dos valores: " + numero1 + " * " + numero2 + " = ",
      multiplicacao
    );
  } else if (operacao == "/") {
    let divisao = numero1 / numero2;
    return console.log(
      "A divisao dos valores: " + numero1 + " / " + numero2 + " = ",
      divisao
    );
  } else if (operacao !== "+" || operacao !== "-" || "*" || "/") {
    return console.log(0);
  }
}
calcular2numeros();
