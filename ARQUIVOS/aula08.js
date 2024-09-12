/* 

Operadores lógicos em JS. 

&& -> and e (comparação)
|| -> or ou (comparação)
! -> not não (inverção/negação)

ver a tabela que está na pasta
*/

let n1,n2,n3,n4 
n1=10
n2=5
n3=15
n4=2

console.log((n1>n2)||(n1>n3)) //true

let n5,n6,n7
n5=11
n6=6
n7=16 

console.log((n5>n6)&&(n5>n7)) //false

let n8,n9,n10
n8=10
n9=5
n10=15

console.log(!(n8>n9)||(n8>n10)) //false

let n11,n12
n11=10
n12=5

if(n11>n12){
    console.log(n11 + "maior que" + n12)
}else{
    console.log(n11 + "menor que" + n12)
}

let n13,n14,n15,n16
n13=10
n14=5
n15=15
n16=2

if((n13>n14) && (n15>n16)){  //caso utilizassemos o !, a operação seria falsa e ! com || verdadeira
    console.log("verdadeiro")
}else{
    console.log("falso")

}
