// ==== Funciones ====

// Declaración de una función

function saludar(){
    console.log('¡Hola, mundo!');
}

// Llamada a la función

saludar(); // ¡Hola, mundo!

function suma() {
    return 2+2;
}

let resultado = suma();

console.log(resultado); // 4
console.log(suma()); // 4

//---------------------------------------------------

// Función con parámetros

function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5)); // 8

console.log(typeof sumar); // function

// Función con parámetros y retorno

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5)); // 20


