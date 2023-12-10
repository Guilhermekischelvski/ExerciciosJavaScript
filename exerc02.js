function teste(name){ const numero = 10;

const numeroPar = numero % 2 === 0;

console.log(numeroPar)

if (numeroPar){
    console.log("É par caraio " + name)
}
if (!numeroPar){
    console.log("Não é par " + name ) 
}
}

teste('Gui')
teste('Gabriel')
teste('Fer')
teste('MAnuel')