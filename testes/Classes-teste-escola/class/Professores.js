export class Professores {
    nomeProf;
    materia;
    turma1;
    turma2;
    turma3;

    constructor(nome, materia,turma1, turma2, turma3){
        this.nomeProf = nome;
        this.materia = materia;
        this.turma1 = turma1;
        this.turma2 = turma2;
        this.turma3 = turma3;
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
    get turma1(){
        return this.turma1;
    }
    get turma2(){
        return this.turma2;
    }
    get turma3(){
        return this.turma3;
    }
}