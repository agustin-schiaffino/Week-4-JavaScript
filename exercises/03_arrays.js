// 3-a) - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5], months[11]);

// 3-b) - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(months.sort());

// 3-c) - Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.unshift("First");
months.push("Last");
console.log(months);

// 3-d) - Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log(months);

// 3-e) - Invertir el orden del array (utilizar reverse).
console.log(months.reverse());

// 3-f) - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log(months.join(" - "))