/*Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.*/
class infoPessoa {
  constructor(nome, idade, filho) {
    this.nome = nome;
    this.idade = idade;
    this.filho = filho;
  }
}
// Criando os objetos
const infoPessoa1 = new infoPessoa("Marcos", 35, "Marcilio");
const infoPessoa2 = new infoPessoa("Maria", 32, "Marcilio");
const infoPessoa3 = new infoPessoa("Marcilio", 5, "Joaquim");

// Definindo as relações de parentesco
infoPessoa1.filho = infoPessoa3;
infoPessoa2.filho = infoPessoa3;
// Função para imprimir as informações da pessoa e de seu filho
function imprimirPessoaComFilho() {
  console.log(
    `
    Nome: ${infoPessoa1.nome}, Idade: ${infoPessoa1.idade},  Filho :${infoPessoa1.filho.nome})
    Nome: ${infoPessoa2.nome}, Idade: ${infoPessoa2.idade},  Filho :${infoPessoa2.filho.nome})
    Nome: ${infoPessoa3.nome}, Idade: ${infoPessoa3.idade})
    `
  );
}
imprimirPessoaComFilho();
