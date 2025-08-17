function decimalToHex() {
    const decimal = document.getElementById('decimal').value;
    const hex = parseInt(decimal).toString(16).toUpperCase();
    document.getElementById('hexResult').innerText = `Hex: ${hex}`;
}

function hexToDecimal() {
    const hex = document.getElementById('hex').value;
    const decimal = parseInt(hex, 16);
    document.getElementById('decResult').innerText = `Decimal: ${decimal}`;
}
