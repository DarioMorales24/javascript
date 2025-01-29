/*===== Tipado dinamico =====*/

/*Javascript es un lenguaje de tipado dinamico esto quiere decir que una variable puede pasar de un tipo de dato a otro */

let numero = 43;
let nombre = "Hola mundo";
let verdadero = true;
let undef;
let nula = null;

//nombre = 53;  <- Podemos pasar de un tipo de dato a otro en JS
console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula); //<- Esto arroja object, ya que algo null los navegadores lo asocian a un objeto vacío