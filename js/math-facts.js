/* jshint esversion: 6 */

/* Game data */

const operationNames = { addition: 'Addition', subtraction: 'Subtraction', multiplication: 'Multiplication', division: 'Division' };

/* DOM elements */

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const operationSelect = document.getElementById('operation');
const startButton = document.getElementById('start-button');
const playAgainButton = document.getElementById('play-again-button');
const gameOperation = document.getElementById('game-operation');
const endOperation = document.getElementById('end-operation');
const answerInput = document.getElementById('answer');


/* State */

let currentOperation = '';

/* Screen navigation */

const showScreen = (screen) => {
    startScreen.hidden = true;
    gameScreen.hidden = true;
    endScreen.hidden = true;
    screen.hidden = false;
};
const startGame = () => {
    currentOperation = operationSelect.value;
    gameOperation.textContent = operationNames[currentOperation];
    endOperation.textContent = operationNames[currentOperation];
    answerInput.value = '';
    showScreen(gameScreen);
    answerInput.focus();
};
const playAgain = () => {
    showScreen(startScreen);
    operationSelect.focus();
};

/* Event listeners */

startButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', playAgain);