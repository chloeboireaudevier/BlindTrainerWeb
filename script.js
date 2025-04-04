const letters = 'abcdefghijklmnopqrstuvwxyz';
let currentChar = '';

import * as CONST from './constants.js';

//console.log(CONST.letters);
//console.log(CONST.digits);



function getRandomChar() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function startTraining() {
  nextChar();
  document.getElementById('feedback').textContent = '';
  document.getElementById('input-box').value = '';
  document.getElementById('input-box').focus();
}

function nextChar() {
  currentChar = getRandomChar();
  document.getElementById('char-display').textContent = currentChar;
}

document.getElementById('input-box').addEventListener('input', function(e) {
  const userInput = e.target.value.toLowerCase();
  if (userInput.length > 0) {
    if (userInput === currentChar) {
      document.getElementById('feedback').textContent = '✅ Correct!';
    } else {
      document.getElementById('feedback').textContent = `❌ Oops! It was "${currentChar}"`;
    }
    e.target.value = '';
    nextChar();
  }
});
