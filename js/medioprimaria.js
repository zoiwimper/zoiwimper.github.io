
function compararNumeros(num1, num2) {
    let mensajeElement = document.getElementById('e');
    if (num1 > num2) {
        mensajeElement.textContent = `${num1} es mayor que ${num2}.`;
        mensajeElement.style.color = 'green';
    } else if (num1 < num2) {
        mensajeElement.textContent = `${num1} es menor que ${num2}.`;
        mensajeElement.style.color = 'red';
    } else {
        mensajeElement.textContent = `${num1} y ${num2} son iguales.`;
        mensajeElement.style.color = 'blue';
    }
}

function compararEdades(edad1, edad2) {
    let mensajeElement = document.getElementById('p');
    if (edad1 > edad2) {
        mensajeElement.textContent = `¡Exacto!, la persona mayor es la de ${edad1} años.`;
        mensajeElement.style.color = 'green';
    } else if (edad1 < edad2) {
        mensajeElement.textContent = `Incorrecto, la persona mayor es la de ${edad2} años. Sigue intentando.`;
        mensajeElement.style.color = 'red';
    } else {
        mensajeElement.textContent = `Ambas personas tienen la misma edad.`;
        mensajeElement.style.color = 'blue';
    }
}

function compararJovenes(edad1, edad2) {
    let mensajeElement = document.getElementById('o');
    if (edad1 < edad2) {
        mensajeElement.textContent = `¡Correcto!, la persona más joven es la de ${edad1} años.`;
        mensajeElement.style.color = 'green';
    } else if (edad1 > edad2) {
        mensajeElement.textContent = `Incorrecto, la persona más joven es la de ${edad2} años. Sigue intentando.`;
        mensajeElement.style.color = 'red';
    } else {
        mensajeElement.textContent = `Ambas personas tienen la misma edad.`;
        mensajeElement.style.color = 'blue';
    }
}

