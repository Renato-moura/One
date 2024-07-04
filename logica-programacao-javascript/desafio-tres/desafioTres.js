// Desafios

//todo:Crie um contador que comece em 1 e vá até 10
//     usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
//todo:Crie um contador que começa em 10 e vá até 0 usando um loop while.
//     Mostre cada número.
let contador1 = 10;
while (contador1 >= 0) {
    console.log(contador1);
    contador1--;
}
//todo:Crie um programa de contagem regressiva.
//     Peça um número e conte deste número até 0,
//     usando um loop while no console do navegador.
let numero = parseInt(prompt("Digite um número para a contagem regressiva:"));
while (numero >= 0) {
    console.log(numero);
    numero--;
}
//todo:Crie um programa de contagem progressiva.
//     Peça um número e conte de 0 até esse número,
//     usando um loop while no console do navegador.
let numero2 = parseInt(prompt("Digite um número para a contagem progressiva:"));
let contador2 = 0;
while (contador2 <= numero2) {
    console.log(contador2);
    contador2++;
}
