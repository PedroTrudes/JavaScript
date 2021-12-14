import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Joao",8000,45454545454);
diretor.CadastrarSenha("123456");
const gerente = new Gerente("Carlos", 5000, 84845144545);
gerente.CadastrarSenha("123")
const cliente1 = new Cliente("Pedro", 4154454, "1111");


const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const DiretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente1, "1111");

console.log(GerenteEstaLogado, DiretorEstaLogado, clienteLogado);
