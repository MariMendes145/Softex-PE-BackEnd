//Faça um programa que calcule e mostre a soma dos 50 primeiros números pares (Considere apenas números positivos)
//inciando variavel soma com valor 0
let soma = 0;
// laço de repeticao para procurar os 50 primeiros numeros pares
for (let i = 2; i <= 100; i += 2) {
  soma += i;
}
console.log("A soma dos 50 primeiros números pares positivos é: " + soma);
