class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    // não pode sacar mais doque o limite na conta
    if (valor >= this.saldo) {
      console.log("Você não pode sacar");
    } else {
      this.saldo -= valor;
      console.log(this.saldo);
    }
  }

}

const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf = 45702873874;

const cliente2 = new Cliente();
cliente2.nome = "Joaquim";
cliente2.cpf = 55555555555;

const contaCorrentePedro = new ContaCorrente();
contaCorrentePedro.saldo = 100;
contaCorrentePedro.agencia = 1001;

console.log(contaCorrentePedro.saldo);
contaCorrentePedro.saldo = 100;
console.log(contaCorrentePedro.saldo);
contaCorrentePedro.sacar(1000)


console.log(cliente1);
console.log(cliente2);
