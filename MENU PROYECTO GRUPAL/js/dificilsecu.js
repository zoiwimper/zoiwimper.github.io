// Primos
function verificarPrimo() {
    const number = parseInt(document.getElementById('numPrimo').value);
    const messageElement = document.getElementById('mensajePrimo');

    if (isNaN(number) || number <= 0) {
        messageElement.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    if (number === 1) {
        messageElement.textContent = 'El número 1 no es primo.';
        return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        messageElement.textContent = `El número ${number} es primo.`;
    } else {
        messageElement.textContent = `El número ${number} no es primo.`;
    }
}

// Números Perfectos
function verificarPerfecto() {
    const number = parseInt(document.getElementById('numPerfecto').value);
    const messageElement = document.getElementById('mensajePerfecto');

    if (isNaN(number) || number <= 0) {
        messageElement.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let sumaDivisores = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === number) {
        messageElement.textContent = `El número ${number} es perfecto.`;
    } else {
        messageElement.textContent = `El número ${number} no es perfecto.`;
    }
}

// Adivina el Número
let numeroSecreto = 45;
let intentosRestantes = 5;

function inicializarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 5;
    document.getElementById('numAdivinar').value = '';
    document.getElementById('mensajeAdivinar').textContent = `Tienes ${intentosRestantes} intentos restantes.`;
    document.getElementById('numAdivinar').disabled = false;
}

function adivinarNumero() {
    const adivinanza = parseInt(document.getElementById('numAdivinar').value);
    const mensajeElement = document.getElementById('mensajeAdivinar');

    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
        mensajeElement.textContent = 'Por favor, ingresa un número entre 1 y 100.';
        return;
    }

    intentosRestantes--;

    if (adivinanza === numeroSecreto) {
        mensajeElement.textContent = `¡Felicidades! Has adivinado el número secreto ${numeroSecreto}.`;
        document.getElementById('numAdivinar').disabled = true;
    } else if (intentosRestantes > 0) {
        let pista = adivinanza < numeroSecreto ? 'Demasiado bajo.' : 'Demasiado alto.';
        mensajeElement.textContent = `${pista} Intentos restantes: ${intentosRestantes}`;
    } else {
        mensajeElement.textContent = `Lo siento, se acabaron los intentos. El número secreto era ${numeroSecreto}.`;
        document.getElementById('numAdivinar').disabled = true;
    }
}

// Probabilidad de Bola Azul
let intentosRestantesProbabilidad = 3;
const respuestaCorrecta = 30; 

function verificarRespuesta() {
    const respuestaUsuario = parseFloat(document.getElementById('respuestaUsuario').value) || 0;
    const mensajeElement = document.getElementById('mensajeProbabilidad');

    if (intentosRestantesProbabilidad > 0) {
        if (respuestaUsuario === respuestaCorrecta) {
            mensajeElement.textContent = '¡Correcto! La probabilidad de sacar una bola azul es 30%.';
            mensajeElement.style.color = 'green';
        } else {
            intentosRestantesProbabilidad--;
            if (intentosRestantesProbabilidad === 0) {
                mensajeElement.textContent = `Lo siento, se acabaron los intentos. La respuesta correcta es 30%.`;
                mensajeElement.style.color = 'red';
            } else {
                mensajeElement.textContent = `Respuesta incorrecta. Te quedan ${intentosRestantesProbabilidad} intento(s).`;
                mensajeElement.style.color = 'orange';
            }
        }
    } else {
        mensajeElement.textContent = `Lo siento, ya no tienes más intentos. La respuesta correcta es 30%.`;
        mensajeElement.style.color = 'red';
    }
}


// Encuentra Dos Números
const sumaObjetivo = 50;
const productoObjetivo = 600;
let intentosRestantesNumeros = 3;

function verificarSumaProducto() {
    const num1 = parseFloat(document.getElementById('num1Suma').value) || 0;
    const num2 = parseFloat(document.getElementById('num2Suma').value) || 0;
    const mensajeElement = document.getElementById('mensajeSumaProducto');

    if (intentosRestantesNumeros > 0) {
        if (num1 + num2 === sumaObjetivo && num1 * num2 === productoObjetivo) {
            mensajeElement.textContent = `¡Correcto! Los números ${num1} y ${num2} cumplen con las condiciones.`;
            mensajeElement.style.color = 'green';
        } else {
            intentosRestantesNumeros--;
            if (intentosRestantesNumeros === 0) {
                mensajeElement.textContent = `Lo siento, se acabaron los intentos. Los números correctos son 20 y 30.`;
                mensajeElement.style.color = 'red';
            } else {
                mensajeElement.textContent = `Respuesta incorrecta. Te quedan ${intentosRestantesNumeros} intento(s).`;
                mensajeElement.style.color = 'orange';
            }
        }
    } else {
        mensajeElement.textContent = `Lo siento, ya no tienes más intentos. Los números correctos son 20 y 30.`;
        mensajeElement.style.color = 'red';
    }
}

// No se necesita la función resetear en este contexto
