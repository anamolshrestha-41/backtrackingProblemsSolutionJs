let n = 2;
let board = Array.from({ length: n }, () => Array(n).fill('X'));
const solutions=[]
function nQueen(board, row, n) {
    if (row === n) {
        solutions.push(board.map(ro=>[...ro]))
        return board;
    }
    for (let col = 0; col < n; col++) {
        board[row][col] = 'Q'; //choose
        nQueen(board, row + 1, n) // explore
        board[row][col] = 'X'; //backtrack
    }
}
nQueen(board, 0, n)
console.log(solutions);
console.log(`Total Length: ${solutions.length}`)