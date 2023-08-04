/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/

let animais = [
  ["leao", "simba", "mamiféro", 10],
  ["gato", "Dudu", "mamiféro", 2],
  ["jacaré", "gamora", "réptil", 7],
  ["urubu", "zeca", "ave", 5],
  ["sapo", "cururu", "anfíbio", 3],
];

for (let animal = 0; animal < animais.length; animal++) {
  for (
    let informacoesAnimais = 0;
    informacoesAnimais < animais[animal].length;
    informacoesAnimais++
  ) {
    console.log(animais[animal][informacoesAnimais]);
  }
  console.log(" ");
}
