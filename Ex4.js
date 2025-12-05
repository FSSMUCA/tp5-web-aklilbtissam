
let min = Number(prompt("Entrez la valeur minimale :"));
let max = Number(prompt("Entrez la valeur maximale :"));



console.log("Résultat :");
for (let i = min; i <= max; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Five&Three");
    } else if (i % 3 === 0) {
        console.log("Three");      
    } else if (i % 5 === 0) {
        console.log("Five");      
    } else {
        console.log(i);           
    }

}