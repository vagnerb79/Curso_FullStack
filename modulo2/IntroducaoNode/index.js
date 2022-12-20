
// Exercício I
//Vamos praticar a importação de módulos, algo que usaremos com frequência.

//Seu objetivo será criar 3 variáveis: "moduloNativo", "moduloInstalado" e "moduloProprio", onde cada uma armazenará um módulo distinto. 
//A primeira deve requisitar o módulo http, a segunda o módulo axios e a terceira um módulo local exportado do arquivo minhaFuncao.js. 
// Este arquivo se encontra na mesma pasta que o arquivo index.js.

let moduloNativo = require('http')
let moduloInstalado = require('axios');
let moduloProprio = require('./minhaFuncao');

// ##########################################

//Exercício II
//Temos alguns dados do cachorro Scooby armazenados na variável cachorro, o qual queremos usar em outros módulos. 
//Seu trabalho é exportar essa variável, para ser usada em outros pontos do nosso código.

let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}
module.exports = cachorro;

// ##########################################