//Calcule a media da turma usando reduce
const estudantes = [
  { nome: "José", nota: 5.7 },
  { nome: "Maria", nota: 4.8 },
  { nome: "Paula", nota: 7.5 },
  { nome: "Eustaquio", nota: 6.7 },
];

const somaNotas = estudantes.reduce(
  (acumulador, estudante) => acumulador + estudante.nota,
  0
);
const mediaTurma = somaNotas / estudantes.length;

console.log("Média da turma:", mediaTurma.toFixed(2));
