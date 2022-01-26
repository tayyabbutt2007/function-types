//function store in an object is known as 'method' as shown below
// const person = {
//     greet: function(){
//         console.log("Hey There...");
//     }
// }

// person.greet();




const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = 'ROCK';
const PLAYER_WINS = 'PLAYER_WINS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_DRAW = 'DRAW';
var gameStarted = false;

const userSelection = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid Input, We have selected ${DEFAULT_VALUE} as your value`);
        return DEFAULT_VALUE;
    }
    return selection;
};

const computerSelection = () => {
    const randomNumber = Math.random();
    if (randomNumber > 0.32) {
        return ROCK;
    } else if (randomNumber > 0.64) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (pSelection, cSelection) => {
    if (pSelection === cSelection) {
        return RESULT_DRAW;
    }
    if (cSelection === ROCK && pSelection === PAPER ||
        cSelection === PAPER && pSelection === SCISSORS ||
        cSelection === SCISSORS && pSelection === ROCK) {
        return PLAYER_WINS;
    }
    else {
        return COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', () => {
    if (gameStarted) {
        return;
    }
    console.log("Game is starting...");
    gameStarted = true;
    const playerSelected = userSelection();
    const computerSelected = computerSelection();
    const Result = getWinner(playerSelected, computerSelected);
    let message = `${Result} because you selected ${playerSelected} and computer selected ${computerSelected} so you `;
    if (Result === RESULT_DRAW) {
        message = message + 'had a DRAW';
    } else if (Result === PLAYER_WINS) {
        message = message + 'WIN';
    } else {
        message = message + 'LOSE';
    }
    alert(message);
    gameStarted = false;
});

// not related to game


//rest operator

const combine = (cb, operator, ...numbers) => {
    //function inside function
    const validateValue = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    if (operator === 'ADD') {
        for (let num of numbers) {
            sum += validateValue(num);
        }
    }
    else if (operator === 'SUBTRACT') {
        for (let num of numbers) {
            sum -= validateValue(num);
        }
    }

    //callback
    cb(sum);
};

//call back function
const showResult = (message, res) => {
    alert(message + ' ' + res);
};


//another way with function() 

// const subUp = function() {
//     let sub = 0;
//     for (let num of arguments){ // argument used in previous version of js inside of rest operator
//     sub -= num;                 // do not use that now
//     }
//     return sub;
// };

combine(showResult.bind(this, 'The result after adding all the numbers is '), 'ADD', 46, 7, 'asd', 4, 3, 22, 3);
combine(showResult.bind(this, 'The result after subtracting all the numbers is '), 'SUBTRACT', 46, 7, 'asd', 4, 3, 22, 3);

//console.log(subUp(1,46,7,55,4,3,22,3));