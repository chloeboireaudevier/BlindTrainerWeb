import * as CONST from './const.js';
let currentChar = '';

function getRandomCorner() {
    const randomIndex = Math.floor(Math.random() * CONST.corners_key_list.length);
    const randomKey = CONST.corners_key_list[randomIndex];
    const value = CONST.corners.get(randomKey);
    return [randomKey,value]
}

function getRandomEdge() {
    const randomIndex = Math.floor(Math.random() * CONST.edges_key_list.length);
    const randomKey = CONST.edges_key_list[randomIndex];
    const value = CONST.edges.get(randomKey);
    return [randomKey,value]
}

function changeColors() {
    // Get the square elements by ID
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');

    // Set new random colors for the squares
    const res = getRandomEdge();
    square1.style.backgroundColor = res[0][0];
    square2.style.backgroundColor = res[0][1];
    document.getElementById('char-display').textContent = res[1];

}

// Add event listener to the button
document.getElementById('changeColorButton').addEventListener('click', changeColors);



/*
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
*/