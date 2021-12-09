import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Pedro", 45702873874);
const cliente2 = new Cliente("Joaquim", 44444444444);


const conta1 = new ContaCorrente(cliente1, 1001); 
conta1.depositar(1000);
conta1.sacar(500);

const conta2 = new ContaCorrente(cliente2, 102);
conta2.depositar(5000);


let valor = 200;
conta1.trasferir(valor,conta2);

console.log(conta1,conta2,ContaCorrente.numeroDeContas);
