function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    let result;

    if (isNaN(value)) {
        document.getElementById('result').innerText = 'Por favor, insira um valor válido.';
        return;
    }

    if (from === 'C') {
        if (to === 'F') {
            result = (value * 9/5) + 32;
        } else if (to === 'K') {
            result = value + 273.15;
        } else {
            result = value;
        }
    } else if (from === 'F') {
        if (to === 'C') {
            result = (value - 32) * 5/9;
        } else if (to === 'K') {
            result = (value - 32) * 5/9 + 273.15;
        } else {
            result = value;
        }
    } else if (from === 'K') {
        if (to === 'C') {
            result = value - 273.15;
        } else if (to === 'F') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)} °${to}`;
}
function reset() {
    document.getElementById('value').value = '';
    document.getElementById('from').selectedIndex = 0;
    document.getElementById('to').selectedIndex = 0;
    document.getElementById('result').innerText = '';
}

