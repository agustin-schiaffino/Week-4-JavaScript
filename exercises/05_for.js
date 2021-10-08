// 5-a) - Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var fiveWords = ["hamburguer", "pizza", "pasta", "salad", "bacon"];
for (let i = 0; i < fiveWords.length; i++) {
    alert(fiveWords[i]);
}

// 5-b) - Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for (let i = 0; i < fiveWords.length; i++) {
    alert(fiveWords[i].substring(0,1).toUpperCase()+(fiveWords[i].substring(1).toLowerCase()));
}

