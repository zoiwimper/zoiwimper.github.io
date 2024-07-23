// Calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Conversión Binario a Hexadecimal y Hexadecimal a Binario

function mostrarBinarioAHex() {
    document.getElementById("binarioAHexadecimal").style.display = "block";
    document.getElementById("hexadecimalABinario").style.display = "none";
    document.getElementById("btnAvanzar").style.display = "block";
}

function mostrarHexadecimalABin() {
    document.getElementById("binarioAHexadecimal").style.display = "none";
    document.getElementById("hexadecimalABinario").style.display = "block";
    document.getElementById("btnAvanzar").style.display = "block";
}

function convertirABinario() {
    let binario = document.getElementById("binario").value;
    let resultado = binarioAHexadecimal(binario);
    document.getElementById("resultadoBinario").innerHTML = `Hexadecimal: ${resultado}`;
    document.getElementById("resultadoBinario").classList.add("correcto");
}

function convertirAHexadecimal() {
    let hexadecimal = document.getElementById("hexadecimal").value;
    let resultado = hexadecimalABinario(hexadecimal);
    document.getElementById("resultadoHexadecimal").innerHTML = `Binario: ${resultado}`;
    document.getElementById("resultadoHexadecimal").classList.add("correcto");
}

function binarioAHexadecimal(binario) {
    // Asegurarse de que el binario tenga un largo múltiplo de 4
    while (binario.length % 4 !== 0) {
        binario = '0' + binario;
    }

    let hexadecimal = '';
    for (let i = 0; i < binario.length; i += 4) {
        let grupo = binario.slice(i, i + 4);
        let hex = parseInt(grupo, 2).toString(16).toUpperCase();
        hexadecimal += hex;
    }

    return hexadecimal;
}

function hexadecimalABinario(hexadecimal) {
    let binario = '';
    for (let i = 0; i < hexadecimal.length; i++) {
        let hex = hexadecimal[i];
        let bin = parseInt(hex, 16).toString(2);

        // Completar con ceros a la izquierda para que cada grupo tenga 4 bits
        while (bin.length < 4) {
            bin = '0' + bin;
        }

        binario += bin;
    }

    return binario;
}

function avanzarPagina() {
    if (document.getElementById("binarioAHexadecimal").style.display === "block") {
        mostrarHexadecimalABin();
    } else {
        mostrarBinarioAHex();
    }
}
