function verifierMotDePasse(mdp){
if(mdp.length>=8 && mdp.includes("@")){
    return true ;
}else{
    return false ;
}

}
let MotDePasse= prompt("entre le mode passe");
if(verifierMotDePasse(MotDePasse)){
    console.log("le mode passe est valide");
}else{
    console.log("le mode passe est non valide");
}