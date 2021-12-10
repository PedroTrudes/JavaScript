import { Alunos } from "./class/Alunos.js";
import { Professores } from "./class/Professores.js";

const aluno1 = new Alunos(1, "Pedro", 5, 1);
const aluno2 = new Alunos(1, "Roberto", 5, 2);
const aluno3 = new Alunos(2, "Julia", 1, 3);
const aluno4 = new Alunos(3,"Carol", 4, 4);


const pro1 = new Professores("Antonio", "Sistemas OP",1, 2, 4);
const pro2 = new Professores("Carla", "LGPD", 1, 3, 2);

console.log(pro1, pro2);
console.log(aluno1, "\n" ,aluno2,"\n", aluno3, "\n", aluno4);