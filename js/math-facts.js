/* jshint esversion: 6 */

/* Game data */


const MIN_NUMBER = 0;
const MAX_NUMBER = 10;
const operationSymbols = {
    addition: '+',
    subtraction: '-',
    multiplication: '×',
    division: '÷'
};
const operationNames = {
    addition: 'Addition',
    subtraction: 'Subtraction',
    multiplication: 'Multiplication',
    division: 'Division'
};

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
const problemDisplay = document.getElementById('problem');
const scoreDisplay = document.getElementById('score');
const clearButton = document.getElementById('clear-button');
const keypadButtons = document.querySelectorAll('.keypad-button');

/* State */

let currentOperation = '';
let currentAnswer = 0;
let score = 0;

/* Screen navigation */

const showScreen = (screen) => {
    startScreen.hidden = true;
    gameScreen.hidden = true;
    endScreen.hidden = true;
    screen.hidden = false;
};
const startGame = () => {
    currentOperation = operationSelect.value;
    score = 0;
    scoreDisplay.textContent = score;
    gameOperation.textContent = operationNames[currentOperation];
    endOperation.textContent = operationNames[currentOperation];
    answerInput.value = '';
    generateProblem();
    showScreen(gameScreen);
    answerInput.focus();
};
const playAgain = () => {
    showScreen(startScreen);
    operationSelect.focus();
};

/* Problem generation */

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const generateProblem = () => {
    let firstNumber;
    let secondNumber;
    switch (currentOperation) {
        case 'addition':
            firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            currentAnswer = firstNumber + secondNumber;
            break;
        case 'subtraction':
            firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            secondNumber = getRandomNumber(MIN_NUMBER, firstNumber);
            currentAnswer = firstNumber - secondNumber;
            break;
        case 'multiplication':
            firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            currentAnswer = firstNumber * secondNumber;
            break;
        case 'division':
            secondNumber = getRandomNumber(1, MAX_NUMBER);
            currentAnswer = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            firstNumber = currentAnswer * secondNumber;
            break;
    }
    const symbol = operationSymbols[currentOperation];
    problemDisplay.textContent = `${firstNumber} ${symbol} ${secondNumber}`;
};

/* Answer checking */

const checkAnswer = () => {
    if (answerInput.value === '') {
        return;
    }
    if (Number(answerInput.value) === currentAnswer) {
        score = score + 1;
        scoreDisplay.textContent = score;
        answerInput.value = '';
        generateProblem();
        answerInput.focus();
    }
};

/* Keypad */

const pressDigit = (event) => {
    answerInput.value = answerInput.value + event.target.textContent;
    checkAnswer();
    answerInput.focus();
};
const clearAnswer = () => {
    answerInput.value = '';
    answerInput.focus();
};

/* Event listeners */

startButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', playAgain);
answerInput.addEventListener('input', checkAnswer);
clearButton.addEventListener('click', clearAnswer);
keypadButtons.forEach((button) => {
    button.addEventListener('click', pressDigit);
});