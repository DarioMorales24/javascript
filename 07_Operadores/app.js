// ==== Operadores ====

/*
* OPERADORES
*   - Aritmeticos
*       - Suma
*       - Resta
*       - Multiplicacioón
*       - División
*       - Modulo
*       - Potencia
*   - Comparativos
*       - Mayor que
*       - Mayor o igual que
*       - Menor que
*       - Menor o igual que
*       - Igual que
*       - Distinto que
*   - Logicos
*       - AND -> &&
*       - OR -> ||
*       - NOT -> !
*   - Bitwise
*/

// Operadores aritmeticos

let a = 2;
let b = 3;

console.log(a + b); // 5
console.log(a - b); // 1
console.log(a * b); // 1
console.log(a / b); // 1
console.log(a % b); // 1
console.log(a ** b); // 1

// Incrementos

console.log(++a); // 3 <- incrementa luego imprime
console.log(a++); // 3 <- imprime luego imprementa
console.log(a);   // 4

// Decrementos

console.log(--a); // 3 <- decrementa luego imprime
console.log(a--); // 3 <- imprime luego decrementa
console.log(a);   // 2

console.log(' ');
//-------------------------------------------------------------------------------------------------

// Operadores de Asignación

let c = 5;

c = c + 5; // c = 10

c += 5;    // c = 15
console.log(c)

console.log(' ');

c -= 5;    // c = 10
console.log(c)

// c += 5 <===> c = c + 5
// c -= 5 <===> c = c - 5

console.log(' ');
//-------------------------------------------------------------------------------------------------

// Operadores de Comparación

let d = 10;

console.log(d > 5); // true
console.log(d >= 5); // true
console.log(d < 5); // false
console.log(d <= 5); // false

console.log(d == 10); // true
console.log(d != 10); // false
console.log(d == '10'); // true (solo evalúa valores no tipos)
console.log(d === '10'); // false (Evalua tipo y valor)
console.log(d !== '10'); // true

console.log(' ');
//-------------------------------------------------------------------------------------------------

// Operadores Lógicos

// And
let mayor = true;
let suscrito = true;

console.log(mayor && suscrito); // true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(' ');
// OR

console.log(mayor || suscrito); // true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(' ');
// NOT

console.log(!mayor); // false <- Niega lo que dice, !true -> false | !false -> true

console.log(' ');
//-------------------------------------------------------------------------------------------------

// Operadores Bitwise

// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7
// Decimal: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

console.log(1 | 3); // 00000001 | 00000011 -> 00000011 -> 3
console.log(1 | 4); // 00000001 | 00000100 -> 00000101 -> 5
console.log(2 | 4); // 00000010 | 00000100 -> 00000110 -> 6

console.log(1 & 3); // 00000001 | 00000011 -> 00000001 -> 1
console.log(1 & 4); // 00000001 | 00000100 -> 00000000 -> 0
console.log(2 & 4); // 00000010 | 00000100 -> 00000000 -> 0
