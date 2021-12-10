import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    
    _cliente;

    constructor (cliente, agencia) {
      this._cliente = cliente;
      this.agencia = agencia;
      this._saldo = 0;
      ContaCorrente.numeroDeContas += 1;
    }
  
    sacar(valor) {
      // não pode sacar mais doque o limite na conta
      if (valor >= this._saldo) {
        console.log("Você não pode sacar");
      } else {
      this._saldo -= valor;
        return valor;
      }
    }

  
    depositar(valor) {
      if (valor <= 0){
        return;
      }
      this._saldo += valor;
    }

    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}