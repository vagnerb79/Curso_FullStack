
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

//Exercício 6
// Crie uma função chamada cartaoDeVisitas, ela deverá imprimir o seu nome em conjunto com sobrenome! 

// Para isso lembre, da estrutura de que uma função deve ter. E também como podemos exibir informações no console do playground. 
// Se precisar, basta volta no conteúdo de revisão desse módulo.

let nome = 'Vagner'
let sobrenome = 'Bezerra'

function cartaoDeVisitas (){
    return nome + sobrenome
    console.log (nome + sobrenome)
}

// ##########################################

//Exercício 7
// Já vimos os operadores matemáticos básicos +, -, / e *.
// Agora podemos utilizar funções para tornar a matemática mais fácil. Exemplo:

// function somar(numero1, numero2) {
//     return numero1 + numero2;
// }

// Você deve criar uma função que recebe dois parâmetros numéricos e retorna a multiplicação entre eles.

function multiplicar(numero1, numero2){
    return numero1 * numero2
}

// ##########################################

//Exercício 8
// Os engenheiros de uma montadora estão projetando o computador de bordo de um carro. 
// Eles precisam de uma função que possa calcular a autonomia atual do automóvel, em outras palavras, 
// quantos quilômetros ele consegue andar com a quantidade de combustível atual. 
// A autonomia pode ser obtida multiplicando a quantidade de combustível pelo rendimento. 
// Será que você consegue ajudá-los?

// Escreva uma função chamada autonomia:

// function autonomia(quantidadeDeCombustivel, rendimento){
// 	...
// }
//  Essa função deve receber dois parâmetros:

// O primeiro, que represente a quantidade de combustível que está no tanque
// O segundo, que represente o rendimento do automóvel

// A função deve retornar a autonomia do automóvel.
// Lembre-se: a autonomia do automóvel pode ser obtido multiplicando o rendimento pela quantidade de combustível presente no tanque.

let quantidadeDeCombustivel = 100
rendimento = 5,20

function autonomia (quantidadeDeCombustivel, rendimento){
    return rendimento * quantidadeDeCombustivel 
    console.log(autonomia)
}

// ##########################################

//Exercício 9
// Escreva uma função chamada menorNumero. Ela deve receber dois números como parâmetro e retornar o menor entre eles. 
// Caso os números sejam iguais, basta que se retorne qualquer um deles.

function menorNumero (numero1, numero2){
    if(numero1 < numero2){
        return numero1
    }else if (numero2 < numero1){
        return numero2
    } else{
        return numero1
    }
}

// ##########################################

//Exercício 10
// Para este exercício considere uma função que já foi definida, ela se chama validaCPF.

// Esta função recebe um parâmetro que representa um possível CPF e tudo que ela faz resume-se em um único objetivo: 
// retornar true caso o parâmetro seja um CPF válido ou false caso contrário. 

// Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz. Você não precisa ver como ela faz.

// Utilize a função validaCPF para imprimir “CPF válido” caso o cpf “576.524.020-85” seja válido. Caso contrário, imprima “CPF inválido”

let cpf = "576.524.020-85"

function validaCPF(cpf){
    if(validaCPF(cpf)){
        return "CPF válido"
    }else{
        return "CPF inválido"
    }
}

// ##########################################

//Exercício 11
// Já sabemos que o loop for executa repetidamente um pedaço de código que indicarmos enquanto uma determinada condição for atendida, a condição de parada.

// O for tem uma variável contadora, comumente a chamamos de i (mas pode aparecer com outros nomes), e é importante entender 
// o comportamento desta variável: a cada loop ela terá seu valor alterado.

// for ( var i = 0 ; i < 4; i++ ){ 
//     console.log ("Roi...!");
// }

// Ciente disso, crie uma função chamada passoAPasso que irá executar um loop com 5 repetições e cada ciclo desse loop 
// deve imprimir o valor da variável i que irá começar no zero.

// Exemplo:

// passoAPasso();
// Deve imprimir 0, 1, 2, 3, 4 

function passoAPasso(){
    for (let i = 1; i <=5; i++)
    console.log (i)
}

// ##########################################

//Exercício 12
// Vamos reforçar um pouco sobre o que já vimos sobre loops =)

// Você deve criar uma função chamada imprimir5Vezes, que irá imprimir no console a frase "Estou aprendendo Loops" 5 vezes. 
// Lembre-se não é preciso executar a função.

function imprimir5Vezes(){
    for (let i = 1; i <=5; i ++){
        console.log("Estou aprendendo Loops")
    }
}

// ##########################################

//Exercício 13
// Nos exercícios anteriores, realizamos muitas repetições, porém em todas havíamos colocado um numero fixo de repetições 
// e em alguns momentos esse valor pode ser variável.

// Por exemplo, poderíamos fazer uma função que imprime 5 vezes a palavra azul e realiza todo esse processo usando o for. 
// E se agora também precisarmos imprimir 4 vezes? Para isso, hoje precisaríamos criar outra função. 
// Como você pode ver, isso não seria muito produtivo, porém com alguns recursos que vimos podemos dar uma melhorada nesse 
// processo e fazer uma função genérica que recebe quantas vezes queremos que algo se repita através do parâmetro.

// Para isso, temos que modificar o for. Se quisermos repetir uma instrução 4 vezes, fazemos o seguinte código:

// for( var i = 0 ; i < 4 ; i++ ){ 
//         // aqui vai as instruções que queremos repetir
// }

// Para que este for seja dinâmico podemos fazê-lo seguir uma X quantidade de vezes ditada por uma variável, 
// bastando então modificar o valor da variável x para que mude assim a quantidade de repetições sem precisar fazer um novo for! Veja o exemplo:

// var x = 4 ;
// for( var i = 0 ; i < x ; i++ ){ 
//    // aqui vai as instruções que queremos repetir
// }

// O grande diferencial é que agora podemos atribuir diferentes valores à variável x. Uma forma de obter esse valor seria se 
// eles passassem para nós como um parâmetro de uma função e dentro dela, usassem.

// function repetirX( quantidades ){ 
//     for( var i = 0 ; i < quantidades; i++ ){ 
//         // aqui vai as instruções que queremos repetir
//     }
// }


// Bom agora é sua vez, você deve criar uma função chamada imprimirAzul que irá receber como parâmetro a quantidade de vezes que 
// a função deverá imprimir a palavra Azul. Exemplo:

// imprimirAzul(3)
// irá imprimir 3 vezes a palavra Azul

function imprimirAzul(quantidades){
    for( let i= 0; i < quantidades; i++)
    console.log("Azul")
}

// ##########################################

//Exercício 14
// Continuaremos a trabalhar com a variavel i, porém agora você deve criar uma função chamada osPares, que  
// terá um loop que irá percorrer os numero de 1 a 6 e deverá imprimir a frase "O numero X é par"  onde esse X 
// deve ser o valor da variavel (i) caso ele seja par! Lembre-se que não precisa executar a função e tome cuidado 
// com os espaços na frase solicitada. A ultima dica é que, o numero deve ser incluido na contagem, então, 
// se atente aos operadores na condição do seu loop.

function osPares (){
    for (i =1; i<=6; i++){
        if(i % 2 == 0){
        console.log("O numero "+ i + " é par")
        }
    }
}

// ##########################################

//Exercício 15
// Vamos fazer mais um exercício para incorporar melhor o que foi aprendido na seção anterior.
// Você deve criar uma função chamada somaDosPares que irá receber um parâmetro que será um numero. 
// Essa função deve retornar a soma de todos os números pares de 1 até o o valor que recebemos com parâmetros, incluindo ele proprio. Exemplo:

// somaDosPares(6) // vai retornar 12
// pois será 2 + 4 + 6

function somaDosPares(x){
    let result = 0;
    for (i = 0; i <= x; i++){
        if(i % 2 === 0){
            result += i;
        }
    }
    return result;
}

// ##########################################

//Exercício 16
// Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. 
// Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. 
// A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.

// Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. 
// Ela recebe como parâmetro uma data de nascimento no formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) 
// e retorna idade da pessoa hoje.

// Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura).

// A função deve receber dois parâmetros:
// O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa 
// O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.
// A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.

function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');
    const d = new Date();
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    let quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
function deixaEntrar(dataDeNascimento, censura){
var idade = calcularIdade(dataDeNascimento)
return (idade > censura)
}
 