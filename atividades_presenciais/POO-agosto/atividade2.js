//Faça um programa onde possa cadastrar, excluir e mostrar

const read = require("readline-sync");
class Estacionamento {
  constructor(
    vagaId,
    capacidadeEstacionamento,
    qtdVagaDisponivel,
    vagaCadastrada,
    pagamento,
    pessoa
  ) {
    this.vagaId = vagaId;
    this.capacidadeEstacionamento = capacidadeEstacionamento;
    this.qtdVagaDisponivel = qtdVagaDisponivel;
    this.vagaCadastrada = vagaCadastrada;
    this.pagamento = pagamento;
    this.pessoa = pessoa;
  }
}

class Pessoa extends Estacionamento {
  constructor(nome, idade, telefone, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}
Estacionamento.pessoa("Joao", 22, 87 - 99876987, "Rua da Estrela");
//Menu Estacionamento - Programa Principal
const capacidadeEstacionamento = 50;
qtdVagaDisponivel = capacidadeEstacionamento - vagaCadastrada;

console.log("Menu de Estacionamento: 1-Cadastrar, 2-Excluir, 3-Mostrar 4-Sair");
EscolhaOpcaoMenu = Number(
  read.question("Informe qual opcao deseja - Digite:(1/2/3/4/0): ")
);
if (EscolhaOpcaoMenu == 1) {
  cadastrarVaga();
} else if (EscolhaOpcaoMenu == 2) {
  excluirVaga();
} else if (EscolhaOpcaoMenu == 3) {
  mostrarVaga();
} else if (EscolhaOpcaoMenu == 0) {
  sairSistema();
} else {
  console("Digite uma opcao valida!");
}

cadastrarVaga();
for (let i = 0; i <= capacidadeEstacionamento, i++; ) {}

excluirVaga();
mostrarVaga();
sairSistema();

//instanciando objeto
const vaga1 = new Estacionamento(
  "A-1",
  50,
  "cartão de crédito",
  "Joaquim Guimarães"
);
console.log(vaga1);
