import { Conta } from "./Conta.js";

export class ContaPoupanca {
    static numeroDeContasP = 0;
    
    constructor(saldoInicial, cliente, agencia){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;

        Conta.numeroDeContasP += 1;

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