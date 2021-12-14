// classe abstrata 

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
     throw new Error("Você não deveria instaciar um objeto tipo conta, diretamente pois ela é uma classe abstrata.");
    }

    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldoInicial;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // metodo abstrato;
  sacar(valor) {
    throw new Error("O metodo sacar é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  trasferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
