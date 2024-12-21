const prompt = require("prompt-sync")()

function makeMove(turn,board){
    const row = parseInt(prompt("Enter row: "))
    const col = parseInt(prompt("Enter column: "))
    if (isNaN(row) || row < 1 || row > 3 || row < 1 || row > 3) {
        console.log("Invalid row.")
        return makeMove(turn,board)
    }
    else if (isNaN(col) || col < 1 || col > 3 || col < 1 || col > 3) 
        {
            console.log("Invalid column.")
            return makeMove(turn,board)
        }
    if (board[row-1][col-1] === " "){
        board[row-1][col-1] = turn
        return true
        } 
    else{
        console.log("Invalid move, try again")
        return makeMove(turn,board)
        }
}

function printBoard (board){
    for (let i = 0; i<board.length; i++){
        const row = board [i]
        let rowString = ""
        for (let j=0 ; j< row.length; j++){
            rowString += row[j] 
            if (j !== row.length - 1) rowString += "|"
        }
        console.log(rowString)
        if (i !== board.length-1 ) console.log("------")
    }

}

function checkWin(board,turn){
    const lines =[
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ]
    for (let line of lines){
        let win = true
        for(let pos of line){
            const [row , col] = pos
            if (board[row][col] !== turn){
                win = false
                break
            }
        }
        if (win) return true
    }
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
let turn = "X"
let turnCount = 0
const endOfGame = board.length * board.length

while(turnCount< endOfGame){
    console.log("It is the ",turn , " players turn.")
    makeMove(turn, board)
    printBoard(board)
    console.log()
    const win = checkWin(board, turn)
    if (win){
        console.log("Player ", turn, " wins!")
        break
    }

    if (turn === "X") turn = "O"
    else turn = "X"
    turnCount ++
}
if (turnCount === endOfGame) console.log("Tie game!")
