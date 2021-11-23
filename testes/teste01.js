console.log("Arquivo para testar o conteudo visto em aula");

// testando if e else

const nome = "Pedro";
const n1 = 6;
const n2 = 8;
const nota = (n1 + n2) / 2;

if (nota > 6) {
  console.log("Parebens" + nome + " Você foi aprovado!!\nNota = " + nota);
}
if (nota >= 3 && nota <= 6) {
  console.log(
    nome +
      " sua nota não foi o suficiente mas você esta de exame \nNota = " +
      nota
  );
}
if (nota < 3) {
  console.log(nome + " Infelizmente você foi reprovado \nNota = " + nota);
}
