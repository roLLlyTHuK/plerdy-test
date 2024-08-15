const operatorCode = document.getElementById('operator-code');
const phoneNumber = document.getElementById('phone-number');
const flagIcon = document.getElementById('flag-icon');

operatorCode.addEventListener('change', () => {
    const selectedOption = operatorCode.options[operatorCode.selectedIndex];
    flagIcon.src = selectedOption.getAttribute('data-flag');
    phoneNumber.value = operatorCode.value + ' ' + phoneNumber.value.replace(/^\+\d+\s*/, '');
});