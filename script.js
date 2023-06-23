let gameBoardArray = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X']


const player1 = {
    letter: "X",
    turn: "1",
};

const player2 = {
    letter: "O",
    turn: "2",
};

function renderGameBoard(){
    let gameBoardContainer = document.getElementById("gameBoardContainer")
    gameBoardContainer.textContent = '';
    for(let i = 0; i < 9; i++){
        let square = gameBoardArray[i];
        let squareCell = document.createElement('div')
        squareCell.textContent = gameBoardArray[i];
        squareCell.classList.add('cell')
        gameBoardContainer.appendChild(squareCell);
    }
}

renderGameBoard();