document.getElementById('card-form').addEventListener('input', function() {
    document.getElementById('card-bank').textContent = document.getElementById('bank-name').value;
    document.getElementById('card-number-preview').textContent = document.getElementById('card-number').value;
    document.getElementById('card-holder-preview').textContent = document.getElementById('card-holder').value;
    document.getElementById('card-expiry-preview').textContent = document.getElementById('expiry-month').value + '/' + document.getElementById('expiry-year').value;

    const paymentSystem = document.getElementById('payment-system').value;
    const cardLogo = document.getElementById('card-logo');
    switch(paymentSystem) {
        case 'visa':
            cardLogo.style.backgroundImage = "url('images/visa-logo.jpg')";
            break;
        case 'mastercard':
            cardLogo.style.backgroundImage = "url('images/mastercard-logo.png')";
            break;
        default:
            cardLogo.style.backgroundImage = "";
    }

    const bankName = document.getElementById('bank-name').value;
    const cardLogoe = document.getElementById('card-logoe');
    switch(bankName) {
        case 'Sberbank':
            cardLogoe.style.backgroundImage = "url('images/sberbank-logo.png')";
            break;
        case 'Tinkoff':
            cardLogoe.style.backgroundImage = "url('images/tinkoff-logo.jpg')";
            break;
        default:
            cardLogoe.style.backgroundImage = "";
    }
});

document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bankName = document.getElementById('bank-name').value;
    const paymentSystem = document.getElementById('payment-system').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryMonth = document.getElementById('expiry-month').value;
    const expiryYear = document.getElementById('expiry-year').value;

    const table = document.querySelector('#cards-table tbody');
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = bankName;
    newRow.insertCell(1).textContent = paymentSystem;
    newRow.insertCell(2).textContent = cardNumber;
    newRow.insertCell(3).textContent = cardHolder;
    newRow.insertCell(4).textContent = expiryMonth + '/' + expiryYear;

    document.getElementById('card-form').reset();
    document.getElementById('card-preview').querySelectorAll('div').forEach(div => div.textContent = '');
    document.getElementById('card-logo').style.backgroundImage = '';
    document.getElementById('card-logoe').style.backgroundImage = '';
});
