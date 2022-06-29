"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
if (numero1 < numero2) {
    alert("El número 2, " + numero2 + " es mayor al número 1, " + numero1)
} else{
    if (numero1 > numero2) {
    alert("El número 1, " + numero1 + " es mayor al número 2, " + numero2)
} 
else{
    alert("Los números " + numero1 + " y " + numero1 + " ingresados son iguales")
    }
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 < 0){
    alert("El número 1, " + numero1 + " es negativo")
} else{
    if (numero1 > 0){
    alert("El número 1, " + numero1 + " es positivo")
    }
else{
    alert("El número 1, " + numero1 + " es igual a 0")
    }
}

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
if ((numero1 < 0) && (numero1 > 100)){
    alert("El número 1, " + numero1 + " no se encuentra comprendido entre 0 y 100.")
}
else{
    alert("El número 1 se encuentra comprendido entre 0 y 100.")
}
// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
if((numero1 < 10) || (numero2 > -2)){
    alert("O bien el número 1, " + numero1 + " es menor a 10 o bien el número 2, " + numero2 + " es mayor a -2")
}
else{
    alert("El número 1, " + numero1 + " es mayor o igual a 10 y el número 2, " + numero2 + " es menor o igual a -2")
}