const tarantinoMovies = [
  { name: "Bastardos inglórios", release: 2009 },
  { name: "Pulp Fiction", release: 1994 },
  { name: "Kill Bill: Volume 2", release: 2004 },
  { name: "Quatro Quartos", release: 1995 },
  { name: "Sin City", release: 2005 },
  { name: "Era uma Vez en... Hollywood", release: 2019 },
  { name: "Django Livre", release: 2012 },
  { name: "Cães de Aluguel", release: 1992 },
  { name: "A Prova de forte", release: 2007 },
  { name: "Kill Bill: Volume 1", release: 2003 },
];

const tarantinoMoviesMenor2000 = tarantinoMovies.filter((lancamento) => {
  return lancamento.release <= 2000;
});
console.log(tarantinoMoviesMenor2000);
