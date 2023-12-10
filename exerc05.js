/*Crie um classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.*/

class carro {
    marca;
    cor;

    constructor (marca, cor, gastoMedioPorKmRodado){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKmRodado = gastoMedioPorKmRodado;
    }
    custoViagem (gastoMedioPorKmRodado, distancia ) {
        return distancia / gastoMedioPorKmRodado;
    
    }
}

const astra = new carro("Chevrolet", "Amarelo");

console.log(astra.custoViagem(12, 380));

