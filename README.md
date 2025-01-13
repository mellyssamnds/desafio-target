
## **Desafio Target Sistemas**

## Descrição Geral
Este repositório contém a resolução do desafio técnico da Target Sistemas para o cargo de Desenvolvedor back-end. 

#### Questão 1 
Analisar o trecho de código abaixo e informar o retorno da variável **soma** após o loop;
``` 
int INDICE = 13, SOMA = 0, K = 0;

Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}

Imprimir(SOMA);
```

#### Questão 2 
Implementar um algoritmo calcula a sequência de Fibonacci e retorna uma mensagem avisando se o número informado pertence ou não a sequência;

#### Questão 3
Implementar um programa que informe os faturamentos de uma distribuidora:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal;

#### Questão 4 
Esta questão utiliza os arquivos [dados.json](https://github.com/mellyssamnds/desafio-target/blob/main/dados/dados.json) localizado na pasta [dados](https://github.com/mellyssamnds/desafio-target/tree/main/dados). 
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

Implementar um programa que calcula o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

#### Questão 5 
Implementar um programa que inverta os caracteres de uma string.


## Tecnologias utilizadas

| Tecnologia      | Descrição                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |        
| `javascript`     | Linguagem de programação                                                                                                           |
| `Node.js`        | Ambiente de execução do JavaScript                                                                                                 |
  
O projeto está estruturado da seguinte forma:

## Estrutura de pastas:

``` 
  |📁 desafio-target
  |    |📁 dados
  |         |📄 dados.json
  |         |📄 dados.xml
  |    |📁 questoes
  |         |📄 faturamentoDiariojs
  |         |📄 faturamentoMensal.js
  |         |📄 fibonacci.js
  |         |📄 reverse.js
  |         |📄 soma.js
```

## Executando o Projeto

```bash
# Clone o repositório
$ git clone git clone https://github.com/mellyssamnds/desafio-target.git

# Entre na pasta do projeto
$ cd desafio-target/questoes

# Execute cada questão individualmente: 
$ node nomeDoArquivo.js
```


