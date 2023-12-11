function resultadoTabuada (numeroTeste){
    for (let i = 0; i < 10; i++){
        numero = numeroTeste * i;
        console.log("A tabuada de " + numeroTeste + " é: " + numero)
    }
}

let resultado = resultadoTabuada(3)
console.log(resultado)