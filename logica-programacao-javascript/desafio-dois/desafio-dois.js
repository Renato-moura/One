// Desafios

//todo:Pergunte ao usuário qual é o dia da semana.
//     Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
//     Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana.toLowerCase() === "sábado" || diaDaSemana.toLowerCase() === "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

//todo:Verifique se um número digitado pelo usuário é positivo ou negativo.
//     Mostre um alerta informando.
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}

//todo:Crie um sistema de pontuação para um jogo.
//     Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//     Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = parseInt(prompt("Digite sua pontuação:"));
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//todo:Crie uma mensagem que informa o usuário sobre o saldo da conta,
//     usando uma template string para incluir o valor do saldo.
let saldo = parseFloat(prompt("Digite o saldo da sua conta:"));
alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}.`);

//todo:Peça ao usuário para inserir seu nome usando prompt.
//     Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Qual é o seu nome?");
alert(`Bem-vindo, ${nome}!`);
