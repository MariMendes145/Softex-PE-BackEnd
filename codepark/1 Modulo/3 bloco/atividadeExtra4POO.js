/*Crie uma classe chamada calculadora. Receba dois números como
parâmetros no construtor. Crie quatro métodos para calcular as quatro
operações matemáticas: Adição, subtração, divisão e multiplicação.
Quando criado o objeto é mandado para o construtor 2 números e quando
chamarmos os métodos mostra o resultado.*/
class Calculadora {
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  adicao() {
    let soma = this.numero1 + this.numero2;
    return soma;
  }

  subtracao() {
    let subtracao = this.numero1 - this.numero2;
    return subtracao;
  }

  divisao() {
    let divisao = this.numero1 / this.numero2;
    return divisao;
  }

  multiplicacao() {
    let multiplicacao = this.numero1 * this.numero2;
    return multiplicacao;
  }
}

//instanciando objeto
const calculadora1 = new Calculadora(15, 3);
console.log(`Resultado da adição: ${calculadora1.adicao()}`);
console.log(`Resultado da subtração: ${calculadora1.subtracao()}`);
console.log(`Resultado da divisão: ${calculadora1.divisao()}`);
console.log(`Resultado da multiplicação: ${calculadora1.multiplicacao()}`);
