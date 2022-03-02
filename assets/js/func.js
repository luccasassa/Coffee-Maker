/* <MAIN */
alert(`*** Essenza Mini | Nespresso ® ***
BIENVENIDO! CONFIGURE DESDE CERO SU CAFETERA`);

let nombre = prompt(`Ingrese su nombre por favor:`);
let capMaxima = 10;
let cantActual = 0;
let opcion = null;

alert(`Recuerde que la capacidad máxima de la cafetera son ${capMaxima} cápsulas.
Proceda al MENU.`);

do {
    opcion = parseInt(prompt(`SELECCIONE UNA OPCION:
    1. Llenar cafetera.
    2. Servir taza.
    3. Vaciar cafetera.
    4. Agregar cápsulas.
    5. Mostrar estado actual de la cafetera.
    0. SALIR`));
    
    switch (opcion) {
        case 1:
            if (cantActual != capMaxima) {
                alert(`*** CAFETERA LLENA ***
                Se agregaron ${capMaxima-cantActual} cápsulas.`); //antes de la igualación así muestra la resta
                cantActual = capMaxima;
                
            } else {
                alert(`*** LA CAFETERA YA ESTÁ LLENA ***`);
            }
        break;
            
        case 2:
            if (cantActual <= 0) {
                alert(`CÁPSULAS INSUFICIENTES
                Por favor primero llene o agregue cápsulas a la cafetera.`);
        
            } else {
                cantActual--;
                alert(`*** CAFÉ SERVIDO ***`);
            }
        break;

        case 3:
            if (cantActual != 0) {
                cantActual = 0;
                alert(`*** CAFETERA VACÍA ***`);
        
            } else {
                alert(`*** LA CAFETERA YA ESTÁ VACÍA ***`);
            }
        break;

        case 4:
            if (cantActual >= capMaxima) {
                alert(`LA CAFETERA YA ESTÁ LLENA
                No se pueden agregar más cápsulas.`);
                
            } else {
                let agrego = parseInt(prompt(`Cuántas cápsulas desea agregar?`));
                
                if ((cantActual + agrego) > capMaxima) {
                    alert(`*** IMPOSIBLE DE AGREGAR ***
                    La cantidad que ingresó supera la capacidad máxima de la cafetera.`);
        
                } else {
                    alert(`*** CAFÉ AGREGADO CORRECTAMENTE ***`);
                    cantActual += agrego;
                }
            }
        break;

        case 5:
            alert(`Cantidad de cápsulas actual de la cafetera: ${cantActual}`);
        break;

        case 0:
            alert(`Hasta luego ${nombre}!`);
        break;

        default:
            alert(`*** OPCIÓN NO VÁLIDA ***`);
        break;
    }
} while (opcion != 0);

/* MAIN> */














/* 
MISION FALLIDA POR CULPA DEL SCOPE

function llenar(cantActual,capMaxima) {

    if (cantActual != capMaxima) {
        cantActual = capMaxima;
        alert(`*** CAFETERA LLENA ***
        Se agregaron ${capMaxima-cantActual} cápsulas.`);
        
    } else {
        alert(`*** LA CAFETERA YA ESTÁ LLENA ***`);
    }
}

function servir(cantActual) {

    if (cantActual <= 0) {
        alert(`CÁPSULAS INSUFICIENTES
        Por favor primero llene o agregue cápsulas a la cafetera.`);

    } else {
        cantActual--;
        alert(`*** CAFÉ SERVIDO ***`);
    }
}

function vaciar(cantActual) {

    if (cantActual != 0) {
        cantActual = 0;
        alert(`*** CAFETERA VACÍA ***`);

    } else {
        alert(`*** LA CAFETERA YA ESTÁ VACÍA ***`);
    }
}

function agregar(cantActual,capMaxima) {
    
    if (cantActual >= capMaxima) {
        alert(`LA CAFETERA YA ESTÁ LLENA
        No se pueden agregar más cápsulas.`);
        
    } else {
        let agrego = parseInt(prompt(`Cuántas cápsulas desea agregar?`));
        
        if ((cantActual + agrego) > capMaxima) {
            alert(`*** IMPOSIBLE DE AGREGAR ***
            La cantidad que ingresó supera la capacidad máxima de la cafetera.`);

        } else {
            alert(`*** CAFÉ AGREGADO CORRECTAMENTE ***`);
            cantActual += agrego;
        }
    }
}

function mostrarEstado(cantActual) {
    alert(`Cantidad de cápsulas actual de la cafetera: ${cantActual}`);
}

function salir(nombre) {
    alert(`Hasta luego ${nombre}!`);
}
*/
