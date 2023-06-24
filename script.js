let gameBoardArray = []


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
    pickCell();
}

function pickCell(){
    const cell = document.getElementsByClassName('cell')
        for(let i = 0; i < cell.length; i++){
            cell[i].addEventListener('click', function(){
            this.textContent = player1.letter;
        })
    }
}

renderGameBoard();