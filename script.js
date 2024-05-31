let currentOperation = '';
let previousNumber = '';

function appendNumber(number) {
  document.getElementById('result').value += number;
  playSound();
}

function operate(operator) {
  previousNumber = document.getElementById('result').value;
  currentOperation = operator;
  document.getElementById('result').value = '';
  playSound();
}

function calculateResult() {
  const currentNumber = document.getElementById('result').value;
  let result = 0;
  switch (currentOperation) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      if (currentNumber !== '0') {
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
      } else {
        result = 'Error';
      }
      break;
    case '**':
      result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
      break;
  }
  document.getElementById('result').value = result;
  playSound();
}

function clearResult() {
  document.getElementById('result').value = '';
  previousNumber = '';
  currentOperation = '';
  playSound();
}

function backspace() {
  const result = document.getElementById('result').value;
  document.getElementById('result').value = result.substring(0, result.length - 1);
  playSound();
}

function toggleNegative() {
  const result = document.getElementById('result').value;
  document.getElementById('result').value = result.charAt(0) === '-' ? result.substr(1) : '-' + result;
  playSound();
}

function playSound() {
  const audio = new Audio('click.wav');
  audio.play();
}
