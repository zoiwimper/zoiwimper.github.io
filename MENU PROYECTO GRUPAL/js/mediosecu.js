// Pares e Impares
function mostrarParesImpares() {
    const inicio = parseInt(document.getElementById('rangoInicio').value);
    const fin = parseInt(document.getElementById('rangoFin').value);
    let mensaje = '';

    if (isNaN(inicio) || isNaN(fin)) {
        mensaje = 'Por favor, ingresa ambos números.';
    } else if (inicio > fin) {
        mensaje = 'El número inicial debe ser menor o igual al número final.';
    } else {
        let pares = 'Pares: ';
        let impares = 'Impares: ';
        for (let i = inicio; i <= fin; i++) {
            if (i % 2 === 0) {
                pares += i + ' ';
            } else {
                impares += i + ' ';
            }
        }
        mensaje = `${pares}\n${impares}`;
    }

    document.getElementById('mensajeParesImpares').textContent = mensaje;
}

// Tabla de Multiplicar y Sumar
function generarTabla() {
    const numero = parseInt(document.getElementById('numTabla').value);
    const tipo = document.getElementById('tipoTabla').value;
    const mensajeTabla = document.getElementById('mensajeTabla');
    const tbody = document.getElementById('resultadoTabla').querySelector('tbody');

    mensajeTabla.textContent = '';
    tbody.innerHTML = '';

    if (isNaN(numero)) {
        mensajeTabla.textContent = 'Por favor, ingresa un número entero válido.';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        if (tipo === 'multiplicar') {
            td.textContent = `${numero} x ${i} = ${numero * i}`;
        } else {
            td.textContent = `${numero} + ${i} = ${numero + i}`;
        }
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

// Fibonacci
function generarFibonacci() {
    const num = parseInt(document.getElementById('numFibonacci').value);
    const mensajeFibonacci = document.getElementById('mensajeFibonacci');
    const resultadoFibonacci = document.getElementById('resultadoFibonacci');

    mensajeFibonacci.textContent = '';
    resultadoFibonacci.textContent = '';

    if (isNaN(num) || num <= 0) {
        mensajeFibonacci.textContent = 'Por favor, ingresa un número entero positivo válido.';
        return;
    }

    const fibonacci = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < num; i++) {
        fibonacci.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    resultadoFibonacci.textContent = fibonacci.join(', ');
}
