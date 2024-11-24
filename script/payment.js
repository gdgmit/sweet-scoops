document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('online-options').classList.add('hidden');
    document.getElementById('qr-code').classList.add('hidden');
}

function selectPayment(method) {
    if (method === 'Offline') {
        alert("You order is confirmed and is on the way.");
        closePopup();
    } else if (method === 'Online') {
        document.getElementById('online-options').classList.remove('hidden');
    }
}

function showQRCode() {
    document.getElementById('qr-code').classList.remove('hidden');
}
