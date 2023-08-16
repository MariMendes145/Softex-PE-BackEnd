class Pessoa {
  construtor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Aluno extends Pessoa {
  construtor(nota) {
    this.nota = nota;
  }
  apresentarSalario() {
    return 1000;
  }
}
class Professor extends Pessoa {
  apresentarSalario() {
    return 1500;
  }
}

const pessoa1 = new Pessoa("Marcos", 20, "Rua do Tatu, nº25");
console.log(pessoa1.apresentarSalario);
