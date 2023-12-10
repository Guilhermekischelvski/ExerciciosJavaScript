class pessoa {
    nome;
    altura;
    peso;

    constructor (nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calculaImc (peso, altura){
        return peso / (altura * altura);
    }
}

const gui = new pessoa("Guilherme",1.80, 95)

console.log(gui.calculaImc(90,1.80))