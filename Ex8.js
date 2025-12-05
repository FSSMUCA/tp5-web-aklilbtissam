
function totalAvecRemise(total, remise) {
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}

let TotalHT = Number(prompt("Entrez le Total HT :"));
let remise = Number(prompt("Entrez la remise en % :"));

let totalFinal = totalAvecRemise(TotalHT, remise);
console.log("Le total final après remise est :", totalFinal);

