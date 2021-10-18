// 6-a) - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function myFunction(a,b) {
    return a+b;
}
var outCome = myFunction;
myFunction(5,5);
console.log(outCome);

// 6-b) - A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function secondFunc(a,b) {
    if (typeof(a) === "number" && typeof(b)  === "number") {
        console.log(a+b)
    }   else {
        alert("This is not a number")
        return NaN
    }
}
console.log(secondFunc(5,5));

// 6-c) - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function numberCheck(x) {
    return Number.isInteger(x);
}

console.log(numberCheck(50));

// 6-d) - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function myFunction1(a,b) {
    var result = a+b
    if (numberCheck(result)) {
        console.log(result)
    } else {
        alert("error")
        console.log(Math.round(result))
    }
} 
   
myFunction1(5,2)

// 6-e) - Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function separated(a,b) {
    if (typeof(a) === "number" && typeof(b)  === "number") {
        console.log(a+b)
    }   else {
        alert("This is not a number")
        console.log("NaN")
    }
}

function myFunction(a,b) {
    separated(a,b)
}
    
separated(5,10)
myFunction(10,"g")