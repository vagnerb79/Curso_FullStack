
//Exercício 1
//Além dos números, há mais um tipo de dados em JavaScript, esse tipo de dados é string.
// Os dados do tipo string são conhecidos como strings de texto e nos permitem representar qualquer combinação de letras, números e / ou símbolos.
// Para definir uma string, o conteúdo em questão deve ser colocado entre aspas, por exemplo:
// "Vagner Bezerra"
// "Meu nome é Vagner"
// "125 + 125 = 250"
// Para atribuir um valor do tipo string a uma variável, basta colocar o valor entre aspas após o operador igual (=), por exemplo:

let saudacao = "Hello World!"

// Exercício 2
// Declare duas variáveis chamadas  idade  e  peso,  e atribua um valor numérico a ambas.

let idade1 = 43
let peso = 64.0

// ##########################################

//Exercício 3
// Já vimos os tipos de dados número (números) e string (strings de texto), mas 
//Em JavaScript há mais um tipo de dados, o tipo de dados booleano. Isso nos permite representar dois valores lógicos, são eles:
// true = Representa o valor de que algo é verdadeiro
// false = Representa o valor de que algo é falso

let brasileiro = true

// ##########################################

//Exercício 4
// Escreva no arquivo script as variáveis expostas abaixo substituindo os tipos de dados citados por valores

let idade2 = 42
let sobrenome1 = "Bezerra"
let salarioMinimo = 400 

// ##########################################

//Exercício 5
// Vamos continuar praticando a declaração de variáveis e atribuição de valores: 
// Declare cinco variáveis com a nomenclatura a seguir e atribua a tais, um valor que atenda o tipo de dado indicado:
// - nome (string) 
// - idade (number)
// - altura (float)
// - possuiPet (boolean)
// - filmesFavoritos (array)

let nome1 = "Vagner"
let idade3 = 42
let altura = 1.69
let possuiPet = true
let filmesFavoritos = ["Seven"+"Coringa"]

// ##########################################

// Exercício 6
// Temos um desafio para você! 
// Precisamos criar um código que gere cartão de visita com nome, sobrenome e profissão dos clientes, para isso:
// Crie uma variável para guardar cada informação (cada uma deve receber um dos 3 nomes acima), 
// Depois faça a concatenação das informações em uma nova variável chamada cartaoDeVisita.

let nome2 = "Vagner"
let sobrenome2 = "Bezerra"
let profissão = "Programador"

let cartaoDeVisita = (nome + " " + sobrenome + " " + profissao + " ")

// ##########################################

// Exercício 7
// Uma empresa separou os seus ganhos dos meses nas seguintes variáveis:

// let janeiro =  100
// let fevereiro = 300
// let março = 90

// Ela precisa da sua ajuda para saber o total do lucro adquirido. 
// Sua missão é usar os operadores com as variáveis para realizar esse cálculo e use o console.log para imprimir o resultado!
// Para lhe auxiliarmos, já deixamos o código inicial:

let janeiro = 100
let fevereiro = 300
let marco = 90

lucro = (janeiro + fevereiro + marco)
console.log(lucro)

// ##########################################

// Exercício 8
// Vimos como declarar uma variável e atribuir um valor a ela, agora você provavelmente está se perguntando: qual é a utilidade de armazenar dados em variáveis?

// As variáveis ​​nos permitem reutilizar os dados atribuídos a ela apenas invocando seu nome.
// let umNumero = 124;
// console.log(umNumero);
// // Ao usar o comando console.log para imprimir o valor atribuído à variável umNumero veremos no console o valor 124
// Assim como podemos fazer operações matemáticas de adicionar (+) ou subtrair (-) números, podemos fazer o mesmo com variáveis ​​que já foram declaradas.
// let umNumero = 124;
// console.log(umNumero);
// let outroNumero = umNumero + 1;
// console.log(outroNumero );
// // O valor atribuído à outroNumero será impresso no console. Veremos 125. 

// Vamos ver se você entendeu: Declare duas variáveis ​​numeroA e numeroB e atribua valores numéricos à elas. Depois, crie as seguintes variáveis:

// - resultadoSoma - contendo a soma de numeroA e numeroB
// - resultadoMultiplicacao - contendo a multiplicação de numeroA e numeroB
// - resultadoDivisao - contendo a divisão de numeroA e numeroB
// - resultadoSubtracao - contendo a subtração de numeroA e numeroB

let numeroA = 8
let numeroB = 4

let resultadoSoma = numeroA + numeroB
let resultadoMultiplicacao = numeroA * numeroB
let resultadoDivisao = numeroA / numeroB
let resultadoSubtracao = numeroA - numeroB

// ##########################################

// Exercício 9
// Um sistema de gestão escolar quer calcular a média das notas de um aluno.
// Ele guarda em variáveis as notas de cada um dos trabalhos realizados:

// let trabalhoDeHistoria = 8.0
// let trabalhoDeMatematica = 7.0
// let trabalhoDeCiencia = 10
// let trabalhoDeGeografia = 9.5

// Sua missão é completar o código para fazer com que o sistema calcule a média das notas, 
// somando-as e dividindo o total pela quantidade de trabalhos (variável quantidadeDeTrabalhos).
// Atribua o resultado dessa conta a uma variável chamada media

let trabalhoDeHistoria = 8.0
let trabalhoDeMatematica = 7.0
let trabalhoDeCiencia = 10
let trabalhoDeGeografia = 9.5

let media (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / 4
console.log(media)

// ##########################################

// Exercício 10
// O verdadeiro poder do Boolean é que eles podem surgir como resultado de fazer comparações entre diferentes valores com alguns operadores matemáticos.
// Por exemplo: sabemos que se fizermos a alguém a pergunta "2 é maior que 1?" a pessoa nos responderia "Sim, é verdade, 2 é maior que 1". 
// O mesmo acontece em JavaScript, só que fazemos essa pergunta da seguinte maneira: 2 > 1
// // JavaScript sabe que o resultado disso é verdadeiro
// Isso significa que "2 > 1" representa um valor verdadeiro. Também poderíamos ter escrito o código acima da seguinte maneira: 
// var operacao = 2  > 1;

// E se fizermos a alguém a seguinte pergunta: "2 é menor que 1?" Nesse caso, as pessoas nos responderiam: 
// "Isso é falso, 2 não é menor que 1". 
// Novamente, a mesma coisa acontece em JavaScript, mas nós o consultamos da seguinte maneira:
//var outraOperacao = 2  < 1;
 
// Para continuar, você deve definir duas variáveis: a numeroMenor e numeroMaior, e atribuir a elas diferentes valores numéricos de acordo com seus nomes.
// Em seguida, defina a variável eMenor, ela deve receber o resultado da comparação se numeroMenor é menor que numeroMaior; 
// Crie mais uma variável eMaior, com o resultado da comparação se numeroMenor é maior que numeroMaior.

let numeroMenor = 2
let numeroMaior = 4

let eMenor = numeroMenor < numeroMaior
let eMaior = numeroMenor > numeroMaior

