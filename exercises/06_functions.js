// 6-a) - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function myFunction(a,b) {
    var outCome = a+b;
    console.log(outCome);
}

myFunction(10,20);

// 6-b) - A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function secondFunc(a,b) {
    if (typeof(a) === "number" && typeof(b)  === "number") {
        console.log(a+b)
    }   else {
        alert("This is not a number")
        console.log("NaN")
    }
}
secondFunc(5,5);

// 6-c) - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(x) {
    console.log(Number.isInteger(x));
}

validateInteger(50);