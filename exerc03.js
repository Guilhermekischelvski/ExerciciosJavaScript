/*Faça um programa para calcular o valor de uma viagem. Você terá três informações:

 - Preço Gasolina
 - Preço Alcool
 - Preço do combustível
 - Gasto médio de combustível do carro por KM
 - Distância em KM da viagem 
 */

 let gasolina = 6
 let alcool = 4.75;
 let kmPercorridoPorLitro = 10;
 let distanciaDaViagem = 900;

 const qtdLitrosNecessarios = distanciaDaViagem / kmPercorridoPorLitro;

if(qtdLitrosNecessarios > 40 &&  qtdLitrosNecessarios < 60 ){
    alcool = alcool * qtdLitrosNecessarios;
    console.log ("Será consumido" + qtdLitrosNecessarios + "portanto...")
    console.log("Vamos com alcool, pois o valor da viagem será de: " + alcool)
}
else if(qtdLitrosNecessarios > 60 && qtdLitrosNecessarios < 80){
    gasolina = gasolina * qtdLitrosNecessarios;
    console.log("Vamos com gasolina, pois o valor da viagem será de: " + gasolina)
}
else{
    console.log("Não vai ter viagem")
}