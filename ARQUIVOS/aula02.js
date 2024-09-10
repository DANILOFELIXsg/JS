/* modo estrito serve para deixar o nosso código
de uma maneira mais limpa, com menos coisas inutilizadas */

/* três modos de usar o console.log */

let nome="Danilo"
console.log("CFB Cursos")   /*string */
console.log(nome)   /*variavel */
console.log("Nome: " + nome)    /*string e variavel */

"use strict" // não permite, por exemplo, que se use uma variação sem declaração
            //como seria o caso de excluirmos o "let" da variação "nome", pois
            // daria erro de referencia 