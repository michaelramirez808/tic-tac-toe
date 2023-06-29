
const player1 = {
    letter: "X",
    turn: true,
};

const player2 = {
    letter: "O",
    turn: false,
};

let gameBoardArray = ['', '', '', '', '', '', '', '', '',]

function renderGameBoard(){
    let gameBoardContainer = document.getElementById("gameBoardContainer")
    gameBoardContainer.textContent = '';

    for(let i = 0; i < 9; i++){
        let squareCell = document.createElement('div')
        squareCell.textContent = gameBoardArray[i];
        squareCell.classList.add('cell')
        gameBoardContainer.appendChild(squareCell);

        squareCell.addEventListener('click', function(){
            if (this.textContent === ''){
            if (player1.turn){
                this.textContent = player1.letter;
                player1.turn = false;
                gameBoardArray[i] = player1.letter;

                checkTie();
                checkWin();

                player2.turn = true;
            }else{
                this.textContent = player2.letter;
                player1.turn = true;
                gameBoardArray[i] = player2.letter;

                checkTie();
                checkWin();

                player2.turn = false;

            }   
        }
    });
};
}

function checkWin(){
    const winningCondition = [
        [0,1,2], [3,4,5], [6,7,8], //rows
        [0,3,6], [1,4,7], [2,5,8], //columns
        [0,4,8], [2,4,6] //diagonals
    ]

    for(let condition of winningCondition){
        let [a,b,c] = condition;
        if (gameBoardArray[a] !== '' && gameBoardArray[a] && gameBoardArray[a] === gameBoardArray[b] && gameBoardArray[a] === gameBoardArray[c]){
        displayMessage(`Player ${gameBoardArray[a]} wins!`);
        }
    }
}

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGameBoard);

function resetGameBoard(){
    gameBoardArray = ['', '', '', '', '', '', '', '', '',]
    player1.turn = true;
    player2.turn = false;
    displayMessage('');
    renderGameBoard();
}

function displayMessage(message){
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function checkTie(){
    if(!gameBoardArray.includes('')){
        displayMessage("It's a tie!")
    };
}

renderGameBoard();