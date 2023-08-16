/*Receber um salario de um trabalhador e o valor da prestação de um empréstimo. Se a prestação for maior do que 20% do salario imprima “Emprestimo não concedido”, caso ao contrario imprima “ Emprestimo autorizado “. */

const read = require("readline-sync");
let salario = Number(read.question(`Informe o valor do seu salario:`));
let prestacaoEmprestimo = Number(
  read.question(`Informe o valor da prestacao do emprestimo:`)
);
limiteconcessaoEmp = 0.2 * salario;
if (prestacaoEmprestimo > limiteconcessaoEmp) {
  console.log("Emprestimo não concedido!");
} else {
  console.log("Emprestimo autorizado!");
}
