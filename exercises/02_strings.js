// 2-a) - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var thingsIlike = "I like playing videogames";
console.log(thingsIlike.toUpperCase());

// 2-b) - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var fruits = "Apple, Banana, Tangerine";
var firstFruit = fruits.substring(0,5);
console.log(firstFruit);

// 2-c) - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var clubFan = "I am a Newells Old Boys fan";
console.log(clubFan.length);
var lastThree = clubFan.substring(24,27);

// 2-d) - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var myFood = "i like hamburguers";
console.log(myFood.length);
var newFood = myFood.substring(0,1).toUpperCase()+myFood.substring(2,18).toLowerCase();
