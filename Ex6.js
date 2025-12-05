let SommePair=0;
let SommeInpair=0;
for( let i=1 ; i<=50 ; i++){
    if(i % 2 ===0){
       SommePair +=i;
    }
    else{
       SommeInpair +=i;
    }
}
console.log("la somme des numbre pair entre 1 et 50 est : ",SommePair);
console.log("la somme des numbre inpair entre 1 et 50 :",SommeInpair)