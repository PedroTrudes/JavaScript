import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeContasP = 0;
    
    constructor(saldoInicial, agencia, cliente){
      super(0,cliente,agencia);
        Conta.numeroDeContasP += 1;
    }

    sacar (valor){
      const taxa = 1.02;
      return this._sacar(valor, taxa );

    }

}