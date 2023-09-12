let currentInput = '';
let currentResult = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentResult = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        display.textContent = currentResult;
    } catch (error) {
        display.textContent = 'Error';
    }
}
