
function decimalToHex(){
    let decimal = document.getElementById('decimal').value;
    if (decimal == ''){
        showNotification('Bitte eine Dezimalzahl eingeben');
        return;
    }
    let hex = parseInt(decimal).toString(16).toUpperCase();
    document.getElementById('hexResult').textContent = 'Hex : ' + hex ;
}

function hexToDecimal(){
    let hex = document.getElementById('hex').value;
    if (hex == ''){
        showNotification('Bitte eine Hexadezimalzahl eingeben');
        return;
    }
    let decimal = parseInt(hex, 16);
    if (isNaN(decimal)){
        showNotification('Ungültige Zahl');
        return;
    }
    document.getElementById('decResult').textContent = 'Dez : ' + decimal;
}

function goBack(){
    window.history.go(-(window.history.length - 1));
}
function showNotification(message, color = '#e94444ff') {
    let notif = document.getElementById('notification');
    notif.textContent = message;
    notif.style.background = color;
    notif.classList.add('show');


    setTimeout(() => {
        notif.classList.remove('show');
    }, 2000);
}
