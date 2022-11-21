
// Exercício 1
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

// Exercício 2
// Queremos um código que oriente o usuário de acordo com o saldo da conta bancária. 
//Para isso precisamos de uma variável saldo que guarda um número decimal(float), e imprime uma mensagem de acordo com a situação financeira.

// Se o saldo for maior que 0 (zero) imprima:
//  “Seu saldo está positivo! Gostaria de fazer um investimento?”

// Se o saldo for menor que 0 (zero) imprima:
//  “Seu saldo está negativo! Gostaria de fazer um empréstimo?” 

let saldo = 100

if (saldo > 0){
    console.log('Seu saldo está positivo! Gostaria de fazer um investimento?')
}else if(saldo < 0){
    console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')
}

// ##########################################

// Exercício 3
// Vamos otimizar nosso sistema de autoescola!
// Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa 
// precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
// Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário!