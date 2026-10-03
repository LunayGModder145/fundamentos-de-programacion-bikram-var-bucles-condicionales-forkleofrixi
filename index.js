// EJERCICIOS DE PAIR PROGRAMMING:

// --- Variables ---

// 1.- Variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// 2.- 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;

// 3.- Variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

// 4.- Variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;

// --- Booleanos ---

// 5. Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;

// 6. Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1
let booleanoNot = !booleano1;

// 7. Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// --- Operadores ---

// 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

// 9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// --- Bucles ---

// 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
}

// 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

// 12.- Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}


