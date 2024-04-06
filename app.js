document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = calculateIMC(weight, height);
    const classification = getClassification(imc);

    displayResult(name, imc, classification);
});

function calculateIMC(weight, height) {
    return weight / (height * height);
}

function getClassification(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Adecuado';
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        return 'Obesidad grado 1';
    } else if (imc >= 35.0 && imc <= 39.9) {
        return 'Obesidad grado 2';
    } else {
        return 'Obesidad grado 3';
    }
}

function displayResult(name, imc, classification) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${name}, your IMC is ${imc.toFixed(2)} (${classification})`;
}