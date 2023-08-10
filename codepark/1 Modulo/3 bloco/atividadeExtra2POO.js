/* Crie uma classe usuário que deve receber dois parâmetros no método
construtor, e-mail e senha, e anotá-los em propriedades da classe */
//criando classe  e construtor
class Usuario {
  constructor(email, senha) {
    (this.email = email), (this.senha = senha);
  }
}

// instanciando objeto
const usuario1 = new Usuario("starwars654321@gmail.com", "@BB8melhorRobo!");
const usuario2 = new Usuario("cafefazenda154@gmail.com", "@87aBa54ca78dabra8!");
console.log(usuario1);
console.log(usuario2);
