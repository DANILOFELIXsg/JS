/*Operadores matemáticos

+ (soma)
- (subtração)
/ (divisão) 
* (multiplicação)
%
++
--
+= (incrementação)
-=  (decrementação)

*/

let num1=0,num2=0,res=0

num1=5
num2=10

res=num1+num2 

console.log(res) //ou console.log(num2-num1), fazendo a conta no console

let num3=0, num4=0,res=0

num3=10
num4=10

res=(num3+num4)*2 //com parenteses, a conta será feita primeira por ele.

console.log(res)

//operador mod e divisão

let num1=0, num2=0, res=0

num1=2
num2=15

res=num2%num1 

console.log(num2/num1) //divisão = 7.5
console.log(num2%num1) //resto de 15/2 = 1 

//incremento e decremento adiciona 1 em uma var ou retira 1 de uma var

let num1=0

num1=10
num1++

console.log(num1) /*
                    resultado será 11. E quanto mais num1++ tiver, mais um será 
                  add. O mesmo para num1--, que irá tirar um valor do número
                  */

                  /* 
                  já o += e o -= tem a mesma função do ++ ou --
                  com a vantagem de poder colocaro número de adição ou subtração
                  sem a necessidade de se usar mais de uma linha = num1+=5 que add
                  mais 5 no valor num1=10 totalizando 15. O mesmo ocorre com *, / 
                  e outros operadores
                  */