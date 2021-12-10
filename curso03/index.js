import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";


const cliente1 = new Cliente("Pedro", 45702873874);
const cliente2 = new Cliente("Joaquim0", 45222182124)



const conta1 = new Conta(0, cliente1, 1001); 
conta1.depositar(1000);
conta1.sacar(500);

const conta2 = new Conta(cliente2, 1005);


const contaPoupanca1 = new Conta(50, cliente1, 1001)



console.log(conta1);
console.log(contaPoupanca1);