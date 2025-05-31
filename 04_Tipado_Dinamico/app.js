// ==== Tipado Dinamico vs Tipado Estatico

/*
*   Tipado Estatico <- JAVA
*    - Un tipo de Dato no puede cambiar a otro
*       - String hola = 'Hola Mundo';
*       - hola = 10;
*   Tipado Dinamico <- JAVASCRIPT
*    - Un tipo de dato puede cambiar dentro de una variable
*       - let hola = 'Hola Mundo';
*       - hola = 10;
*/

let numero = 43;
let nombre = 'Hola Mundo';
let verdadero = true;
let undef;
let nula = null;

console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula); // <- Esto devuelve Object

console.log('');
numero = false;
nombre = 4;
verdadero = null;
undef = 'Hola Mundo';
nula = 4.0;

console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula);