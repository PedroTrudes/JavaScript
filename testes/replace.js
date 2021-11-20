const cpfSemFromatar = "45702873874";

const cpfFormatado = cpfSemFromatar.replace("45702873874","457.028.738-74");

console.log("Seu CPF: " + cpfFormatado);



const frase = 'Frase com uma palavra-feia e palavra-feia junto com palavra-feia'

const fraseAtualizada = frase.replace(/palavra-feia/g, '********') 
console.log(fraseAtualizada)