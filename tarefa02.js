const prompt = require('prompt-sync')();


// Seção 1: Estruturas de Controle Avançadas

// 1. Validação de Datas
// function ehDataValida(dia, mes, ano) {
//   if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
//     return false;
//   }

//   function anoBissexto(ano) {
//     return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
//   }

//   let diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (anoBissexto(ano)) {
//     diasNoMes[1] = 29;
//   }

//   return dia <= diasNoMes[mes - 1];
// }

// console.log(ehDataValida(29, 2, 2027));

// 2.Jogo de Adivinhação
// function jogoAdivinhacao() {
//     const numero = Math.floor(Math.random() * 100) + 1;
//     let tentativas = 0;
//     let palpite = 0;

//     while (palpite !== numero) {
//         palpite = Number(prompt("Tente adivinhar o número (1 a 100): "));
//         tentativas++;

//         if (palpite < numero) {
//             console.log("Mais alto!");
//         } else if (palpite > numero) {
//             console.log("Mais baixo!");
//         } else {
//             console.log("Parabéns! Você acertou em " + tentativas + " tentativas.");
//         }
//     }
// }

// jogoAdivinhacao();

// 3.Palavras Únicas
// function palavrasUnicas(frase) {
//     let lista = frase.split(" ");
//     let palavrasDistintas = [...new Set(lista)];
//     return palavrasDistintas;
// }

// console.log(palavrasUnicas("olá olá mundo mundo"));
// console.log(palavrasUnicas("a a b c c d"));



// Seção 2: Funções e Recursão

// // 4.Fatorial Recursivo
// function fatorial(n) {
//   if (n < 0) {
//     throw new Error("Número negativo não tem fatorial");
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }

// console.log(fatorial(4));

// 5.Debounce
// function debounce(fn, delay) {
//   let timeoutId;
  
//   return function(...args) {
//     clearTimeout(timeoutId);
    
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function minhaFuncao(texto) {
//   console.log(`Buscando por: ${texto}`);
// }

// const buscaDebounced = debounce(minhaFuncao, 10000);

// buscaDebounced("8");
// buscaDebounced("12");
// buscaDebounced("20");

//6. Memoization
// function memoize(fn) {
//   const cache = {};
  
//   return function(...args) {
//     const key = JSON.stringify(args);
    
//     if (key in cache) {
//       return cache[key];
//     }
    
//     const result = fn(...args);
//     cache[key] = result;
    
//     return result;
//   };
// }

// function calculoDemorado(a, b) {
//   console.log('Calculando...');
//   return a + b;
// }

// const calculoRapido = memoize(calculoDemorado);

// console.log(calculoRapido(10, 3));
// console.log(calculoRapido(2, 7));

//7. Mapeamento e Ordenação
// function getProdutosOrdenadosPorPreco(products) {
//   const productsOrdenados = products.slice().sort(function(a, b) {
//     return a.preco - b.preco;
//   });

//   return productsOrdenados.map(product => product.nome); {
//     return {
//       nome: product.nome,
//       preco: product.preco
//     };
//   });
// }

// const products = [
//   { nome: 'Notebook', preco: 4500 },
//   { nome: 'Celular', preco: 4200 },
//   { nome: 'Tablet', preco: 2000 }
// ];

// console.log(getProdutosOrdenadosPorPreco(products));

//8. Agrupamento por Propriedade
// const vendas = [
//   { cliente: 'Ana', total: 120 },
//   { cliente: 'João', total: 250 },
//   { cliente: 'Junior', total: 80 },
//   { cliente: 'Maria', total: 150 },
//   { cliente: 'Cheila', total: 30 }
// ];

// const totalPorCliente = vendas.reduce((acumulador, venda) => {
//   acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
//   return acumulador;
// }, {});

// console.log(totalPorCliente);

// //9. Conversão Entre Formatos
// function paresParaObjeto(pares) {
//     const objeto = {};
//     for (const [chave, valor] of pares) {
//         objeto[chave] = valor;
//     }
//     return objeto;
// }

// function objetoParaPares(obj) {
//     return Object.entries(obj);
// }

// const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']];
// const objeto = paresParaObjeto(pares);
// console.log(objeto); 

// const paresDeVolta = objetoParaPares(objeto);
// console.log(paresDeVolta);