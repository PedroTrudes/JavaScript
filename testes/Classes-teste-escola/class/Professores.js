import { Alunos } from "./Alunos.js";

export class Professores {
    nomeProf;
    materia;
    

    constructor(nome, materia,turma, turma2, turma3){
        this.nomeProf = nome;
        this.materia = materia;
        this.turma = turma;


    }

    set nomeProf(nvNome){
        this.nomeProf = nvNome;

    }
    get nomeProf(){
        return this.nomeProf;
    }
    set materia (nvMateria){
        this.materia = nvMateria;
    }
    get materia (){
        return this.materia;
    }
    get turma (){
        return this.turma;
    }

}