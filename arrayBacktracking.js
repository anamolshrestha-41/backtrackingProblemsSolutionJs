// let arr=[];

// for(let i=1; i<=5; i++){
//     arr[i]=i;
// }
// let temp=[...arr];
// for(let i=1; i<=5; i++){
//     temp[i]=temp[i]-2;
// }
// console.log(temp)
//let arr=[];
// for(let i=1; i<=5; i++){
//     arr[i]=i-2;
// }
// console.log(arr)

let arr=[];
arr.length=5;
function Backtracking(index){
    //base case
    if(index==5){
        console.log(":___It shows 1-5____:"+[...arr]);
        return;
    }
    //choose
    arr[index]=index+1;

    //explore
    Backtracking(index+1);

    //backtrack
    arr[index]=arr[index]-2;
    console.log(":--It shows whole backtrackings--:"+[...arr])
}
Backtracking(0)
console.log(':-----Final output-------:'+arr)