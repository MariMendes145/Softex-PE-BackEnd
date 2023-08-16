/* Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos. */

// Opção 1 - resolução
let nome = "Marco Polo"; //string
let salario = 1500; // number
let idade = 23; //number
let temDiploma = false; //boolean
console.log("Nome: ", nome);
console.log("Salario: ", salario);
console.log("Idade: ", idade);
console.log("Possui diploma: ", temDiploma);

//Opção 2- resolução
let Pessoa = {
  nome: "Marcos Santos", //string
  salario: 1700, // number
  idade: 23, //number
  possuiDiploma: true, //boolean
};

console.log("Nome: ", Pessoa.nome);
console.log("Salario: ", Pessoa.salario);
console.log("Idade: ", Pessoa.idade);
console.log("Possui diploma: ", Pessoa.possuiDiploma);
