let gameBoardArray = ['', '', '', '', '', '', '', '', '',]


const player1 = {
    letter: "X",
    turn: true,
};

const player2 = {
    letter: "O",
    turn: false,
};

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
                player2.turn = true;
            } else{
                this.textContent = player2.letter;
                player1.turn = true;
                player2.turn = false;
            }   
        }
    });
};
}

renderGameBoard();