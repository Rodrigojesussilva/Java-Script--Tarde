/*
    1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
    soma deles.

    2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
    não tem nenhum parâmetro nem retorno.

    3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
    e retorna verdadeiro se o número for par e falso caso contrário.

    4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
     como parâmetro e retorna a área do círculo.

    5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
    e retorna a data atual.

    6-Escreva uma função chamada calcularMedia que recebe um array de números 
    como parâmetro e retorna a média desses números.

    7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
     e retorna esse número adicionado a 2.

    8-Defina uma função chamada concatenarStrings que recebe duas strings como
     parâmetros e retorna uma nova string que é a concatenação das duas strings 
     fornecidas.

    9-Escreva uma função chamada verificarNegativo que recebe um número como
     parâmetro e retorna verdadeiro se o número for negativo e falso caso
     contrário.

    10-Crie uma função chamada removerEspacos que recebe uma string como 
    parâmetro e retorna a mesma string sem espaços em branco.

*/
//7
function adicionarDois(numero) {
    return numero + 2;

}
let retorno = adicionarDois(5)
console.log(retorno)

//8
function concatenarStrings(texto, texto1) {
    console.log(texto + texto1)
}
concatenarStrings("Olá", "mundo!")
//9
function verificarNegativo(numero) {
    if (numero < 0) {
        return true
    }
    else {
        return false
    }
}
let  ng =verificarNegativo(4)
console.log(ng);

//10
function removerEspacos(texto) {
    return texto.replace(/\s/g, "")
}
const rm = removerEspacos("rodrigo jesus")
console.log(rm);