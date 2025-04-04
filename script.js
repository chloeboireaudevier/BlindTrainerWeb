let currentChar = '';

import * as CONST from './const.js';

function getRandomCorner() {
    const randomIndex = Math.floor(Math.random() * CONST.corners_key_list.length);
    const randomKey = CONST.corners_key_list[randomIndex];

    const value = CONST.corners.get(randomKey);

    return [randomKey,value]
}

function startTraining() {
  nextChar();
  document.getElementById('feedback').textContent = '';
  document.getElementById('input-box').value = '';
  document.getElementById('input-box').focus();
}

function nextChar() {
  currentChar = getRandomCorner();
  document.getElementById('char-display').textContent = currentChar[1];
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

// Function to generate random colors
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * CONST.edges_key_list.length);
    const randomKey = CONST.edges_key_list[randomIndex];

    return randomKey
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the colors of the squares
function changeColors() {
    // Get the square elements by ID
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');

    // Set new random colors for the squares
    const newcolors = getRandomColor();
    square1.style.backgroundColor = newcolors[0];
    square2.style.backgroundColor = newcolors[1];
}

// Add event listener to the button
document.getElementById('changeColorButton').addEventListener('click', changeColors);