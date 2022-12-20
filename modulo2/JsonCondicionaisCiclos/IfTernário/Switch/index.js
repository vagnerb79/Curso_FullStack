
// Exercício I
//Com este exercício, vamos conseguir fazer um simples "if"."
    
//Declare uma variável com o nome dado e atribua um valor booleano.
//Então você deve fazer um  if para avaliar essa variável: se for true imprimir "É verdadeiro!", caso contrário "É falso!".

let dado = true
if (dado == false){
    console.log(" É verdadeiro!")
}
else {
    console.log("É falso!")
}

// ##########################################

//Exercício II
//O objetivo deste exercício é imprimir um texto na tela, que será condicionado da seguinte maneira.

//Usando "switch" você deve avaliar se a variável "dia" é segunda, quarta ou sexta-feira e, nesse caso, 
//você deve imprimir o texto " você tem aulas!".Para qualquer outro caso, você deve imprimir "você não tem aulas".

let dia = "sabado";

function fimDeSemana(dia){
switch (dia){
	case "segunda":
	console.log(" você tem aulas!");
	break
	case "quarta":
	console.log(" você tem aulas!");
	break
	case "sexta-feira":
	console.log(" você tem aulas!");
	break	
	default:
	console.log("você não tem aulas")
}	
}

fimDeSemana(dia)

// ##########################################

//Exercício III
// O objetivo deste exercício é imprimir no console um texto que varia de acordo com o dia que contém na variável dia. 
// Para isso, já apresentamos um código feito com if / else que você precisará modificá-lo para testar as diferentes mensagem.

let day = 'segunda-feira'

function fimDeSemana(day) {
switch (day){
	case "sexta-feira":
	console.log("Bom fim de semana!");
	break
	case "segunda-feira":
	console.log("Boa semana!");
	break
	default:
	console.log("Bom dia!");
}
}

// ##########################################