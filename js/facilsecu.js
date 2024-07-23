// Detectar Números Repetidos
function detectRepetitions() {
    const inputArray = document.getElementById('inputArray').value;
    const numbers = inputArray.split(',').map(Number);
    const counts = {};

    numbers.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    let output = '';
    for (const num in counts) {
        if (counts[num] > 1) { // Solo mostrar números que se repiten
            output += `Número ${num}: ${counts[num]} veces\n`;
        }
    }

    document.getElementById('output').textContent = output || 'No hay números repetidos.';
}

// Sumar Números Naturales
function calculateSum() {
    const inputNumber = document.getElementById('inputNumberSum').value;
    const number = parseInt(inputNumber, 10);

    if (isNaN(number) || number <= 0) {
        document.getElementById('resSum').textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    document.getElementById('resSum').textContent = `La suma de todos los números naturales hasta ${number} es ${sum}.`;
}

// Calcular Factorial
function calcularFactorial() {
    const numero = parseInt(document.getElementById('inputNumberFactorial').value, 10);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, introduce un número entero no negativo.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resFactorial').textContent = `El factorial de ${numero} es ${factorial}.`;
}
