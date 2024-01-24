let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    // Obtener el valor digitado en el input por medio de id usando el metodo .value
    numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        // Cuando el usuario acierta se activa el boton de nuevo juego.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es Mayor');
        }
        intentos++; // Incrementa el contador de intentos
        limpiarInput(); 
        // console.log(intentos);
    }
    return;
}

function limpiarInput() {
    let valorInput = document.querySelector('#valorUsuario');
    valorInput.value = ''; // Asignar el valor vacío al input
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Verificamos si ya se sortearon todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar input
    limpiarInput();
    // Indicar mensaje de intervalo de números 
    // Generar el número aleatorio
    // Inicializar el número de intentos
    // Deshabilitar el botón de nuevo juego
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();