document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault();

    var peso = document.getElementById('peso').value;
    var talla = document.getElementById('talla').value;

    var imc = peso / (talla * talla);

    var resultado = document.getElementById('resultado2');

    if (imc < 18.5) {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Bajo peso. Debes aumentar tu peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Adecuado. Tu peso está en un rango saludable.';
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Sobrepeso. Debes reducir tu peso.';
    } else if (imc >= 30.0 && imc < 34.9) {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 1. Debes reducir tu peso.';
    } else if (imc >= 35.0 && imc < 39.9) {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 2. Debes reducir tu peso.';
    } else {
        resultado.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 2. Debes reducir tu peso.';
    }
});





















