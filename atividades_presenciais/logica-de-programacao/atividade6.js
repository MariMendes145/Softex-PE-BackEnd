let pedidos = [
  {
    id: 420,
    nome: "Dener",
    "alimento:": "Sandubão de Bacon",
    bebida: "Suco Limão",
  },
  {
    id: 152,
    nome: "Naiady",
    "alimento:": "Sandubão Vegano",
    bebida: "Suco Laranja",
  },
  { id: 29, nome: "Marcio", "alimento:": "Coxinha", bebida: "Suco Uva" },
  {
    id: 33,
    nome: "Isabel",
    "alimento:": "Sandubão de Picanha",
    bebida: "Refrigerante",
  },
  { id: 55, nome: "José", "alimento:": "Pizza", bebida: "Refrigerante" },
];

const foundId33 = pedidos.find((numeroPedido) => {
  return numeroPedido.id == 33;
});

console.log(foundId33);
