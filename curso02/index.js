import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf = 45702873874;

const cliente2 = new Cliente();
cliente2.nome = "Joaquim";
cliente2.cpf = 55555555555;


const contaCorrenteJoaquim = new ContaCorrente();
contaCorrenteJoaquim.agencia = 1020;
contaCorrenteJoaquim.cliente = cliente2;
contaCorrenteJoaquim.depositar(500);

const contaCorrentePedro = new ContaCorrente();
contaCorrentePedro.agencia = 1001;
contaCorrentePedro.cliente = cliente1;
contaCorrentePedro.depositar(1000);
contaCorrentePedro.sacar(500);

contaCorrentePedro.trasferir(100, contaCorrenteJoaquim);

console.log(contaCorrenteJoaquim, contaCorrentePedro);

