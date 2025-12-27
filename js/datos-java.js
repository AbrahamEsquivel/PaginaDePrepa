const tituloPagina = "EJERCICIOS DE JAVA";

const listaContenido = [
    {
        id: 0,
        titulo: "REGRESAR AL MENÚ PRINCIPAL", 
        ejecutar: function() {

            window.location.href = "index.html"; 
        }
    },
    {
        id: 1,
        titulo: "Ejercicio 1: Párrafos",
        ejecutar: function() {
            imprimir(
                "Esto aparecerá en el navegador porque es un párrafo\n" +
                "Esto es otro párrafo\n" +
                "Observa lo que aparece en la línea de título\n" +
                "La línea de título es la frase que aparece en el marco del navegador\n" +
                "¿Está claro para qué sirven los tags P?"
            );
        }
    },
    {
        id: 2,
        titulo: "Ejercicio 2: Hola Mundo",
        ejecutar: function() {
            alert("¡Hola Mundo!");
            imprimir("Se mostró la alerta de Hola Mundo.");
        }
    },
    {
        id: 3,
        titulo: "Ejercicio 3: Tu Nombre",
        ejecutar: function() {
            var nom = prompt("Escribe tu nombre ", "Paco");
            alert("Mucho gusto " + nom);
            imprimir("Usuario saludado: " + nom);
        }
    },
    {
        id: 4,
        titulo: "Ejercicio 4: Área Rectángulo",
        ejecutar: function() {
            var base = prompt("Escribe la base del Rectángulo", "");
            var altura = prompt("Escribe la altura del Rectángulo", "");
            var area = base * altura;
            alert("El área del Rectángulo es = " + area);
            imprimir("Cálculo de Área:\nBase: " + base + "\nAltura: " + altura + "\nÁrea: " + area);
        }
    },
    {
        id: 5,
        titulo: "Ejercicio 5: Área Círculo",
        ejecutar: function() {
            var pi = 3.141592;
            var radio = 7;
            var area = pi * radio * radio;
            alert("Área del Círculo = " + area);
            imprimir("Cálculo de Círculo (Radio 7):\nÁrea: " + area);
        }
    },
    {
        id: 6,
        titulo: "Ejercicio 6: Tipos de Variables",
        ejecutar: function() {
            var PEPE = "Hola que tal ";
            var pepE = 75.47;
            var pEpe = " ¿Como estás?";
            var Pepe = PEPE + pEpe;
            imprimir("PEPE=" + PEPE);
            imprimir("PEPE es " + typeof(PEPE));
            imprimir("pepE=" + pepE);
            imprimir("pepE es " + typeof(pepE));
            imprimir("pEpe=" + pEpe);
            imprimir("pEpe es " + typeof(pEpe));
            imprimir("Pepe=" + Pepe);
            imprimir("Pepe es " + typeof(Pepe));
        }
    },
    {
        id: 7,
        titulo: "Ejercicio 7: Números y Alertas",
        ejecutar: function() {
            var num;
            alert("Hola que tal");
            alert("Hola \nque tal");
            alert("Hola\t" + "que" + "\n" + "tal");
            alert("Hola\n que\n t\nal");
            num = prompt("Escribe un número: ", "");
            alert("El \ndoble\n es: \n" + (num * 2));
            imprimir("Número ingresado: " + num);
        }
    },
    {
        id: 8,
        titulo: "Ejercicio 8: Bases Numéricas",
        ejecutar: function() {
            var n1 = 57;
            var n3 = 0xFF32;
            alert("número decimal= " + n1);
            alert("el 12345 en base 8 es en decimal= " + n2);
            alert("el FF32 en base 16 es en decimal= " + n3);
            imprimir("Ejemplo de conversión de bases numéricas.");
        }
    },
    {
        id: 9,
        titulo: "Ejercicio 9: Bases Numéricas (Resumen)",
        ejecutar: function() {
            var n1 = 57;
            var n3 = 0xFF32;
            alert("número decimal= " + n1 + "\n" + "el 12345 en base 8 es en decimal= " + n2 + "\n" + "el FF32 en base 16 es en decimal= " + n3);
            imprimir("Resumen de conversión de bases numéricas.");
        }
    },
    {
        id: 10,
        titulo: "Ejercicio 10: Concatenación de Cadenas",
        ejecutar: function() {
            var x, y, z;
            var salida = "";
            var x1 = "Pepito Grillo",
                y1 = "Paquita González";
            var num1 = 37,
                num2 = 3.752;
            x = prompt("Escribe tu nombre:", "");
            y = prompt("Escribe tu primer apellido:", "");
            z = prompt("Escribe tu segundo apellido:", "");
            salida = salida + "Ahora un alert largo ";
            salida = salida + x + y + z;
            salida = salida + x1 + " " + y1;
            salida = salida + num1 + " " + num2;
            salida = salida + " ,ya me he cansado";
            alert(salida);
            imprimir("Concatenación de cadenas y variables.");
        }
    },
    {
        id: 11,
        titulo: "Ejercicio 11: Operaciones Básicas",
        ejecutar: function() {
            var var1 = "Pepe";
            var var2 = "Paquito";
            var var3 = 5 / 0;
            alert("Pepe es " + var1);
            alert("Paquito + 2 es =" + (var2 + 2));
            alert("5/0 es =" + var3);
            imprimir("Ejemplo de operaciones básicas.");
        }
    },
    {
        id: 12,
        titulo: "Ejercicio 12: Incremento y Decremento",
        ejecutar: function() {
            var x = 10;
            alert("El valor inicial de x es " + x);
            x = x + 1;
            alert("Después de x=x+1, x=" + x);
            x = x - 5;
            alert("Después de x=x-5, x=" + x);
            imprimir("Ejemplo de incremento y decremento.");
        }
    },
    {
        id: 13,
        titulo: "Ejercicio 13: Cadenas y Números",
        ejecutar: function() {
            var num1 = "30";
            var num2 = "15";
            alert("30+15= " + (num1 + num2));
            alert("30*15= " + (num1 * num2));
            imprimir("Ejemplo de operaciones con cadenas y números.");
        }
    },
    {
        id: 14,
        titulo: "Ejercicio 14: Suma de Números",
        ejecutar: function() {
            var num1, num2;
            num1 = prompt("Escribe un número", "");
            num2 = prompt("Escribe otro número", "");
            alert("La suma es =" + (num1 + num2));
            imprimir("Ejemplo de suma de números.");
        }
    },
    {
        id: 15,
        titulo: "Ejercicio 15: Suma con Conversión",
        ejecutar: function() {
            var num1, num2;
            num1 = prompt("Escribe un número", "");
            num1 = parseFloat(num1);
            num2 = prompt("Escribe otro número", "");
            num2 = parseFloat(num2);
            alert("La suma es =" + (num1 + num2));
            imprimir("Ejemplo de suma con conversión de tipos.");
        }
    },
    {
        id: 16,
        titulo: "Ejercicio 16: Operaciones con Enteros",
        ejecutar: function() {
            var x, y;
            x = parseInt(prompt("Escribe un entero ", ""));
            y = parseInt(prompt("Escribe otro entero ", ""));
            alert(
                "La suma de " +
                x +
                " + " +
                y +
                " es =" +
                (x + y) +
                "\n" +
                "El producto de " +
                x +
                " y " +
                y +
                " = " +
                x * y +
                "\n" +
                "El promedio de " +
                x +
                " y " +
                y +
                " es " +
                (x + y) / 2
            );
            imprimir("Ejemplo de operaciones con números enteros.");
        }
    },
    {
        id: 17,
        titulo: "Ejercicio 17: Conversión de Base 16",
        ejecutar: function() {
            var m, n, x;
            m = prompt("Escribe un número en base 16", "");
            n = parseInt(m, 16);
            alert("El número " + m + " en base 16, es igual a " + n + " en base 10");
            imprimir("Ejemplo de conversión de base 16 a decimal.");
        }
    },
    {
        id: 18,
        titulo: "Ejercicio 18: Conversión de Bases",
        ejecutar: function() {
            var m7, n7;
            var m4, n4;
            var m6, n6;
            m7 = prompt("Escribe un número en base 7", "");
            n7 = parseInt(m7, 7);
            m4 = prompt("Escribe un número en base 4", "");
            n4 = parseInt(m4, 4);
            m6 = prompt("Escribe un número en base 6", "");
            n6 = parseInt(m6, 6);
            alert(
                "El número " +
                m7 +
                " en base 7, es igual a " +
                n7 +
                " en base 10\n" +
                "El número " +
                m4 +
                " en base 4, es igual a " +
                n4 +
                " en base 10\n" +
                "El número " +
                m6 +
                " en base 6, es igual a " +
                n6 +
                " en base 10"
            );
            imprimir("Ejemplo de conversión de múltiples bases a decimal.");
        }
    },
    {
        id: 19,
        titulo: "Ejercicio 19: Conversión a Base 7",
        ejecutar: function() {
            var m, n;
            n = parseInt(prompt("Escribe un número entero en base 10", ""));
            m = (n).toString(7);
            alert("El número " + n + " en base 10, es igual a " + m + " en base 7");
            imprimir("Ejemplo de conversión de decimal a base 7.");
        }
    },
    {
        id: 20,
        titulo: "Ejercicio 20: Validación de Número",
        ejecutar: function() {
            var num;
            num = parseFloat(prompt("Escribe un número", ""));
            if (num == 100) {
                alert("El número que has escrito es 100");
            } else {
                alert("El número que has escrito no es 100");
            }
            if (num > 0) {
                alert("El número que has escrito es positivo");
            } else {
                alert("El número es negativo o 0");
            }
            imprimir("Ejemplo de validación de número.");
        }
    },
    {
        id: 21,
        titulo: "Ejercicio 21: Comparación de Números",
        ejecutar: function() {
            var a, b;
            a = parseFloat(prompt("Escribe el primer número", ""));
            b = parseFloat(prompt("Escribe el segundo número", ""));
            if (a == b) alert("Los dos números son iguales");
            if (a != b) alert("Los dos números son distintos");
            if (a > b) {
                alert("El primer número es mayor que el segundo");
            } else {
                alert("El primer número no es mayor que el segundo");
            }
            if (a > b && 100 > a) {
                alert("El primero es mayor que el segundo");
                alert("Además los dos son menores de 100");
            } else {
                alert("El primero no es mayor que el segundo");
                alert("O uno de los dos números es mayor o igual a 100");
            }
            imprimir("Ejemplo de comparación entre dos números.");
        }
    },
    {
        id: 22,
        titulo: "Ejercicio 22: Bucle While Simple",
        ejecutar: function() {
            var x = 0;
            while (x < 6) {
                alert("El valor de x es= " + x);
                x = x + 1;
            }
            imprimir("Ejemplo de bucle while simple.");
        }
    },
    {
        id: 23,
        titulo: "Ejercicio 23: Bucle While con Variables",
        ejecutar: function() {
            var i = 2;
            var res = "";
            var j = 7;
            while (i < j) {
                res = res + " " + i + " " + j + "\n";
                i++;
                j--;
            }
            alert(res);
            imprimir("Ejemplo de bucle while con variables.");
        }
    },
    {
        id: 24,
        titulo: "Ejercicio 24: Repetición con Nombre",
        ejecutar: function() {
            var nom;
            var indice = 1;
            var num;
            var respuesta = " ";
            nom = prompt("Escribe tu nombre", "");
            num = prompt("Cuántas veces quieres que lo repita", "");
            num = parseInt(num, 10);
            while (indice <= num) {
                respuesta = respuesta + nom + "\n";
                indice++;
            }
            alert(respuesta);
            imprimir("Ejemplo de repetición con nombre.");
        }
    },
    {
        id: 25,
        titulo: "Ejercicio 25: Suma y Producto",
        ejecutar: function() {
            var num;
            var sum = 0;
            var pro = 1;
            var respuesta = "";
            num = prompt("Escribe un número diferente de cero=", "");
            num = parseFloat(num);
            while (num != 0) {
                sum = sum + num;
                pro = pro * num;
                respuesta =
                    respuesta +
                    num +
                    "\tsuma parcial:" +
                    sum +
                    "\tproducto parcial:" +
                    pro +
                    "\n";
                num = prompt("Escribe otro número (para acabar introduce cero)", "");
                num = parseFloat(num);
            }
            alert(respuesta);
            imprimir("Ejemplo de suma y producto de números.");
        }
    },
    {
        id: 26,
        titulo: "Ejercicio 26: Repetición con Texto",
        ejecutar: function() {
            var texto;
            var num;
            var salida = "";
            texto = prompt("Escribe un texto", "");
            num = prompt("Cuántas veces quieres que lo repita", "");
            num = parseInt(num, 10);
            for (i = 1; i <= num; i++) {
                salida = salida + texto + "\n";
            }
            alert(salida);
            imprimir("Ejemplo de repetición con texto.");
        }
    },
    {
        id: 27,
        titulo: "Ejercicio 27: Múltiplos de 11",
        ejecutar: function() {
            var salida = "";
            var sum = 0;
            for (multi = 11; multi < 3000; multi = multi + 11) {
                salida = salida + multi + " ";
                sum = sum + multi;
            }
            alert(salida + "\nLa Suma de todos ellos es= " + sum);
            imprimir("Ejemplo de cálculo de múltiplos de 11.");
        }
    },
    {
        id: 28,
        titulo: "Ejercicio 28: Factorial",
        ejecutar: function() {
            var salida = "";
            var fact = 1;
            var num;
            num = prompt("Cálculo del factorial del numero ", "");
            num = parseInt(num, 10);
            for (i = 1; i <= num; i++) fact = fact * i;
            alert("El factorial de " + num + " es " + fact);
            imprimir("Ejemplo de cálculo de factorial.");
        }
    },
    {
        id: 29,
        titulo: "Ejercicio 29: Múltiplos de un Número",
        ejecutar: function() {
            var salida = "";
            var num;
            var mult;
            var sum = 0;
            num = prompt("¿Múltiplos de qué número?", "");
            num = parseInt(num, 10);
            for (i = 1; i <= 10; i++) {
                mult = num * i;
                salida = salida + mult + " ";
                sum = sum + mult;
            }
            alert(salida + "\nSuma= " + sum);
            imprimir("Ejemplo de cálculo de múltiplos de un número.");
        }
    },
    {
        id: 30,
        titulo: "Ejercicio 30: Tabla de Función Cuadrática",
        ejecutar: function() {
            var x1, x2, paso;
            var salida = "";
            var y;
            x1 = prompt("Escribe el menor valor de x", "");
            x1 = parseFloat(x1);
            x2 = prompt("Escribe el mayor valor de x", "");
            x2 = parseFloat(x2);
            paso = prompt("Escribe el incremento de x:", "");
            paso = parseFloat(paso);
            for (i = x1; i <= x2; i = i + paso) {
                y = i * i - 5 * i + 10;
                salida = salida + i + " " + y + "\n";
            }
            alert(salida);
            imprimir("Ejemplo de tabla de función cuadrática.");
        }
    },
    {
        id: 31,
        titulo: "Ejercicio 31: Tabla de Función Cuadrática con Condiciones",
        ejecutar: function() {
            var x1, x2, paso;
            var salida = "";
            var y;
            x1 = prompt("Escribe el menor valor de x de la tabla", "");
            x1 = parseFloat(x1);
            x2 = prompt("Escribe el mayor valor de x de la tabla", "");
            x2 = parseFloat(x2);
            if (x1 >= x2) {
                alert("No tiene sentido lo que intentas hacer");
            } else {
                paso = prompt("Escribe el incremento de x", "");
                paso = parseFloat(paso);
                if (paso <= 0) {
                    alert("No tine sentido lo que intentas hacer");
                } else {
                    for (i = x1; i <= x2; i = i + paso) {
                        y = i * i - 5 * i + 10;
                        salida = salida + i + " " + y + "\n";
                    }
                    alert(salida);
                }
            }
            imprimir("Ejemplo de tabla de función cuadrática con condiciones.");
        }
    },
    {
        id: 32,
        titulo: "Ejercicio 32: Teorema de Pitágoras",
        ejecutar: function() {
            var cat1, cat2, hipo;
            cat1 = prompt("Escribe el valor de un cateto", "");
            cat2 = prompt("Escribe el valor del otro cateto", "");
            cat1 = parseFloat(cat1);
            cat2 = parseFloat(cat2);
            hipo = Math.sqrt(cat1 * cat1 + cat2 * cat2);
            alert(
                "La hipotenusa del triángulo de catetos " +
                cat1 +
                " y " +
                cat2 +
                " es " +
                hipo
            );
            imprimir("Ejemplo del teorema de Pitágoras.");
        }
    },
    {
        id: 33,
        titulo: "Ejercicio 33: Cálculo de Hipotenusa Repetido",
        ejecutar: function() {
            var opcion = "S";
            var cat1, cat2, hipo;
            while (opcion == "S" || opcion == "s") {
                cat1 = prompt("Escribe el valor de un cateto", "");
                cat2 = prompt("Escribe el valor del otro cateto", "");
                cat1 = parseFloat(cat1);
                cat2 = parseFloat(cat2);
                hipo = Math.sqrt(cat1 * cat1 + cat2 * cat2);
                alert(
                    "La hipotenusa del triángulo de catetos " +
                    cat1 +
                    " y " +
                    cat2 +
                    " es " +
                    hipo
                );
                opcion = prompt("¿Quieres calcular otra hipotenusa? (S/N)", "");
            }
            alert("Adiós muy buenas");
            imprimir("Ejemplo de cálculo repetido de hipotenusa.");
        }
    },
    {
        id: 34,
        titulo: "Ejercicio 34: Ecuación Cuadrática",
        ejecutar: function() {
            var a, b, c;
            var discri;
            var x1, x2;
            a = prompt("Escribe el coeficiente de la x^2", "");
            a = parseFloat(a);
            b = prompt("Escribe el coeficiente de la x", "");
            b = parseFloat(b);
            c = prompt("Escribe el término independiente", "");
            c = parseFloat(c);
            discri = b * b - 4 * a * c;
            if (discri < 0) alert("Soluciones Imaginarias");
            if (discri == 0) {
                x1 = -b / (2 * a);
                alert("Solución doble que es " + x1);
            }
            if (discri > 0) {
                x1 = (-b + Math.sqrt(discri)) / (2 * a);
                x2 = (-b - Math.sqrt(discri)) / (2 * a);
                alert("Las soluciones son = " + x1 + " y " + x2);
            }
            imprimir("Ejemplo de resolución de ecuación cuadrática.");
        }
    },
    {
        id: 35,
        titulo: "Ejercicio 35: Tabla de Senos",
        ejecutar: function() {
            var gra, rad;
            var salida = "";
            for (gra = 0; gra <= 360; gra = gra + 10) {
                rad = (3.141592 * gra) / 180;
                salida = salida + gra + "\t\t" + Math.sin(rad) + "\n";
            }
            alert(salida);
            imprimir("Ejemplo de cálculo de senos.");
        }
    },
    {
        id: 36,
        titulo: "Ejercicio 36: Logaritmos",
        ejecutar: function() {
            var num;
            var opc, base;
            num = prompt("Escribe un número positivo", "");
            num = parseFloat(num);
            opc = prompt(
                "1 Logaritmo Neperiano. 2 Logaritmo Decimal. 3 Logaritmo en base a\nEscribe el número de la opción",
                ""
            );
            opc = parseInt(opc, 10);
            if (opc == 1) {
                alert("El logaritmo Neperiano de " + num + " es " + Math.log(num));
            }
            if (opc == 2) {
                alert(
                    "El logaritmo Decimal de " + num + " es " + Math.log(num) / Math.log(10)
                );
            }
            if (opc == 3) {
                base = prompt("Introduce el valor de la base a", "");
                base = parseFloat(base);
                alert(
                    "El Logaritmo en base " +
                    base +
                    " del número " +
                    num +
                    " es " +
                    Math.log(num) / Math.log(base)
                );
            }
            imprimir("Ejemplo de cálculo de logaritmos.");
        }
    },
    {
        id: 37,
        titulo: "Ejercicio 37: Aproximación de e",
        ejecutar: function() {
            var cad;
            var salida = "";
            for (i = 1; i <= 5; i = i + 1) {
                cad = "n= " + i + "\t\te= " + Math.pow(1 + 1 / i, i) + "\n";
                salida = salida + cad;
            }
            for (i = 100; i <= 50000000000; i = i * 10) {
                cad = "n= " + i + "\t\te= " + Math.pow(1 + 1 / i, i) + "\n";
                salida = salida + cad;
            }
            salida = salida + "Verdadero valor de e =" + Math.E;
            alert(salida);
            imprimir("Ejemplo de aproximación del número e.");
        }
    },
    {
        id: 38,
        titulo: "Ejercicio 38: Números Aleatorios",
        ejecutar: function() {
            var x, num;
            var i = 0;
            var control = 0;
            x = Math.round(9 * Math.random() + 1);
            while (i < 5) {
                i++;
                num = parseInt(
                    prompt("Escribe un entero entre 1 y 10, intento " + i, "")
                );
                if (num == x) {
                    alert("Lo has acertado en " + i + " tentativas");
                    i = 5;
                    control = 1;
                }
            }
            if (control == 0) {
                alert("Lo siento pero se han acabado tus 'vidas', el número era " + x);
            }
            imprimir("Ejemplo de juego de adivinanza con números aleatorios.");
        }
    },
    {
        id: 39,
        titulo: "Ejercicio 39: Juego de Adivinanza",
        ejecutar: function() {
            var x, y, z;
            var nota = 0;
            for (i = 1; i <= 5; i++) {
                x = Math.round(9 * Math.random() + 1);
                y = Math.round(9 * Math.random() + 1);
                z = parseInt(prompt(x + " + " + y + " = ", ""));
                if (z == x + y) {
                    alert("Muy bien");
                    elsenota = nota + 1;
                } {
                    alert("Lo siento, pero " + x + " + " + y + " = " + (x + y));
                }
            }
            alert("Tu nota es " + 2 * nota);
            imprimir("Ejemplo de juego de suma con números aleatorios.");
        }
    },
    {
        id: 40,
        titulo: "Ejercicio 40: Control de Flujo",
        ejecutar: function() {
            var salida = "";
            for (x = 5; x < 15; x++) {
                if (x == 8) break;
                salida = salida + x + " \n";
            }
            salida = salida + "\n\n";
            for (x = 5; x < 15; x++) {
                if (x == 8) continue;
                salida = salida + x + "\t";
            }
            alert(salida);
            imprimir("Ejemplo de control de flujo con break y continue.");
        }
    },
    {
        id: 41,
        titulo: "Ejercicio 41: Control de Intentos",
        ejecutar: function() {
            var x, num;
            var i = 0;
            x = Math.round(9 * Math.random() + 1);
            while (i < 5) {
                i++;
                num = parseInt(
                    prompt("Escribe un entero entre 1 y 10, intento " + i, "")
                );
                if (num == x) {
                    alert("Lo has acertado en " + i + " tentativas");
                    break;
                }
            }
            if (i == 5) {
                alert("Lo siento pero se han acabado tus 'vidas', el número era " + x);
            }
            imprimir("Ejemplo de control de intentos en un juego.");
        }
    },
];
