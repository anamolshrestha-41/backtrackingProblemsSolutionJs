//Same row/ same column/ same grid? => Can't place the number...
const sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]


function sudokuSolver(sudoku, row, col){
    //base
    if(row===9) return true;

    let nextRow = row;
    let nextCol = col+1;
    if(col+1==9){
        nextRow=row+1;
        nextCol=0;
    }
    if(sudoku[row][col] !== 0){
      return sudokuSolver(sudoku, nextRow, nextCol)
    }

    for(let digit =1; digit<=9; digit++){
        if(isSafe(sudoku, row, col, digit)){
            sudoku[row][col] = digit;
            if(sudokuSolver(sudoku, nextRow, nextCol)){
                return true;
            }
            sudoku[row][col] = 0;

        }
    }
    return false;
}

function isSafe(sudoku, row, col, digit) {
    //column
    for (let i = 0; i <= 8; i++) {
        if(sudoku[i][col] == digit)
            return false;
    }
    //row
    for(let j=0; j<=8; j++){
        if(sudoku[row][j]==digit)
            return false;
    }

    //grid
    let sr= Math.floor(row/3)*3 //starting row
    let sc= Math.floor(col/3)*3 //starting col
    for(let i=sr; i<sr+3; i++){
        for(let j=sc; j<sc+3; j++){
            if(sudoku[i][j] === digit)
                return false;
        }
    }
    return true;
}

function printSudoku(sudoku){
    let result='';
    for(let i=0; i<9; i++){
        for( let j=0; j<9; j++){
            result+=sudoku[i][j]+' || '
        }
        result+='\n'
    }
    return result;
}
    sudokuSolver(sudoku, 0, 0);
console.log(printSudoku(sudoku))