class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Pedro";
cliente1.cpf = 45702873874;
cliente1.agencia = 1010;
cliente1.saldo = 0;


cliente2.nome = "Joaquim";
cliente2.cpf = 55555555555;
cliente2.agencia = 1010;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);