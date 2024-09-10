// Declarações de variáveis e suas diferenças

//tipo mais comum VAR

"use strict"

var nome="Danilo" //o nome do "bloco/var é nome" e o "valor é Danilo"


/*let permite que a variavel seja acessada apenas dento no escopo na qual 
foi criada*/

if(true){
    let nome="Danilo"
}

console.log(nome) /*caso queiramos executar o código, haverá um erro, pois 
                    o escopo está preso no let.*/


//outro exemplo de restrinção
"use strict"

function test() {
    let nome="Danilo"
    if(true){
        console.log("dentro do IF do teste: " + nome)
    }
    console.log("dentro de teste: " + nome)
}

test()

console.log("fora de teste: " + nome) /*o console.log não vai executar, pois
                                       está fora da função {}*/

/* Let, por ser uma variavel, ela também corre para ser mútavel, não importando
o valor de sua variável. Além de voce poder mudar o tipo de valor, como número*/


/* Const (constante) serve para que o valor da sua variavel não mude durante o programa*/
"use strict"

let nome="Danilo"
nome="CFB Cursos"
nome=10  //troca de valor de Danilo>CFB Cursos>10

const curso="Javascript"

/*caso eu tente colocar mudar a o valor de curso [curso="html"] haverá um erro de tipo;
vou estar mudar o valor de uma variavel que não pode ser alterada. É para isso que serve 
o const*/

console.log(curso)