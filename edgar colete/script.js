const nome = prompt('Digite seu nome:');
const cidade = prompt('Digite sua cidade:');

alert(`Seja bem-vindo, ${nome}! Você é de ${cidade}.`);
console.log(`Nome: ${nome}`);
console.log(`Cidade: ${cidade}`);

const numeroSecreto = 7;
const tentativa = Number(prompt('Tente adivinhar o número secreto (7):'));

console.log(`Tentativa: ${tentativa}`);

if (tentativa === numeroSecreto) {
  alert('Parabéns! Você acertou o número secreto!');
} else {
  alert(`Ops! O número secreto era ${numeroSecreto}. Tente outra vez!`);
}
