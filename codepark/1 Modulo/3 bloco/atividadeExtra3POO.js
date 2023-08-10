/*Crie uma classe chamada Pessoa que deve receber três parâmetros no
método construtor, nome, idade e sexo. Crie um método chamado
apresentar e mostre o nome, idade e sexo da pessoa.*/

class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  //criando método
  apresentar() {
    console.log(`
    Nome: ${this.nome}, 
    Idade: ${this.idade}, 
    Sexo: ${this.sexo}`);
  }
}
// instanciando objeto
const pessoa1 = new Pessoa("Maria", 28, "feminino");
const pessoa2 = new Pessoa("José", 34, "masculino");
pessoa1.apresentar();
pessoa2.apresentar();
