const numeros = ["1","2","3","4","5","6"];

function imprimirNumerosPares (){
    for (let i = 0; i < numeros.length; i++){
        const numero = numeros[i];
        if(numero % 2 === 0){
            console.log(numero)
        }
}
}
let resultado = imprimirNumerosPares();
