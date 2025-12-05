let n=nombre(prompt("vuillez saisir un nombre ??"));
if(n<0)
{
    console.log("nombre négative :");
}else{
    if(n<=10){
        console.log("petit" );
    }
    else if(n<=50){
        console.log( "moyen");
    }
    else if (n<=100){
        console.log("grand");
    }
    else {
        console.log("Très grand")
    }

}
