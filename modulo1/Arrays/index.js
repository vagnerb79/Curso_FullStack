
//Exercício 1
// Podemos apenas criar arrays de strings?
// E se eu quiser, por exemplo, representar os números da loteria que saíram na semana passada?
// Ou as sucessivas jogadas de um dado?
// Ou se der cara ou coroa em lançamentos sucessivos de uma moeda?

// var numerosDaLoteria = [2, 11, 17, 32, 36, 39];
// var jogadasDoDado= [1, 6, 6, 2, 2, 4];
// var deuCara= [false, false, true, false];
// var listaDeListasDeNumeros = [[1, 6], [6, 2, 2, 4]]
// Como você pode ver, podemos ter arrays de números, strings, booleanos, etc. Podemos até ter arrays de arrays! 

// Importante seguir sempre a mesma estrutura: organizamos os itens entre colchetes e separados por vírgulas. 

// Vamos ver se ficou claro?

// Crie dois arrays, seguindo as instruções abaixo:

// - listaDePares: contendo todos os números pares de 1 a 10
// - listaDeFilmes: contendo os títulos da trilogia do Senhor dos Anéis: A Sociedade do Anel, As Duas Torres e O Retorno do Rei.

let listaDePares = [2, 4, 6, 8, 10]
let listaDeFilmes = ['Seven', 'Coringa']

// ##########################################

//Exercício 2
// Agora sabemos como criar um array!
// É muito importante sabermos também quantos elementos tem dentro de um array, porque isso irá nos permitir criar algumas lógicas bem incríveis.
// Para isso iremos usar um recurso chamado length ( Comprimento em inglês). 
// E usamos esse recurso a partir de um array já criado atrás de um ponto ( . ), como no exemplo abaixo:
// var listaDeFrutas = [ "banana", "uva", "laranja" ]
// var quantidadeDeFrutas = listaDeFrutas.length // Isso irá nos retornar o numero 3, pois existem 3 frutas em nosso array.
// Bom, vamos ser você entendeu, queremos criar uma função que receba um array por parâmetro e retorne a seguinte frase: 
// "Esse array tem X elementos" onde X deve ser a quantidade de elementos que o array tem. A função deverá se chamar quantosElementos.

function quantosElementos (array){
    return("Esse array tem " +  array.length + " elementos")  
}

// ##########################################
  
//Exercício 3
// Você já sabe criar um array e já sabe como descobrir quantos itens ele tem através da propriedade .length. Demais né?

// Agora vamos aprender outra coisa: também podemos adicionar novos elementos ao array de maneira descomplicada usando o método push. 
// Novamente: para adicionar um elemento a um array devemos indicar o array seguido por um ponto ( . )  
// e o método push com o elemento que queremos adicionar passado como parâmetro.

// Por exemplo:
// var listaDeFrutas = [ "Laranja" ]
// listaDeFrutas.push("Uva")
// Agora nosso array terá 2 elementos [ "Laranja", "Uva" ]

// Agora é sua vez! Queremos criar uma função chamada agregandoSabor que irá receber um array com ingredientes e um novo item para ser adicionado.
// Seu trabalho será pegar esse parâmetro e adicioná-lo ao array de ingredientes. Por fim, não esqueça de retornar o array com as novas alterações.

let ingredientes = [["Pão"], "Queijo"]
function agregandoSabor (array1, array2){
    array1.push(array2)
    return array1
}

// ##########################################

//Exercício 4
// Uma agência de carros quer exibir os itens do seu catálogo para os clientes. 
// Eles exportaram os nomes dos carros no formato de array e guardamos essas informações na variável listaDeCarros que já vai estar disponível no código. 

// Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador. 
// Use o console.log para exibir o nome dos carro de acordo com o exemplo abaixo:

// “Nome do Carro: NOME_DO_CARRO”

let listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]
   for (let i = 0;  i < listaDeCarros.length; i++ ){
    console.log("Nome do Carro:" + listaDeCarros [i])
}

// ##########################################

//Exercício 5
// Um mercado tem uma lista de produtos, que eles querem exibir para todo novo cliente que chegar! 
// Como o processo é um pouco trabalhoso e repetitivo eles precisam do seu conhecimento em funções para ajudá-los.

// Eles já tem um código, porém toda vez eles precisam reescrever o código para exibir ao cliente:

// var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
// for(var i = 0; i < lista.length; i++){
// 	console.log(lista[i])
// }
// Seu trabalho é melhorar esse código, para ficar mais simples utilizá-lo. 
// Precisamos que você transforme o código acima em uma função chamada listarProdutos.

function listarProdutos(){
    let lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
        for(letvar i = 0; i < lista.length; i++){
            console.log(lista[i])
    }
}

// ##########################################

//Exercício 6
// Uma empresa separou em uma lista, os valores dos lucros mensais. 
// Com isso você terá no código um array com o seguinte nome: listaDeLucro contendo em cada posição o valor de recebido de cada mês!
// var listaDeLucro = [100, 30, 300, -10, 600, 10]

// Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, e coloque o valor em uma 
// variável já existente no código chamada: lucroTotal

let listaDeLucro = [100, 30, 300, -10, 600, 10]
let lucroTotal = 0

for(let i=0; i< listaDeLucro.length ; i++){
    lucroTotal = lucroTotal + listaDeLucro [i]
}

// ##########################################

//Exercício 7
// Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou, e nosso trabalho é ajudá-los a 
// criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.

// var listaDeGanhos = [10, 30, -10, -5, -1, 40]

// Com base no array acima, que está disponível no código, faça um loop que verifique quantos meses tiveram valores 
// negativos e armazene a contagem uma variável chamada totalNegativos que também está disponível no código.

let listaDeGanhos = [10, 30, -10, -5, -1, 40]
let totalNegativos = 0

for(let i=0; i< listaDeGanhos.length ; i++){
    if(listaDeGanhos [i] < 0 ){
        totalNegativos++
    }
    console.log(totalNegativos)
}

// ##########################################

//Exercício 8
// Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta que o usuário 
// busca eles querem informar se existe a fruta na lista ou não! 

// var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]

// Você deverá criar um loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão. 
// Se existe basta exibir uma mensagem, “Sim, temos a fruta banana disponível”. 
// Use a variável busca para exibir o nome da fruta nessa mensagem de forma dinâmica.

let listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
let busca = "Uva"
    for(let i = 0; i < listaDeFrutas.length; i++){
        if(busca == listaDeFrutas[i]){
        console.log("Sim, temos a fruta "+ busca +" disponível")
        }
}

// ##########################################

//Exercício 9
// Vamos praticar um pouco mais sobre métodos de arrays?
// Para esse exercício iremos usar os seguintes métodos: 

// .push() - adiciona um novo elemento passado por parâmetro a um array.

// .pop()  -  remove e retorna o último elemento de um array. Não é preciso passar nenhum parâmetro!

// Você deverá criar uma função chamada moverItem que irá receber 2 arrays como parâmetros e deverá pegar o último 
// elemento do primeiro array e adicioná-lo como um novo elemente no segundo array. Exemplo:

// var arrayA = [ 1, 2, 3 ]
// var arrayB = [ 4, 5 ]

// moverItem(arrayA, arrayB)

// O arrayA terá os seguintes valores = [ 1 , 2 ]
// O arrayB terá os seguintes valores = [ 4, 5, 3 ] 

function moverItem (arrayA , arrayB){
    // let arrayA = [10]
    // let arrayB = [41,53]
    let pegarElemento = arrayA.pop()
        arrayB.push(pegarElemento)
        console.log(arrayA)
        console.log(arrayB)
}

// ##########################################

//Exercício 10
// Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
// Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.

// Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)

// Essa função deve receber dois parâmetros:
// O primeiro deve representar o nome de um aluno
// O segundo deve representar um array com o os nomes dos alunos presentes.
// A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.

let nomeAluno = 'Vagner'
let alunosPresentes = ['Vagner','Maria','João']
    function estavaPresenteNaAula(nomeAluno, alunosPresentes){
        if(alunosPresentes.indexOf (nomeAluno) != -1){
            return true;     
        }else{
            return false;
        }
}

// ##########################################

//Exercício 11
// Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. 

// Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras. 
// Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.

function transformaParaMaiusculo(palavras){
    var novo = []
    for(var i = 0; i < palavras.length; i++) novo.push(palavras[i].toUpperCase())
    return novo
}
console.log(transformaParaMaiusculo(["vagner", "maria", "luiza"]))







