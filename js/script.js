//ejercicio 10 original -Agregue una variable más y concatene su valor a frase completa
function ej1() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej1.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    let nombre = "Programación" + " Fácil.";
    let saludo = "Les doy la bienvenida a ";
    //variable agregada al ejercicio original
    let comision = " Ustedes integran la Comisión E.";
    let fraseCompleta = saludo + nombre + comision;
    console.log(fraseCompleta);
    alert("Se ejecutó el ejercicio, mire la consola para ver el resultado.");
}

//2do ejercicio. Pruebe la siguiente línea de código:
function ej2() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej2.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    let frase = "JavaScript " + " es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
    console.log(frase);
    alert("Se ejecutó el ejercicio, mire la consola para ver el resultado.");
}

//Agregue un texto con un espacio entre los números y el texto.
function ej3() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej3.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";
    //textos con espacio agregados
    let concatenaNumeros = "1er número: " + numeroString1 + ", 2do número: " + numeroString2 + ", 3er número: " + numeroString3;
    console.log(concatenaNumeros);
    alert("Se ejecutó el ejercicio, mire la consola para ver el resultado.");
}

//Agregue el pedido del nombre, muestre su nombre y edad con un console.warn
function edad() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej4.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    do {
        //pide ingrese la edad
        var age = prompt("¿Cual es tu edad?");
        //pregunta si cancela
        if (age == null) {
            alert('Salió del ejercicio.')
            console.log("Salió.");
        }
        //pregunta si ingreso un numero
        else if (Number.isInteger(+age) === true) {
            console.log(age);
            //pedido de nombre (cualquier valor alfanumérico) y muestra nombre y edad con console.warn
            var name1 = prompt("¿Cual es tu nombre?");
            //pregunta si cancela
            if (name1 == null) {
                alert('Salió del ejercicio.')
                console.log("Salió.");
            }
            //muestra en consola nombre y edad solo si da aceptar
            else {
                alert("Se ejecutó el ejercicio, mire la consola para ver el resultado.");
                console.warn("El nombre es ", name1, " la edad es ", age);
            }
        }
        //avisa entrada no valida para edad
        else {
            age = 0;
            alert("No introdujiste un valor válido");
        }
        //pide la edad mientras el valor no es valido
    } while (age == 0);
}

/*De igual manera determinamos si es hombre o mujer, y modificamos el código original, para que las mujeres puedan acceder a partir de los 20, los hombres de los 18
-código original:

let edad;
edad = prompt("Introduce tu edad");
if (edad >= 18) {
    alert("Puedes entrar, eres mayor de edad.");
} else {
    alert("No puedes entrar, eres menor de edad.");
}*/

//código con la modificacion pedida:

function entrada() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej5.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    do {
        //pide ingrese edad
        edad = prompt("Introduce tu edad");
        //pregunta si elige cancelar
        if (edad == null) {
            alert('Salió del ejercicio.')
            console.log("Salió");
        }
        //si la edad es numero entero ejecuta
        else if (Number.isInteger(+edad) === true) {
            //si la edad es mayor a 18 ejecuta
            if (edad >= 18) {
                do {
                    //pide ingresar el sexo
                    sexo = prompt("Introduce tu sexo (hombre/mujer)");
                    //pregunta si cancela
                    if (sexo == null) {
                        alert('Salió del ejercicio.')
                        console.log("Salió");
                    }
                    //pasa el texto ingresado a minuscula y pregunta si es 'hombre' o 'mujer'
                    else if (sexo.toLowerCase() === "hombre" || sexo.toLowerCase() === "mujer") {
                        //pasa el texto ingresado a minuscula y pregunta si es 'hombre'
                        if (sexo.toLowerCase() == "hombre") {
                            alert("Puedes entrar, eres varón mayor de 18 años.");
                        }
                        //pregunta si es mujer mayor de 20 y muestra mensaje segun la condicion
                        else if (edad >= 20) {
                            alert("Puedes entrar, eres mujer mayor de 20 años.");
                        }
                        else {
                            alert("No puedes entrar, eres mujer menor de 20 años.");
                        }
                    }
                    //mensaje al no ingresar 'hombre' o 'mujer'
                    else {
                        sexo = "error"
                        alert("Por favor introduce 'hombre' o 'mujer'.");
                        console.log(sexo, " No se introdujo 'hombre' o 'mujer'.")
                    }
                    //pregunta por el sexo hasta que ingrese valor valido
                } while (sexo == "error");
            }
            else {
                //mensaje si es menor de 18 y hombre
                alert("No puedes entrar, eres menor de edad.");
            }
        }
        //avisa entrada no valida para edad
        else {
            alert("No introdujiste un valor válido.");
            console.log(edad, "NO es entero");
            edad = 0;
        }
        //pide la edad mientras el valor no es valido
    } while (edad == 0);
}

function limpiar() {
    document.getElementById("ej1").style.visibility = "hidden";
    console.clear();
}