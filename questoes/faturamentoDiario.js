/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("../dados/dados.json", "utf-8"));

const diasComFaturamento = [];
for (const dia of dados) {
    if (dia.valor > 0) {
        diasComFaturamento.push(dia);
    }
}

if (diasComFaturamento.length === 0) {
    console.log("Nenhum dia com faturamento encontrado.");
    return; 
}

let menorFaturamento = diasComFaturamento[0].valor;
let maiorFaturamento = diasComFaturamento[0].valor;

for (const dia of diasComFaturamento) {
    if (dia.valor < menorFaturamento) {
        menorFaturamento = dia.valor;
    }
    if (dia.valor > maiorFaturamento) {
        maiorFaturamento = dia.valor;
    }
}

let somaFaturamento = 0;
for (const dia of diasComFaturamento) {
    somaFaturamento += dia.valor;
}

const mediaMensal = somaFaturamento / diasComFaturamento.length;
let diasAcimaDaMedia = 0;
for (const dia of diasComFaturamento) {
    if (dia.valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

console.log("Menor faturamento ocorrido em um dia do mês: R$", menorFaturamento.toFixed(2));
console.log("Maior faturamento ocorrido em um dia do mês: R$", maiorFaturamento.toFixed(2));
console.log("Número de dias com faturamento superior à média mensal:", diasAcimaDaMedia);

