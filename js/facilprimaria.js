function facil1(num) {
    let R = 8;
    let mensajeElement = document.getElementById('mensaje');
    if (num === R) {
        mensajeElement.textContent = '¡Correcto! El número correcto es el 8, ya que la secuencia es de 2 en 2';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
        mensajeElement.style.color = 'red';
    }
}

function facil2(patron) {
    let mensajeElement = document.getElementById('x');
    if (patron === 'sumar 5') {
        mensajeElement.textContent = '¡Correcto! Has elegido "' + patron + '", ya que 5+5 es 10 y 10+5 es 15 y así sucesivamente.';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'Incorrecto. Inténtalo de nuevo, sé que eres inteligente!';
        mensajeElement.style.color = 'red';
    }
}

function facil3(num) {
    let x = 40;
    let mensajeElement = document.getElementById('d');
    if (num === x) {
        mensajeElement.textContent = '¡Correcto! El número correcto es el 40, ya que la secuencia es de 10 en 10.';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'Te equivocaste, sé que puedes hacerlo mejor, ¡VAMOS!';
        mensajeElement.style.color = 'red';
    }
}

function facil4(patron) {
    let mensajeElement = document.getElementById('v');
    if (patron === 'multiplica por 2') {
        mensajeElement.textContent = '¡Correcto! Has elegido "' + patron + '", porque 2x2 es 4 y 4x2 es 8 y así sucesivamente.';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'Incorrecto. Inténtalo de nuevo, sé que eres inteligente!';
        mensajeElement.style.color = 'red';
    }
}