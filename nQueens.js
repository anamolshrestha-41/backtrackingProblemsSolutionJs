let n=4;
let board=[n][n];
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        board[i][j]='X'
    }
}

function nQueen(board, row){
    //base
    if(row==board.length){
        console.log(board)
        return;
    }
}