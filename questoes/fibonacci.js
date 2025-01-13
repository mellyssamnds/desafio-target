/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        let fib = a;
        a = b;
        b = fib + b;
    }
    return false;
}
rl.question("Informe um número para verificar se ele pertence à sequência de Fibonacci: ", (input) => {
    const number = parseInt(input, 10);

    if (isNaN(number)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (isFibonacci(number)) {
            console.log(`O número ${number} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${number} NÃO pertence à sequência de Fibonacci.`);
        }
    }

    rl.close();
});
