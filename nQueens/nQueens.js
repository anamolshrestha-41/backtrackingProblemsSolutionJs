let n=5;
let board=Array(n).fill().map(()=>Array(n).fill('X'));

//IsSafe?
const IsSafe=(board, row, col)=>{
    //same column?
    for(let i=0; i<row; i++){
        if(board[i][col]==='Q')
            return false;
    }
    //diagonal left up
    for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
        if(board[i][j]==='Q')
            return false;
        }

    //diagonal right up
    for(let i = row-1, j = col+1; i>=0 && j< n; i--, j++){
        if(board[i][j]==='Q')
            return false;
    }
    return true;
}


function nQueen(board, row, n){
    //base
    if(row === n){
        console.log(board)
        return;
    }
    for(let col=0; col<n; col++){
    if(IsSafe(board, row, col)){
            board[row][col] = 'Q';
            nQueen(board, row+1, n);
            board[row][col] = 'X';
        }
    }
}

nQueen(board, 0, n);

//Another way
// function solvedQueens(n){
//     const board= Array.from({length: n}, ()=> Array(n).fill('X'));
//     const result=[];
//     //IsSafe?
// const IsSafe=(row, col)=>{
//     //same column?
//     for(let i=0; i<row; i++){
//         if(board[i][col]==='Q')
//             return false;
//     }
//     //diagonal left up
//     for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--){
//         if(board[i][j]==='Q')
//             return false;
//         }

//     //diagonal right up
//     for(let i = row-1, j = col+1; i>=0 && j< n; i--, j++){
//         if(board[i][j]==='Q')
//             return false;
//     }
//     return true;
// }

// function nQueen(row){
//     //base
//     if(row === board.length){
//         console.log(board)
//         return;
//     }
//     for(let col=0; col<n; col++){
//     if(IsSafe(row, col)){
//             board[row][col] = 'Q';
//             nQueen(row+1);
//             board[row][col] = 'X';
//         }
//     }
// }
// nQueen(0);
// return result;
// }
// console.log(solvedQueens(4))