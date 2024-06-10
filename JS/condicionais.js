const prompt = require('readline-sync')

const idade = Number(prompt.question("Qual e a sua idade?"))

const ehMaiorDeIdade = idade >= 18; 

if(ehMaiorDeIdade){
    // Execute esse bloco de código
    console.log("Você e maior de idade")
}else{
    console.log("você é menor de idade")
}