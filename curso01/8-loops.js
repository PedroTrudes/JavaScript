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
let passagemComprada = false;
const destino = "Iguape";


console.log("\ndestinos disponiveis:");
console.log(listaDestino);


const podeComprar = (idadeComprador >= 18 || acompanhada == true);

let contador = 0;
let destinoExiste = false;

while (contador < 5) {
    if(listaDestino[contador] == destino){
        console.log("destino existe");
        destinoExiste = true;
        break;
    }else {
        destinoExiste = false;
    }
    contador += 1;
}

console.log("Seu destino é: " + destino + " e ele esta disponivel: " + destinoExiste +"!");

