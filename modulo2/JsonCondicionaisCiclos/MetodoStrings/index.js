
// Exercício I
//Sabemos que todo site tem uma URL e precisamos passar sempre o protocolo HTTP antes. 
//Acontece que alguém cadastrou uma lista de sites sem o protocolo e agora precisamos consertar isso.

//Para isso, vamos criar uma função chamada dominio. Essa função vai receber um parâmetro URL (pode ser qualquer nome), que é uma string. 
//O retorno dessa função é a própria URL, mas com http:// no começo.

//Por exemplo:

// Se alguém tentar usar o site twitter.com, a função deve retornar http://twitter.com
// Se alguém tentar usar o site gov.br, a função deve retornar http://gov.br
// Se alguém tentar usar o site digitalhouse.com, a função deve retornar http://digitalhouse.com

// Lembre-se que esses são exemplos, a função deve ser genérica para adicionar esse texto a qualquer site, não só esses.

function dominio(url)
{
  if(url)
    return "http://" + url;
  else
    console.log(url+" não informada");
}

dominio("br.digitalhouse.com");
dominio("9gag.com");

// ##########################################


