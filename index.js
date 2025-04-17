let currentPlayer = 'X'; 
let gameBoard = ['', '', '', '', '', '', '', '', '']; 
let gameActive = true; 
const cells = document.querySelectorAll('.cell') 
const winConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];
const resetButton = document.getElementById('resetButton');

function PlayerTurn(clickedCellIndex){

    gameBoard[clickedCellIndex] = currentPlayer;
    checkForWinOrDraw();
}

function cellClicked(Event){
    const clickedCell = Event.target; 
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell-', '')) - 1; 

    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    
    PlayerTurn (clickedCellIndex);
    updateUI();
}

function updateUI(){
    for (let i = 0; i < cells.length; i++){
        cells[i].innerText = gameBoard[i];
    }
}

function checkForWinOrDraw(){
    let roundWon = false;
    
    for (let i=0; i < winConditions.length; i++){
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
            roundWon = true;
            break;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }

    

    if (roundWon){
        announceWinner (currentPlayer);
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    let roundDraw = !gameBoard.includes('');
    if (roundDraw){
        announceDraw();
        gameActive = false;
        return;
    }
}

function announceWinner(player) {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = `Player ${player} Wins!`;
}
  
function announceDraw() {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = 'Game Draw!';
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '']; 
    gameActive = true; 
    currentPlayer = 'X'; 
    cells.forEach(cell => {
        cell.innerText = '';
    });
    document.getElementById('gameMessage').innerText = '';
  }

resetButton.addEventListener('click', resetGame, false);
cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
});
