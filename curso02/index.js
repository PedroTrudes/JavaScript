import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf = 45702873874;

const cliente2 = new Cliente();
cliente2.nome = "Joaquim";
cliente2.cpf = 55555555555;

const contaCorrentePedro = new ContaCorrente();
contaCorrentePedro._saldo = 100;
contaCorrentePedro.agencia = 1001;

contaCorrentePedro._saldo = 100;

contaCorrentePedro.depositar(150);
contaCorrentePedro.depositar(1000);

const valorSacado = contaCorrentePedro.sacar(1100);

console.log(contaCorrentePedro, cliente1, "Voce Sacou: ",valorSacado);