function factorielle(n){
    if(n==0){
        return 1;
    }else{
        return n * factorielle(n-1);
    }
}
let n=Number(prompt("saisir un numbre"));
console.log(" le factorielle de ce numbre est :",factorielle(n));