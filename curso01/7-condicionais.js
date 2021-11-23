console.log(`Trabalhando com condicionais`);

const listaDestino = new Array(
  "Salvador",
  "São paulo",
  "Rio de Janeiro",
  "Iguape",
  "ilha comprida"
);

const idadeComprador = 15;
const acompanhada = true;

console.log("destinos disponiveis:");
console.log(listaDestino);

if (idadeComprador >= 18) {
  listaDestino.splice(1, 1); //removendo um item
  console.log(listaDestino);
} else if (acompanhada == true) {
  console.log("comprador esta acompanhado");
  listaDestino.splice(3, 1); //removendo um item
  console.log(listaDestino);
} else {
  console.log(
    "Voce não tem idade o suficiente para comprar\nNem esta acompanhado"
  );
}
