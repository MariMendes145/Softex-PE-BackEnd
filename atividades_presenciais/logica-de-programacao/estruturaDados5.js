/*Usando os métodos, POP, SHIFT, UNSHIFT, PUSH, SPLICE. Faça o que se pede:
Const numbers = [1, 2, 3, 4, 5,8,9,10,14]
• Adicione o numero -1 ao inicio do array
• Remova o ultimo elemento do array
• Remova os numeros 5,8,9
• Adicione os números [50,60,70] ao final do array
• Remova o primeiro elemento do array */

const numbers = [1, 2, 3, 4, 5, 8, 9, 10, 14];
console.log("Lista atual: ", numbers); //lista atual
numbers.unshift(-1); // Adicione o numero -1 ao inicio do array
console.log("Adicionando -1 no inicio do array", numbers);
//Remova o ultimo elemento do array
numbers.pop();
console.log("Remova o ultimo elemento do array", numbers);
//Remova os numeros 5,8,9
numbers.splice(5, 3);
console.log("Remova os numeros 5,8,9", numbers);
// Adicione os números [50,60,70] ao final do array
numbers.push(50, 60, 70);
console.log("Adicione os números [50,60,70] ao final do array", numbers);
//Remova o primeiro elemento do array
numbers.shift();
console.log("Remova o primeiro elemento do array", numbers);
