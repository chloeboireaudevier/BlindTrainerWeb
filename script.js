import * as CONST from './const.js';
const squaresContainer = document.getElementById('squaresContainer');
const lettersContainer = document.getElementById('lettersContainer');
let currentConfiguration='';
let numShowedLetters = 0;


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

function shuffleList(N) {
    // Step 1: Create a list of integers from 0 to N
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push(i);
    }
  
    // Step 2: Apply the Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
      // Random index between 0 and i
      const randomIndex = Math.floor(Math.random() * (i + 1));
      
      // Swap the elements
      [list[i], list[randomIndex]] = [list[randomIndex], list[i]];  // ES6 destructuring swap
    }

    return list;

}

function randomizeOrder(colors,letters){
    const order = shuffleList(colors.length);
    let ordered_colors = [], ordered_letters = [];

    for (let i = 0; i<colors.length;i++){
        ordered_colors.push(colors[order[i]]);
        ordered_letters.push(letters[order[i]]);
    }
    return [ordered_colors,ordered_letters];
}

function generateSquares() {
    document.getElementById('feedback').textContent = '';
    document.getElementById('input-box').value = '';
    numShowedLetters = 0;
    // Clear any existing squares in the container
    squaresContainer.innerHTML = '';
  
    // Randomly choose between 0 and 1
    const randomNum = Math.floor(Math.random() * 2);
    
    if (randomNum == 0){
        currentConfiguration = getRandomEdge();
    } else {
        currentConfiguration = getRandomCorner();
    }
    currentConfiguration = randomizeOrder(currentConfiguration[0],currentConfiguration[1]);

    // Loop to create the squares
    for (let i = 0; i < randomNum+2; i++) {
        const pair = document.createElement('div');
        pair.classList.add('pair');

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = currentConfiguration[0][i];

        const letter = document.createElement('p');
        letter.classList.add('letter','hidden');
        letter.textContent = currentConfiguration[1][i];

        pair.appendChild(square);
        pair.appendChild(letter);
        squaresContainer.appendChild(pair);
    }
    //console.log(currentConfiguration[1]);
  }


function showLetters(i){
    const letters = document.querySelectorAll('.letter');
    for (let j = 0; j < i; j++) {
        letters[j].classList.remove('hidden');
    }
}

function getHint(){
    if (numShowedLetters < currentConfiguration[0].length){
        numShowedLetters++;
        showLetters(numShowedLetters);
    }
    //console.log(numShowedLetters);
}

function submitAnswer(){
    const userInput = document.getElementById('input-box').value.toLowerCase();
    if (userInput.length > 0) {
        if (userInput == currentConfiguration[1].join("").toLowerCase()) {
            document.getElementById('feedback').textContent = '✅ Correct!';
        } else {
            document.getElementById('feedback').textContent = `❌ Wrong, it was "${currentConfiguration[1].join('')}"`;
        }
    }
}

// Add event listener to the button
document.getElementById('changeColorButton').addEventListener('click', generateSquares);
document.getElementById('getHintButton').addEventListener('click',getHint);
document.getElementById('answerButton').addEventListener('click',submitAnswer);

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