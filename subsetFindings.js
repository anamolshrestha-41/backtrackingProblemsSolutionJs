function Backtracking(str, ans, i){
//base case
if(i==str.length){
    console.log(`" ${ans} "`);
    return;
}
//yes choice
Backtracking(str, ans+str.charAt(i), i+1);

//nochoice
Backtracking(str, ans, i+1)
}
Backtracking("abc", "", 0)
