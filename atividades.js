const prompt = require("prompt-sync")();

// 1·) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímparutilizando uma estrutura de controle if.

// // console.log('Sera que o numero é par ou impar');

// // let num = Number(prompt('Digite um numero: '))

// // if(num % 2 == 0){
// //     console.log("O numero", num ,"é Par");
// // } else {
// //     console.log("O numero", num ,"é Impar");
// }

// 2·) Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// console.log('Digite sua idade para saber sua faixa etária!!');

// let idade;
// while (true) {
//     idade = Number(prompt('Qual é a sua idade: '));

//     if (isNaN(idade)) {
//         alert('Por favor, digite um número válido!');
//     } else {
//         if (idade <= 12) {
//             console.log('Você é uma criança');
//         } else if (idade <= 17) {
//             console.log('Você é adolescente');
//         } else if (idade <= 64) {
//             console.log('Você é adulto');
//         } else {
//             console.log('Você é idoso');
//         }
//         break;
//     }
// }

// 3·) Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// console.log('Digite Sua Nota');

// let nota = Number(prompt("Digite a idade da pessoa: "));

// if (nota <= 0){
//     console.log('voce esta respovado')
// } else if(nota <= 5){
//     console.log('Recuperação')
// } else{
//     console.log('aprovador')
// }

// 4·)Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// console.log("Menu digite um numero");
// console.log("1. Data");
// console.log("2. Horas");
// console.log("3. Dia");

//     const menu = prompt('Digite qual opeção do menu: ')

// switch(menu){
//     case '1':
//         console.log('você escolheu a opção 1: 06/05/2025');
//         break;

//     case '2':
//         console.log('você escolheu a opção 2: 17:27')
//         break;

//     case '3':
//         console.log('você escolheu a opção 3: Terça-Feira')
//         break;

//     default:
//         console.log("Opção inválida! Tente novamente.");
// }

// 5·) Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// let peso = Number(prompt('Qual é seu peso: '))
// let altura = Number(prompt('Digite a sua altura: '))
// let resultado = peso / (altura * altura)
// let imc = resultado.toFixed(2);

// if ( imc <= 18.5){
//     console.log('seu IMC é', imc ,'Você está a Baixo peso');

// } else if (imc <= 24.9){
//     console.log('seu IMC é', imc ,'Você está no Peso normal');

// }else if (imc <= 29.9){
//     console.log('seu IMC é', imc ,'Você está no Sobrepeso');
// } else{
//     console.log('seu IMC é', imc ,'Você está Obesidade');
// }

// 6·) Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// const a = 3, b = 3, c = 3;

// if (a < b + c && b < a + c && c < a + b) {
//     if (a === b && b === c) {
//         console.log("Triângulo equilátero");
//     } else if (a === b || a === c || b === c) {
//         console.log("Triângulo isósceles");
//     } else {
//         console.log("Triângulo escaleno");
//     }
// } else {
//     console.log("Não é um triângulo");
// }

// 7·) As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// console.log('As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze');

// const total = Number(prompt('Quantas maçãs você vai querer?'));
// const precoMenosDuzia = 0.30;
// const precoMaisDuzia = 0.25;

// if (total < 12) {
//     console.log('Foram Meia Duzia De Maças')
//     console.log(`Foram ${total} maçãs. Total: R$ ${(total * precoMenosDuzia).toFixed(2)}`);
// } else {
//     console.log('Foram Uma Duzia De mança')
//     console.log(`Foram ${total} maçãs. Total: R$ ${(total * precoMaisDuzia).toFixed(2)}`);
// }

// 8·)  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let valor1 = Number(prompt("Digite o primeiro valor:"));
// let valor2 = Number(prompt("Digite o segundo valor:"));

// if( valor1 === valor2)
//     console.log('Os valores nao pode ser iguais')
// else if(valor1 < valor2){
//     console.log(`Ordem Cresente ${valor1}, ${valor2}`);
// } else {
//     console.log(`Ordem crescente: ${valor2}, ${valor1}`);

// }

// 9·) Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// let contador = 10;

// while (contador > 0) {
//     console.log(contador);
//     contador -= 1;
// }

// console.log(contador);

// 10·) Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// num = Number(prompt('Digite um numero: '));
// contador = 0

// while (contador < 10) {
//     console.log(num);
//     contador++;
// }

// 11·)Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let soma = 0;

// for (let i = 1; i <= 5; i++) {

//     let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    
   
//     soma += numero;
// }


// console.log(`A soma dos 5 números é: ${soma}`);

// 12·) Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// let numero = parseInt(prompt("Digite um número:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 13·) Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// let soma = 0;
// let quantidade = 0;
// let numero;

// do {
//   numero = parseFloat(prompt("Digite um número decimal (0 para sair):"));
//   if (numero !== 0) {
//     soma += numero;
//     quantidade++;
//   }
// } while (numero !== 0);

// if (quantidade > 0) {
//   let media = soma / quantidade;
//   console.log("Média aritmética:", media);
// } else {
//   console.log("Nenhum número foi digitado.");
// }

// 14·) Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// let numero = parseInt(prompt("Digite um número inteiro positivo:"));
// let fatorial = 1;
// let i = 1;

// if (numero < 0) {
//   console.log("Fatorial não é definido para números negativos.");
// } else {
//   while (i <= numero) {
//     fatorial *= i;
//     i++;
//   }
//   console.log(`O fatorial de ${numero} é ${fatorial}`);
// }

// 15·) Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for

// let a = 0;
// let b = 1;

// console.log("Sequência de Fibonacci (10 primeiros números):");

// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   let proximo = a + b;
//   a = b;
//   b = proximo;
// }
