/* operadores relacionais 

> (maior)
>= (maior-igual)
< (menor)
<= (menor-igual)
== (igual)
= (atribuição - quando uma variavel recebe um valor)
!= (diferente)

*/

let num1=10
let num2=5
let num3=10

console.log(num1 > num2) //num1=10 é maior q num2=5, então o resultado será true

let num4=10
let num5=5
let num6=10

console.log(num4 >= num6) //true, pois num1 não maior que num3, mas é igual a num3. 

let num7=10
let num8=5
let num9=10

console.log(num7 == num9) //true, pois 10 é igual a 10


let num11=10
let num12=5
let num13=10

console.log(!(num11 == num13)) /*num1 e num3 são iguais, a negação ! que coloco antes
                            inverte a logica, dizendo que o num1 e num3 não são iguais,
                            o que é falso (falso)*/

let num14=10
let num15=5
let num16=10

console.log(num14 != num16) /*false, pois os operadores são iguais. Caso botassemos 
                        o diferente ! como no exemplo acima, o resultado seria true, 
                        pois num1 e num3 não são diferentes, mas iguais*/


