export class ContaCorrente {
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
      console.log("Voce depositou:", this._saldo += valor);
    }
  
  
  }