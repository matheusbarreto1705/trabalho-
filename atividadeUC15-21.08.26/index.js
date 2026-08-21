let temperatura = Number(prompt("Qual é a temperatura?"));

let classificacao;

if (temperatura < 15) {
    classificacao = "Está frio!";
} else if (temperatura <= 25) {
    classificacao = "O clima está agradável!";
} else if (temperatura > 35) {
    classificacao = "Está muito quente!";
} else {
    classificacao = "Está quente!";
}

document.getElementById("temperatura").textContent =
    "Temperatura informada: " + temperatura + "°C";

document.getElementById("mensagem").textContent = classificacao;

console.log("Temperatura:", temperatura + "°C");
console.log("Classificação:", classificacao);