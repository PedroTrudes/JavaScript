console.log(`Trabalhando com listas`);

const listaDestino = new Array(
    'Salvador',
    'São paulo',
    'Rio de Janeiro',
    'Iguape'
);

listaDestino.push('Curitiba');
console.log(listaDestino);

listaDestino.splice(1 , 1);
console.log(listaDestino);

console.log(listaDestino[1],listaDestino[2]);


// const salvador = 'Salvador';
// const saoPaulo = 'São paulo';  ctr + k + C
// const rioDeJaneiro = 'Rio de Janeiro';

// console.log("destinos possiveis\n"+ salvador + "\n");

// console.log("destinos possiveis\n"+ saoPaulo + "\n");

// console.log("destinos possiveis\n"+ rioDeJaneiro + "\n");