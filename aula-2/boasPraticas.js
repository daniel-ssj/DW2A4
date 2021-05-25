//Boas prática JavaScript

/*
1) Usar === em vez de == para comparação
Quando o == é utilizado o javascript automaticamente converte tipos. Para evitar conversões inesperadas,
é uma boa prática utilizar ===
*/

let numero = 1
console.log(numero == '1') // true
console.log(numero === '1') //false

let boolean = true
console.log(boolean == 1) //true
console.log(boolean === 1) //false

/*
2) Sempre usar tipos primitivos e não objetos
Utilizar objetos ao invez de tipos primitivos deixa o código mais lento e há grande chance de gerar erros,
já que não se pode comparar primitivos com objetos, nem objetos com objetos
*/

let nome = new String('João')

console.log(nome === 'João') //false
console.log(nome == new String('João')) //false

/*
3) Usar parâmetros default em funções
Se uma função é chamada sem argumentos passados, o valor do argumento é configurado para undefined.
Valores undefined podem quebrar o código, por isso é uma boa prática utilizar valores default
 */

function add(x, y) {
  if (x === undefined) x = 0
  if (y === undefined) y = 0

  return x + y
}

console.log(add(5)) //5

function otherAdd(x, y) {
  return x + y
}

console.log(otherAdd(5)) //Not a number

/*
fonte: https://www.w3schools.com/js/js_best_practices.asp
*/
