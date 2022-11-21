
//Exercício 1
// Vamos começar com o básico:

// As funções consistem em 4 partes:

// A palavra-chave da função.
// O nome com o qual vamos chamar a função: function nomeFuncao
// Os parênteses onde os parâmetros irão (se você precisar deles): function nomeFuncao (parametro1, parametro2, ..., parametroX)
// Insira {} colchetes o código que queremos que a função execute: função nomeFuncao (parametro1, ..., parametroX) {código} 
// Se quisermos que uma função retorne um valor, precisaremos da palavra-chave return. Depois disso, tudo o que queremos retribuirá.

// Com funções, podemos fazer muitas coisas, mas vamos começar com algo fácil. Aqui escrevemos a função que duplica o valor do número que passamos a ela.

// function dobro(numero) {
//    return 2 * numero;
// }

// Como podemos ver acima, declaramos uma função com a palavra-chave function com o nome dobro. Entre os parênteses, 
// colocamos o parâmetro do número que será substituído pelo número que damos quando o chamamos a nossa função. 
// Finalmente, com a palavra return, dizemos que o que queremos é retornar 2 vezes o número que vamos receber por parâmetro.

// É muito importante entender que agora, embora estejamos declarando uma função, não a estamos executando.

// Você deve criar uma função chamada triplo que recebe um numero como parâmetro,  e ela irá retornar o triplo desse numero.

function triplo (numero){
    return 3 * numero
}

// ##########################################

//Exercício 2
// Vamos ver se você conseguiu absorver como criar funções: 

// Você deve criar uma função chamado metade que recebe um numero por parâmetro e deve retornar a metade desse numero.

function metade (numero){
    return numero / 2
}

// ##########################################

// Exercício 3
// Até agora, aprendemos declarar funções. Isto significa : escrever o código que elas vão executar, mas nós nunca os executámos, não é mesmo?

// Vejamos o seguinte exemplo.

// Aqui declaramos a função dobro.

// function dobro(numero) {
//    return 2 * numero;
// }

// Com isto temos agora a função dobro, uma função que quando a executamos (invocando) devolverá o dobro do número que passamos a ela.
// Agora, para utilizar essa função basta:

// dobro(2)

// Com esse comando vamos executar o código que escrevemos anteriormente. 
// A função dobro vai ser chamada e o valor 2 vai ser passado como parâmetro. A função dobro vai tomar este valor (2) e vai devolver este valor * 2.

// Se quiséssemos mostrar esse resultado no console(no Playground é a janela abaixo do botão Executar resposta que diz Terminal) 
// teríamos de o imprimir utilizando uma função JavaScript chamada console.log da seguinte forma: 

// console.log(dobro(2))

// Vamos ver se você entendeu, deixamos declarada a função quadruplo, que recebe um numero como parâmetro e o multiplica por 4. 
// Queremos que você execute essa função, passando o valor 5, e imprima no console o resultado dela.

function quadruplo(numero){
    return 4 * numero;
 }
  console.log(quadruplo(5))

// ##########################################

//Exercício 4
// A lavanderia DigitalLaundry lava roupa por quilo. Ela cobra dos seus clientes R$ 5,00 por cada quilo de roupa suja. 
// Atualmente, eles usam um caderninho e uma calculadora para descobrir o valor que cada cliente tem a pagar. 
// Precisamos automatizar essa empresa!

// Escreva uma função calculaValorDevido

// function calculaValorDevido(pesoDaRoupaSuja) {
// 	…
// }

// A função recebe como parâmetro o peso de roupa suja (em quilos) e deve retornar o valor a ser cobrado do cliente.

function calculaValorDevido (pesoDaRoupaSuja){
    return 5 * pesoDaRoupaSuja
}

// ##########################################

//Exercício 5
// Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada e justa. 
// Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa), mais R$ 3,00 por quilo de roupa suja. 
// Reescreva a função calculaValorDevido

// function calculaValorDevido(pesoDeRoupaSuja){
// 	...
// }

// Essa função recebe como único parâmetro a quantidade de roupa suja. Ela deve retornar o valor a ser cobrado do cliente usando a nova política de preços.

function calculaValorDevido(pesoDeRoupaSuja){
	return pesoDeRoupaSuja * 3 + 10
}

// ##########################################

