class Livraria {
    endereco;
    nomeLivraria;
    codLivraria;


}

class Livros {
    nomeLivro;
    codLivro;
    tipo;
    qtdLivros;

    venda(qtd) {
        if (comprar == this.codLivro){
            this.qtdLivros -= qtd;
            console.log(this.qtdLivros);
        }
        console.log(this.qtdLivros);
    }
}

const comprar = 1;

const livros1 = new Livros;

livros1.nomeLivro = "Codigo Limpo";
livros1.codLivro = 1;
livros1.tipo = "Didatica/Programação";
livros1.qtdLivros = 5;

const livros2 = new Livros;
livros2.nomeLivro = "Do mil ao Milhão";
livros2.codLivro = 2;
livros2.tipo = "Didatica/Financeiro";
livros2.qtdLivros = 20;


const livraria1 = new Livraria;

livraria1.endereco = "Estrada são marcos";
livraria1.nomeLivraria = "Casa Cod";
livraria1.codLivraria = 1;

const livraria2 = new Livraria;
livraria2.endereco = "Iguape";
livraria2.nomeLivraria = "Casa Cod 2";
livraria2.codLivraria = 2;


livros1.venda(2);

