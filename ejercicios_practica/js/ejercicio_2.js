"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
if(texto1 < texto2){
    alert("La segunda palabra,"+texto2+ ", es mayor que la primera, "+texto1+".")
} else{
    if(texto1 > texto2){
    alert("La primer palabra, "+texto1+ " es mayor que la segunda, "+texto2+ ".")
    }
else{
    alert("Ambas palabras son iguales.")
    }
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
if(copiaTexto1 == texto1){
    alert("La primer palabra ingresada se ha copiado correctamente.")
}
else{
    alert("La primer palabra ingresada no se copió con éxito")
}
// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if(copiaTexto1 != texto2){
    alert("La copia de la primer palabra es distinta a la segunda palabra.")
}
else{
    alert("La copia de la primer palabra coincide con la segunda palabra ingresada.")
}