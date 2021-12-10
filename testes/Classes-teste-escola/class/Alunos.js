export class Alunos {
    turma;
    sala;
    nome;
    _idAluno;

    constructor(turma,nome, sala, idAluno){
        this._idAluno = idAluno;
        this.nome = nome;
        this.turma = turma;
        this.sala = sala;
    }

    set nome (novoNome){
        this.nome = novoNome;
    }

    get nome (){
        return this.nome;
    }

    set turma (novaTurma){
        this.turma = novaTurma;
    }

    get turma (){
        return this.turma;
    }

    set sala (novaSala){
        this.sala = novaSala;
    }

    get sala (){
        return this.sala;
    }

    get idAluno(){
        this._idAluno;
    }

}