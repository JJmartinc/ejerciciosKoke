//Hay que crear una tercera variable con la operacion a realizar
//Se recojen los numeros introducidos con las dos primeras variables
//La tarcera variable es para indicarle al programa que es lo que tiene que hacer con las dos primeras variables
//Recogemos las entradas y mostramos la salida en un alert con la siguiente expresión //!alert("El numero de la suma es: " +suma)
//Asi para todas las operaciones
function suma() {  //!Argumento dentro de los parentesis de una funcion

    var n1, n2, suma;

    n1 = parseInt(prompt("Ingrese un numero: "));
    n2 = parseInt(prompt("Introduce un segundo numero: "));

    suma = n1 + n2;

    alert("El resultado de la suma es: " + suma);

};

function resta() {

    var n1, n2, resta;

    n1 = parseInt(prompt("Ingresa un numero :"));
    n2 = parseInt(prompt("Ingresa un segundo numero a restar :"));

    resta = n1 - n2;

    alert("El resultado de la resta es: " + resta);

};

function mult() {
    var n1, n2, mult;

    n1 = parseInt(prompt("Ingresa un numero: "))
    n2 = parseInt(prompt("Ingresa un segundo numero: "))

    mult = n1 * n2;

    alert("El resultado de la multiplicacion es: " + mult);

};


function div() {

    var n1, n2, div;

    n1 = parseInt(prompt("Ingresa un numero: "));
    n2 = parseInt(prompt("Ingresa un segundo numero"));

    div = n1 / n2

    alert("El resultado de la division es: " + div)

};
// function plus(n1, n2) {
//     var n1, n2, suma
//     suma = n1 + n2;
//     return suma
// }

// var num1 = parseInt(prompt("Ingresa un numero: "));
// var num2 = parseInt(prompt("Ingresa un segundo numero"));

// console.log(plus(num1, num2))

// // 2. Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y
// // el programa muestre en una alerta la temperatura en Fahrenheit.
// function temperatura() {

//     var n1, conv;

//     n1 = parseInt(prompt("Que temperatura quieres convertir a grados fahrenheit? "));
//     // conv = (n1 * 9/5);
//     // conv2 = (conv + 32);
//     //!FUNCIONA
//     conv = (n1 * 9 / 5) + 32;
//     //!TAMBIEN FUNCIONA


//     alert("Tu temperatura en fahrenheit es " + conv);
// }

function div10() {

    var n1, n2, div;

    n1 = parseInt(prompt("Introduce un numero para dividir: "));
    n2 = 10;
    div = n1 / n2;

    alert("El resultaod de la division es: " + div)
}

//Si a = [1,2,3] crear un script que determine y muestre un alert del tipo de dato de a.

function arrayIgual() {

    var datos, a;
    var array = [];
    a = [1, 2, 3]

    alert(typeof (a))

    datos = prompt("Ingresa tres numeros consecutivos por una coma: ");

    alert(typeof a)


    //Recorre los datos texto y pushea sino es una coma
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] != ",") {
            array.push(parseInt(datos[i]))
        }
    }

    // Comparar cada posicion del a y array
    var igualar = "Son distintos";
    if (array.length == 3) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[j])
            console.log(a[j])

            if (!array[j] == a[j]) {
                j = 5;
                igualar = "Son iguales";
            }
        }
    }

    console.log(igualar)

}

function par() {
    var n1;
    n1 = prompt("Introduce un número para saber si es par: ");

    if (n1 % 2 == 0) {
        alert(`El numero ${n1} es par`);
    } else {
        alert(`El numero ${n1} es impar`);
    }
}

function divCinco() {
    var n1;
    n1 = prompt("Introduce un numero para saber si es divisible por cinco")

    if (n1 % 5 == 0) {
        console.log("El numero es divisible entre cinco");
    } else {
        console.log("El número no es divisible entre cinco");
    }
}

function divDos() {
    var n1;
    n1 = prompt("Introduce un numero para saber si es divisible entre 11 y 5 ");

    if (n1 % 11 == 0 && n1 % 5 == 0) {
        console.log("El número introducido es multiplo de 11 y de 5");
    } else {
        console.log("El número introducido no cumple con lo requerido");
    }
}

function mayor() {
    var n1;
    n1 = prompt(["Aqui ingreso dos numeros."]);


    if (n1[0] > n1[1]) {
        alert("El numero " + n1[0] + " es mayor.");
    } else {
        alert("El numero " + n1[1] + " es mayor.");
    }

}

function desigual() {
    //! Esta es la estructura de un IF TERNARIO hay que incoporar en simbolo ? y separar las variables con un :.
    //! Si la primera condicion se cumple "true" da como resultado la primera variable, si no, da como resultado la segunda.
    var n1, n2;

    n1 = prompt("Ingresa un numero:");
    n2 = prompt("Ingresa un segundo numero");

    let mayor = n1 > n2 ? "El numero " + n1 + " es mayor" : "El numero " + n2 + " es mayor"

    alert(mayor)

}

function numeroLetra() {

    //Crear un programa que determine si un string introducido por un usuario empieza con
    //un número o con una letra.
    var n1;
    n1 = prompt("Introduce un string"); // ES NUMERO si esta entre (48-57)

    var numLet = (n1.charCodeAt(0) >= 48 && n1.charCodeAt(0) <= 57);

    var numLet = numLet ? "El string empieza por numero" : "El string empieza por una letra";

    alert(numLet);

}

//7. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

function triangulos() {
    var n1, n2, n3;
    n1 = parseFloat(prompt("Introduce un angulo"));
    n2 = parseFloat(prompt("Introduce un angulo"));
    n3 = parseFloat(prompt("Introduce un angulo"));

    var masCero = n1 > 0 && n2 > 0 && n3 > 0;
    var sumaAngulos = n1 + n2 + n3 == 180;
    console.log(n1, n2, n3);

    if (masCero && sumaAngulos) {
        alert("El triangulo es valido");
    } else {
        alert("el triangulo no es valido");
    }

}

//8. Determinar si una palabra empieza con mayúscula o no.

function mayuscula() {
    var n1
    n1 = prompt("Introduce una palabra");

    var numLet = (n1.charCodeAt(0) >= 65 && n1.charCodeAt(0) <= 90);

    var numLet = numLet ? "El string empieza por mayuscula" : "El string empieza por minuscula";

    alert(numLet);

}

//! Determinar si un año dado es bisiesto. 
// Si el año es uniformemente divisible por 4, 
// Si el año es uniformemente divisible por 100, 
// Si el año es uniformemente divisible por 400

// Por esta razón, los años siguientes no son años bisiestos:

// 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600

// Esto se debe a que son divisibles por 100 pero no por 400.

function bisiesto() {
    var n1
    n1 = parseInt(prompt("Introduce un año"));

    //1996 % 4 ==0      1996 % 100 !=0 
    if (n1 % 4 == 0 && n1 % 100 != 0) {

        console.log("Es año bisiesto");


    } else if (n1 % 4 == 0 && n1 % 100 == 0 && n1 % 400 == 0) {
        console.log("Es año bisiesto segundo");
    }else{
        console.log("No Es año bisiesto tercero");

    }
}


function adivinar(){
    var n1
    n1 = prompt("Selecciona un numero del  al 10: ");
    random = Math.floor(Math.random(1) * 10);
    console.log(random)
    if (n1 == random) {
        alert("El numero introducido es correcto.");
    } else {
        alert("El numero introducido no es correcto.");
    }
}