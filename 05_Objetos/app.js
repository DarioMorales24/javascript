// ==== Objetos ====

//personaje de TV

let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 16;

let personaje = {
    nombre : "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
};
console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);

// modificar un objeto

personaje.edad = 17;
personaje['anime'] = 'Demon Slayer';

console.log(personaje);

// Eliminar una propiedad

delete personaje.edad;
console.log(personaje)

// Añadir una propiedad

personaje.poder = "Respiración del sol";
console.log(personaje);

// -------------------------------------------

// ==== Arrays ====

let animales = ['Perro', 'Gato', 'Conejo', 'Loro'];

console.log(animales);
console.log(animales[0]); // Perro

// Modificar un array

animales[2] = 'Hamster';
console.log(animales);

animales[10] = 'Tortuga'
console.log(animales[7]); // undefined

console.log(animales.length); // 11
