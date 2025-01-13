/* Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

function reverseString(str) {
    var newString = "";
    for (var i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString 
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Informe a string para reversão: ", (word) => {
    const reversedString = reverseString(word);
    console.log(`A string "${word}" invertida é "${reversedString}".`);
    rl.close();
});

