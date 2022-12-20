
//Exercício 1
// Vamos criar um robô que manda “Bom dia, grupo!” 7 vezes. Utilize o laço de repetição for para fazer com mais praticidade!

for (let i=1; i <=7; i++){
    console.log("Bom dia, grupo!")
}

// ##########################################

//Exercício 2
// Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. 
// Exemplo:

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// Lembre-se de fazer a multiplicação do 7 x 1 até 7 x 10! 

// Ah, uma última dica: Você deve usar a variável i que é nosso contador para concatenar na hora de montar a mensagem “7 x 1”!
// Afinal os valores depois do " x " (1,2,3,4…) são os valores que mudam de acordo com cada interação do loop.

let a // Valores a multiplicar
let b // Resultado da multiplicação
let c = 7 // Constante (Valor da Tabuada)


for(a=1; a <=10; a ++){
    b = (c * a)
    console.log(c + " x " + a + " = " + b)
}



