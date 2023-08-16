/* Leia uma distancia em quilômetros e a quantidade de litros de gasolina consumidos por um carro em um percuso. Calcule em Km/L e escreva uma mensagem de acordo com a tabela:
Consumo (KM/L)            Mensagem
Menor que 8              Venda o carro!
Entre 8 e 14               Economico
Maior que 15                 Super econômico*/

const read = require("readline-sync");
let distanciaKm = Number(read.question("Informe a distancia percorrida:"));
let consumoGasolinaL = Number(
  read.question("Informe o consumo de gasolina em litros:")
);
let consumoTotal = distanciaKm / consumoGasolinaL;
if (consumoTotal < 8) {
  console.log(
    `Venda o carro!O consumo total do seu carro em km/l foi de : ${consumoTotal.toFixed(
      2
    )}`
  );
} else if (consumoTotal >= 8 && consumoTotal <= 14) {
  console.log(
    `Econômico! O consumo total do seu carro em km/l foi de  ${consumoTotal.toFixed(
      2
    )}`
  );
} else {
  console.log(
    `Super Econômico! O consumo total do seu carro em km/l foi de  ${consumoTotal.toFixed(
      2
    )}`
  );
}
