function dificil1() {
    let mensajeElement = document.getElementById('dificil1');
    mensajeElement.textContent = 'Debes llevar gafas de sol y protector solar.';
    mensajeElement.style.color = 'blue';
}

function dificil2(eleccion) {
    let mensajeElement = document.getElementById('dificil2');
    if (eleccion === 'alfombra') {
        mensajeElement.textContent = 'La alfombra de 2 m² tiene más superficie que la mesa de 1 m².';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'La mesa de 1 m² tiene menos superficie que la alfombra de 2 m².';
        mensajeElement.style.color = 'red';
    }
}

function dificil3(eleccion) {
    let mensajeElement = document.getElementById('dificil3');
    if (eleccion === 'jardin') {
        mensajeElement.textContent = 'El jardín de 10 m² es mayor que el balcón de 5 m².';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'El balcón de 5 m² es menor que el jardín de 10 m².';
        mensajeElement.style.color = 'red';
    }
}

function dificil4(eleccion) {
    let mensajeElement = document.getElementById('dificil4');
    if (eleccion === 'botella') {
        mensajeElement.textContent = 'La botella de 1 litro puede contener más líquido que el vaso de 250 ml.';
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = 'El vaso de 250 ml puede contener menos líquido que la botella de 1 litro.';
        mensajeElement.style.color = 'red';
    }
}
