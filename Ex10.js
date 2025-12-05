/*function sommeIterative(n){
    let somme_1= 0;
    for(let i=1 ;i<=n ; i++){
         somme_1 +=i;
    }
    return somme_1 ;
        
}
let m = Number(prompt("entre un numbre"));
console.log( sommeIterative(m));*/
function sommeRecursive(b){
    if(b===1){
        return 1;
    }

     return b + sommeRecursive(b -1);
}
let t=Number(prompt("entre un numbre"));
console.log(sommeRecursive(t));