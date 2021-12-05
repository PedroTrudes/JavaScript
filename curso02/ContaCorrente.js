export class ContaCorrente {
    cliente;
    agencia;
    
    _saldo = 0;
    
  
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