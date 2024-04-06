document.getElementById('imc-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imc = weight / (height * height);

    let imcCategory = '';
    let imcDescription = '';

    if (imc < 18.5) {
        imcCategory = 'Bajo peso';
        imcDescription = 'Delgado';
    } else if (imc >= 18.5 && imc <= 24.9) {
        imcCategory = 'Adecuado';
        imcDescription = 'Aceptable';
    } else if (imc >= 25.0 && imc <= 29.9) {
        imcCategory = 'Sobrepeso';
        imcDescription = 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        imcCategory = 'Obesidad grado 1';
        imcDescription = 'Obesidad';
    } else if (imc >= 35.0 && imc <= 39.9) {
        imcCategory = 'Obesidad grado 2';
        imcDescription = 'Obesidad';
    } else {
        imcCategory = 'Obesidad grado 3';
        imcDescription = 'Obesidad I';
    }

    const result = `Your IMC is ${imc.toFixed(2)} (${imcCategory} - ${imcDescription})`;
    document.getElementById('result').innerText = result;
});