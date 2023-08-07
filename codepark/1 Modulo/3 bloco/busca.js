/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.*/

function buscaBinaria(numeroEncontrado) {
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  //ordenando array
  const arrayOrdenado = array.sort((a, b) => a - b);
  console.log(arrayOrdenado);
  let inicio = 0;
  let fim = arrayOrdenado.length - 1;
  while (inicio <= fim) {
    // calcula o indice do meio da lista
    const meio = Math.floor((inicio + fim) / 2);
    // verifica se o numero do meio é igual ao numero desejado
    if (arrayOrdenado[meio] === numeroEncontrado) {
      return meio;
    }
    // Se o numero do meio for maior  que o numero encontrado, descarta a metade à direita
    if (arrayOrdenado[meio] > numeroEncontrado) {
      fim = meio - 1;
    } else {
      // Senão, descarta a metade à esquerda
      inicio = meio + 1;
    }
  }
}

console.log("O número encontrado está no indice:", buscaBinaria(20));
