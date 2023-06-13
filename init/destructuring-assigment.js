/* console.log("Destructuring Assigments: \n")

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y + 1);
console.log(z + 2);

console.log("Atribuindo o resto de um array para uma variável: \n")

var [a, ...b] = [1, 2, 3];
console.log(a)
console.log(b) */

console.log("Utilizando o spread: \n")

/* function testSpread(a, b, c) {
    return [a, b, c];
}

resultado = testSpread('ale', 'davi', 'aena')
console.log("resultado: ", resultado) */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrWithSpread = [...arr]

console.log("arr: ", arr);
console.log("arrWithSpread: ", arrWithSpread);

