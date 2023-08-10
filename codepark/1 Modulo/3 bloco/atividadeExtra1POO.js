/* Escreva uma classe cujos objetos representam alunos matriculados em
uma disciplina. Cada objeto dessa classe deve guardar os seguintes
dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho.
Escreva os seguintes métodos para esta classe:
media - calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2)
final - calcula quanto o aluno precisa a prova final(retorna zero se ele nao for para final)*/
// criando classe e construtor
class Aluno {
  constructor(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
    this.matricula = matricula;
    this.nome = nome;
    this.notaProva1 = notaProva1;
    this.notaProva2 = notaProva2;
    this.notaTrabalho = notaTrabalho;
  }
  // criando as funções
  calculaMediaPonderada() {
    const pesoProva = 2.5;
    const pesoTrabalho = 2;
    let somaDosPesos = pesoProva + pesoProva + pesoTrabalho;
    let notaProva1 = this.notaProva1 * pesoProva;
    let notaProva2 = this.notaProva2 * pesoProva;
    let notaTrabalho = this.notaTrabalho * pesoTrabalho;
    let mediaPonderada =
      (notaProva1 + notaProva2 + notaTrabalho) / somaDosPesos;
    return mediaPonderada.toFixed(1);
  }

  calculaMediaFinal() {
    const mediaMinima = 7;
    const mediaPonderada = this.calculaMediaPonderada();

    // Calcula a nota necessária na prova final para alcançar a média mínima
    const notaProvaFinal = mediaMinima - parseFloat(mediaPonderada);
    let NotaNecessaria = mediaMinima + notaProvaFinal;
    if (mediaPonderada < mediaMinima) {
      return NotaNecessaria;
    } else {
      return 0;
    }
  }
}

// instanciando um objeto
const aluno1 = new Aluno(5070, "Felipe", 8, 9, 5);
console.log(`Média do ${aluno1.nome}: ${aluno1.calculaMediaPonderada()}`);
console.log(
  `Nota necessária na prova final para ${
    aluno1.nome
  }: ${aluno1.calculaMediaFinal()}`
);
