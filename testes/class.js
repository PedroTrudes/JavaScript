class Carros {
    modelo;
    placa;
    cor;
    valor;
}
class Comprador {
    nome;
    saldo;
}

const comprador1 = new Comprador();
comprador1.nome = "Pedro";
comprador1.saldo = 100.780;

const carro1 = new Carros();

carro1.modelo = "Evoque";
carro1.placa = "qbc3005";
carro1.cor = "branco";
carro1.valor = 45.000;


if (comprador1.saldo >= 45.000) {
    console.log("Parabens", comprador1.nome, " Você pode comprar");
}else{
    console.log("Me desculpa mas seu saldo é insuficiente ")
}
