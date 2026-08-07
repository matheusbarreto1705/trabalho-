let nome   = prompt('Qual é o seu nome?');
let pesoStr =prompt ('Olá, ${nome}! Qual é o seu peso em kg?\n(use vírgula ou ponto - ex: 75,5 ou 75.5)');
let altStr  =prompt('Qual é a sua altura em metros?\n(ex: 1,75 ou 1.75)');

let peso = Number(pesoStr.replace(',', '.'));
let alt  = Number(altStr.replace(',', '.'));

console.log('Nome:', nome);
console.log('Peso:', peso, typeof peso);
console.log('Altura', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc < 18. 5){
    console.log("Abaixo do peso")
} else if (imc < 25){
    console.log("peso normal")
} else {
    console.log("acima do peso")
}