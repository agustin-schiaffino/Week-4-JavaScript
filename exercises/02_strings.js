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

// 2-e) - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var myBrothers = "i have two brothers";
var blankSpace = myBrothers.indexOf(" ");

// 2-f) - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var longWords = "multidimensional development";
console.log(longWords.indexOf(" "));
var newWords = longWords.substring(0,1).toUpperCase()+longWords.substring(1,16).toLowerCase()+longWords.substring(17,18).toUpperCase()+longWords.substring(18,28).toLowerCase();
console.log(newWords)