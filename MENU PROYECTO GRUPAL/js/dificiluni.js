function encontrarPerfectos() {
    const input = document.getElementById('numeros-perfectos').value;
    const numeros = input.split(',').map(num => parseInt(num.trim()));

    const perfectos = numeros.filter(esPerfecto);

    document.getElementById('resultadoPerfectos').innerText = `Números perfectos: ${perfectos.join(', ')}`;
}

function esPerfecto(num) {
    if (num <= 1) return false;
    let suma = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            suma += i;
            if (i !== 1 && i !== num / i) {
                suma += num / i;
            }
        }
    }
    return suma === num;
}

function encontrarPrimos() {
    const input = document.getElementById('numeros-primos').value;
    const numeros = input.split(',').map(num => parseInt(num.trim()));

    const primos = numeros.filter(esPrimo);

    document.getElementById('resultadoPrimos').innerText = `Números primos: ${primos.join(', ')}`;
}

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function calcularPromedioYModa() {
    // Obtener el valor del input
    const notasInput = document.getElementById('notas-input').value;
    
    // Verificar si el input está vacío
    if (notasInput.trim() === '') {
        alert('Por favor, introduce algunas notas.');
        return;
    }

    // Convertir el input a un arreglo de números
    const notasArray = notasInput.split(',').map(num => parseFloat(num.trim()));

    // Verificar que todos los valores son números válidos
    if (notasArray.some(isNaN)) {
        alert('Por favor, introduce solo números separados por comas.');
        return;
    }

    // Calcular el promedio
    const suma = notasArray.reduce((acc, val) => acc + val, 0);
    const promedio = suma / notasArray.length;

    // Calcular la moda
    const frecuencia = {};
    let maxFrecuencia = 0;
    let modas = [];

    notasArray.forEach(nota => {
        frecuencia[nota] = (frecuencia[nota] || 0) + 1;
        if (frecuencia[nota] > maxFrecuencia) {
            maxFrecuencia = frecuencia[nota];
            modas = [nota];
        } else if (frecuencia[nota] === maxFrecuencia) {
            if (!modas.includes(nota)) { // Evitar duplicados en la moda
                modas.push(nota);
            }
        }
    });

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Promedio: ${promedio.toFixed(2)}</p><p>Moda: ${modas.join(', ')}</p>`;
}
