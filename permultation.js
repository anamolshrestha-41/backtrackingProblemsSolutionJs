function Backtracking(str, ans){
    //base condition
    if(str.length==0){
        console.log(`"${ans}"`);
        return;
    }

    //recursion
    for(let i=0; i<str.length; i++){
        let currentStr= str.charAt(i);
        let newString= str.slice(0,i)+str.slice(i+1);
        Backtracking(newString, ans+currentStr);
        }
}

Backtracking("abc", "")