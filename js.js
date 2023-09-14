function redirigir18() {
    window.location.href = "minecraf.html";
}
function redirigir15() {
    window.location.href = "encriptador.html";
}


function redirigir14() {
    window.location.href = "galeriaI.html";
}

function redirigir13() {
    window.location.href = "validacionF.html";
}

function redirigir12() {
    window.location.href = "bits.html";
}
function redirigir() {
    window.location.href = "cagas.html";
}

function cambiarColor() {
    document.querySelector("#azul").addEventListener("click",()=>{
        document.body.style.backgroundColor = "blue"
    });

    document.querySelector("#rojo").addEventListener("click",()=>{
        document.body.style.backgroundColor = "red"
    });

    document.querySelector("#verde").addEventListener("click",()=>{
        document.body.style.backgroundColor = "green"
    });

    
}

function palabrasA() {
    let articulos = ["abeja", "Teclado", "Tablet", "oxxo", "Pastel", "Zapato", "e"];
    alert("Original: " + articulos.join(", "));
    let palabras = articulos.filter(palabra => palabra.toLowerCase().includes("a"));
    
    alert(palabras);
    
    
}

function mayorMenor() {
    let A = [2,6,3,5,-2,5,1,7,8];
    alert("Original: " + A.join(", "));

    alert(Math.max(...A))

    alert(Math.min(...A))
    
}

function saludosAlf() {
    let A = ["Juan", "Margarita", "Emanuel", "Jose", "Camila"];
    alert("Original: " + A.join(", "));
    
    A.sort();

    for (let index = 0; index < A.length; index++) {
        alert("Hola " + A[index]);
    }
    
    
    
}

function tablaMulti() {
    alert("ingrese un numero");

    valor1 =parseInt( prompt("Dame el numero"));
    let i = 1
    while (i <= 10) {
        alert(i*valor1);
    ++i
    }
    
}

function parInpar() {
    let b = Math.floor(Math.random() * 100) + 1;
    alert(b);
    
    if (b % 2 == 0) {
        alert("El número " + b + " es par");
    } else {
        alert("El número " + b + " es impar");
    }
    
    
}
function contraseña() {
    alert("Ingrese su contraseña");

    let c = prompt("Contraseña de al menos 10 caracteres");
    
    try {
        if (c.length < 10) {
            throw new Error("Contraseña no cumple con los requisitos.");
        }
        alert("Contraseña guardada con éxito.");
    } 
    catch (error) {
        alert("Error: " + error.message);
    } 
    finally {
        alert("Fin del programa");
    }
    
    
}

function calculadora() {
    function suma(a,b) {
        return a+b;
    }
    function resta(a,b) {
        return a-b;
        
    }
    function multiplicasion(a,b) {
        return a*b;
        
    }
    function divicion(a,b) {
        if ( b === 0) {
            console.log("El denominador no puede ser 0");
            return 0;
        }
        return a/b;
    }
    alert("1 suma \n 2 resta \n 3 multiplicasion \n 4 divicion")
    key = parseInt(prompt("Ingrese la opcion que quiera"))
    switch (key) {
        case 1:
            a = parseInt(prompt("Ingrese un numero"))
            b = parseInt(prompt("Ingrese otro numero"))
    
            alert(suma(a,b))
            
            break;
        case 2:
            a = parseInt(prompt("Ingrese un numero"))
            b = parseInt(prompt("Ingrese otro numero"))
    
            alert(resta(a,b))
            break;
        case 3:
            a = parseInt(prompt("Ingrese un numero"))
            b = parseInt(prompt("Ingrese otro numero"))
    
            alert(multiplicasion(a,b))
            break;
        case 4:
            a = parseInt(prompt("Ingrese el numerador"))
            b = parseInt(prompt("Ingrese el denominador"))
    
            alert(divicion(a,b))
            break;
    
        default:
            alert("Opcion incorrecta")
            break;
    }
    
}
function inicioSecion() {
    let nombre = prompt("Ingrese su nombre");
    let contraseña = prompt("Ingrese su contraseña");
    
    try {
        if (nombre !== "Juan" || contraseña !== "1234") {
            throw new Error("Nombre de usuario o contraseña incorrectos.");
        }
    
        // Si todo está correcto, mostrar un mensaje de éxito
        alert("Validación de usuarios exitosa.");
    
    } catch (error) {
        alert(error.message);
    } finally {
        alert("Finalizando la validación de usuarios.");
    }
    
    
}

function PPT() {
    alert("1 piedra \n 2 papel \n 3 tijera ");
    let t = 0; // Puntos del usuario
    let c = 0; // Puntos de la computadora
    let i = 1;

    while (i <= 3) {
        let valor1 = parseInt(prompt("Dame el valor"));
        let b = Math.floor(Math.random() * 3) + 1;

        if (valor1 === b) {
            alert("Es un empate");
        } else if ((valor1 == 1 && b == 3) || (valor1 == 2 && b == 1) || (valor1 == 3 && b == 2)) {
            alert("Tu ganas");
        t++;
        } else {
            alert("Gana la computadora");
        c++;
            }
    i++;
    }

    if (c == t) {
        alert("Empate");
    } else if (c > t) {
        alert("Gana la computadora");
    } else {
        alert("Ganas tú");
    } 
}
function selectProgram(number) {
    alert('Has seleccionado el programa número ' + number + '. ¡Vamos a ello!');
    switch (number) {
        case 1:
            PPT()
            break;
        case 2:
            inicioSecion()
            break;
        case 3:
            calculadora()
            break;
        case 4:
            contraseña()
            break;
        case 5:
            parInpar()
            break;
        case 6:
            tablaMulti()
            break;
        case 7:
            saludosAlf()
            break;
        case 8:
            mayorMenor()
            break;
        case 9:
            palabrasA()
            break;
        case 10:
            document.getElementById('botonesContainer').style.display = 'block';
            cambiarColor()
            break;
        case 11:
            redirigir()
            break;
        case 12:
            redirigir12()
            break;
        case 13:
            redirigir13()
            break;
        case 14:
            redirigir14()
            break;
        case 15:
            redirigir15()
            break;
        case 16:
            inicioSecion()
            break;
        case 17:
            PPT()
            break;
        case 18:
            redirigir18()
            break;
    
        default:
        alert('Opcion incorrecta');
            break;
    }
}