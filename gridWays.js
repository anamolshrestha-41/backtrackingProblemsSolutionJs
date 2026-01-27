let n=4;
let m=4;

const gridWays=(i, j, n, m)=>{
if( i === n-1 && j === m-1) return 1;
else if(i=== n || j === m) return 0;
return gridWays(i+1, j, m, n) + gridWays(i, j+1, m, n);
}

console.log(gridWays(0, 0, n, m))
