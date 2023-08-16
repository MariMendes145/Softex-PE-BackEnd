//1 Passo atividade declarar variaveis
let andar;
let numeroGrande;
let sobrenome;
let simbolo;
// 2 passo - constar todas como undefined
console.log(andar); //undefined
console.log(numeroGrande); //undefined
console.log(sobrenome); //undefined
console.log(simbolo); //undefined
//3 passo- constar todas como null
andar = null;
numeroGrande = null;
sobrenome = null;
simbolo = null;
console.log(andar); //null
console.log(numeroGrande); //null
console.log(sobrenome); //null
console.log(simbolo); //null
//4 passo atribuir valores e imprimir
andar = true; //boolean
numeroGrande = BigInt(1289829849384983493849439); // BigInt números inteiros maiores que 2^53;
sobrenome = "Mendes"; // string;
simbolo = Symbol(); //Symbol- valor unico e imutavel
console.log(andar);
console.log(numeroGrande);
console.log(sobrenome);
console.log(simbolo);
