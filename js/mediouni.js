// Contar caracteres
function analizarTexto() {
    const texto = document.getElementById("text-input").value;
    const textoContador = texto.length;
    const vocalesContador = (texto.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g) || []).length;
    const signosContador = (texto.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
    const espaciosContador = (texto.match(/\s/g) || []).length;
    const palabrasContador = (texto.match(/\b\w+\b/g) || []).length;
    const digitosContador = (texto.match(/\d/g) || []).length;

    document.getElementById("texto-contador").innerText = textoContador;
    document.getElementById("vocales-contador").innerText = vocalesContador;
    document.getElementById("signos-contador").innerText = signosContador;
    document.getElementById("espacios-contador").innerText = espaciosContador;
    document.getElementById("palabras-contador").innerText = palabrasContador;
    document.getElementById("digitos-contador").innerText = digitosContador;
}

// Invertir cadena de texto
function invertirTexto() {
    const text = document.getElementById("invert-text-input").value;
    const textoInvertido = text.split('').reverse().join('');
    document.getElementById("texto-invertido").innerText = textoInvertido;
}

// Comparar frases
function compararFrases() {
    const frase1 = document.getElementById("palabra1-input").value;
    const frase2 = document.getElementById("palabra2-input").value;
    const palabra1 = (frase1.match(/\b\w+\b/g) || []).length;
    const palabra2 = (frase2.match(/\b\w+\b/g) || []).length;

    let resultado = '';
    if (palabra1 > palabra2) {
        resultado = 'La primera frase tiene más palabras.';
    } else if (palabra1 < palabra2) {
        resultado = 'La segunda frase tiene más palabras.';
    } else {
        resultado = 'Ambas frases tienen la misma cantidad de palabras.';
    }

    document.getElementById("resultado-comparacion").innerText = resultado;
}
