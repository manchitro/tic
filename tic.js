var info = document.getElementById("info");
var cells = document.getElementsByClassName("cell");
var player1 = "X";
var player2 = "O";
var turn = player1;
var winner = "";
startGame();

function startGame() {
    clearBoard();
    info.innerHTML = "X's turn";
}

function clearBoard() {
    for (var i in cells) {
        cells[i].innerHTML = "";
    }
    console.clear();
}

function cellClick(cellNum) {
    if (winner === "") {
        if (cells[cellNum].innerHTML === "") {
            if (turn === player1) {
                cells[cellNum].innerHTML = player1;
                console.log("X played cell " + (cellNum + 1));
                turn = player2;
                info.innerHTML = player2 + "'s turn";
            } else if (turn == player2) {
                cells[cellNum].innerHTML = player2;
                console.log("O played cell " + (cellNum + 1));
                turn = player1;
                info.innerHTML = player1 + "'s turn";
            }

            checkWinner();
        }
    }
}

function reset() {
    clearBoard();
    turn = player1;
    info.innerHTML = "X's turn";
    winner = "";
    for (var i = 0; i < 9; i++) {
        cells[i].style.color = "rgb(37,37,37)";
    }
}

function checkWinner() {
    var winningLines = [
        //rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //colums
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonals
        [0, 4, 8],
        [2, 4, 6],
    ];

    var boardState = new Array(9);
    for (var i = 0; i < 9; i++) {
        boardState[i] = cells[i].innerHTML;
    }

    for (var i in winningLines) {
        if (cells[winningLines[i][0]].innerHTML === cells[winningLines[i][1]].innerHTML && cells[winningLines[i][1]].innerHTML === cells[winningLines[i][2]].innerHTML && cells[winningLines[i][0]].innerHTML !== "") {
            //console.log(cells[winningLines[i][1]].innerHTML);
            info.innerHTML = cells[winningLines[i][0]].innerHTML + " wins!";
            cells[winningLines[i][0]].style.color = "green";
            cells[winningLines[i][1]].style.color = "green";
            cells[winningLines[i][2]].style.color = "green";
            winner = cells[winningLines[i][0]].innerHTML;
            break;
        }
    }

    checkDraw();
}

function checkDraw() {
    if (winner === "") {
        var isDraw = true;
        for (var i = 0; i < 9; i++) {
            if (cells[i].innerHTML === "") {
                //console.log("break");
                isDraw = false;
                break;
            }
            // console.log("draw");
        }
        if (isDraw) {
            info.innerHTML = "Draw!";
        }
    } else {
        console.log("winner: " + winner);
    }
}
