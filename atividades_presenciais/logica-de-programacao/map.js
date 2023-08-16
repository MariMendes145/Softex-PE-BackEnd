/*Faça um programa usando a estrutura map para dobrar os valores de uma lista numerica.*/

let numeros = [1, 2, 3, 4, 5];
const numerosAlterados = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosAlterados);
