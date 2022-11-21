
//Exercício 1
// Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação. 
// Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico.
// O sistema deve cumprimentar o usuário independente da idade, o resultado seria assim:
// Caso o usuário tenha idade mínima para dirigir imprima: 
// “Olá, NOME_DO_USUARIO_AQUI”
// ”Você passou no nosso teste e já pode dirigir!”.
// Caso o usuário não tenha a idade mínima para dirigir imprima somente o cumprimento:
// “Olá, NOME_DO_USUARIO_AQUI”

let nome1 = 'Vagner'
let idade1 = 18

if(idade >= 18){
    console.log("Olá," + nome + "Você já pode dirigir!")
}else{
    console.log("Olá" + nome)
}

// ##########################################

//Exercício 2
// Queremos um código que oriente o usuário de acordo com o saldo da conta bancária. 
// Para isso precisamos de uma variável saldo que guarda um número decimal(float), e imprime uma mensagem de acordo com a situação financeira.

// Se o saldo for maior que 0 (zero) imprima:
// “Seu saldo está positivo! Gostaria de fazer um investimento?”

// Se o saldo for menor que 0 (zero) imprima:
// “Seu saldo está negativo! Gostaria de fazer um empréstimo?” 

let saldo = 100

if (saldo > 0){
    console.log('Seu saldo está positivo! Gostaria de fazer um investimento?')
}else if(saldo < 0){
    console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')
}

// ##########################################

//Exercício 3
// Vamos otimizar nosso sistema de autoescola!
// Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa 
// precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
// Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário!

let nome2 = 'Vagner'
let idade2= 18

if(idade2 >= 18){
    console.log('Você já pode dirigir!')
} else{
    console.log('Ops, você ainda não tem a idade mínima para dirigir!')
}

// ##########################################

//Exercício 4
// Precisamos verificar se uma pessoa pode se aposentar com base na idade. 
// Utilize a condicional if else para verificar se a variável idade é maior que 65 e imprima uma mensagem para cada caso:
// Condição verdadeira : “Você já pode se aposentar”
// Condição falsa: “Você ainda não pode se aposentar”

let nome3 = 'Vagner'
let idade3 = 64

if(idade3 > 65){
    console.log('Você já pode se aposentar')
}else{
    console.log('Você ainda não pode se aposentar')
}

// ##########################################

//Exercício 5
// Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. 
// Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE). Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).

// Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
// Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?”

let estrangeiro = true

if(estrangeiro){
    console.log('Você poderia apresentar seu RNE, por favor?')
}else{
    console.log('Você poderia apresentar seu CPF, por favor?')
}

// ##########################################

//Exercício 6
// Dentro do código estará criada uma variável numeroDaSorte contendo um número. 
// Sua missão é verificar se o valor da variável é par ou ímpar utilizando o operador relacional módulo (%). Imprima “Par” ou “Ímpar” de acordo com o resultado.

let numeroDaSorte = 18

if(numeroDaSorte % 2 == 0){
    console.log('O número é PAR')
}else{
    console.log('O número é ÍMPAR')
}

// ##########################################

//Exercício 7
// Precisamos criar um código que ajude um petshop a dizer se o pet está com o peso ideal. 
// E para isso eles deixaram para você as informações que eles usam para fazer essa classificação:

//  - Abaixo de 4kg = "Abaixo do Peso"
//  - Maior que 10kg = "Acima do Peso"
//  - Se tiver entre esses dois valores =  "Peso normal"

// Utilizando o ELSE IF e crie o código para suprir essa necessidade e imprimindo as mensagens de acordo com a lista acima!

let peso = 5

if(peso < 4){
    console.log('Abaixo do Peso')
}else if(peso >10){
    console.log('Acima do Peso')
}else if(peso >= 4 && peso <= 10){
    console.log('Peso Normal')
}

// ##########################################

//Exercício 8
// Precisamos de ajuda para escrever um código que de acordo com a quantidade de lados iguais de um triângulo, 
// exiba com console.log se ele é Equilátero, Isósceles ou Escaleno, sem a necessidade de repetir no código a palavra “triângulo”. 

// − Triângulo Equilátero: possui os 3 lados iguais.	
// − Triângulo Isósceles: possui 2 lados iguais.	
// − Triângulo Escaleno: possui 3 lados diferentes

// Nesse exercício a variável ladosIguais já estará definida.

let ladosIguais = 0

if(ladosIguais == 3){
    console.log('Equilátero')
}else if(ladosIguais == 2){
    console.log('Isósceles')
}else if(ladosIguais == 0){
    console.log('Escaleno')
}

// ##########################################

//Exercício 9
// Posso comprar esse produto?

// Queremos criar um código que ajude o usuário a saber se ele pode comprar um produto ou não. 
// Para acontecer a venda, a quantidade do produto no estoque tem que ser maior que zero e o produto está ativo.

// Para escrever este código, teremos duas variáveis já definidas: produtoQtd, produtoAtivo. 

// Faça uma condição que supra a necessidade acima, se o usuário puder comprar o produto exiba a seguinte mensagem 
// “Você pode finalizar essa compra”. Caso contrário exiba “Produto não está disponível para compra”.

let produtoQtd = 2
let produtoAtivo = true

if(produtoQtd > 0 && produtoAtivo == true){
    console.log('Você pode finalizar essa compra')
}else{
    console.log('Produto não está disponível para compra')
}

// ##########################################

// Exercício 10
// Pode subir?
// Um parque de diversão te contratou para criar um código para ajudar os usuários a saber se eles podem ir em uns dos brinquedos. As regras são:
// - Ser maior que 1,50m ou ter 21 anos ou mais.
// Diante disso, crie condições que supra essa necessidade, exiba a seguinte mensagem caso o usuário possa usar o brinquedo: “Você pode subir”. 
// Caso ele não possa: “Desculpe, você não atende os requisitos para usar o brinquedo”.
// Vale dizer que para esse exercício você terá duas variáveis: usuarioAltura e usuarioIdade

let idade4 = 21
let altura = 1.60

if (idade >= 21 || altura > 1.50){
    console.log('Você pode subir')
}else{
    console.log('Desculpe, você não atende os requisitos para usar o brinquedo')
} 

// ##########################################

//Exercício 11
// Será que posso ir ao banco?

// Precisamos criar um código que ajude os usuários a saber se podem ir ao banco. 
// Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. Caso o usuário possa ir ao banco você deve exibir com 
// console.log a seguinte mensagem: “Você pode ir ao banco”, caso contrário, "O banco está fechado, tente outro dia".

// Para esse exercício leve em consideração as seguintes informações:

// - Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
// - Você terá a seguinte variável no código: diaSemana
// - Para esse exercício você deve usar na condição do if o operador && para juntar as condições lógicas junto ao operador diferente de(!=).

let diaSemana = 'segunda'

if(diaSemana != "sabado" && diaSemana != "domingo"){
    console.log('Você pode ir ao banco')
}else{
    console.log('O banco está fechado, tente outro dia')
}

