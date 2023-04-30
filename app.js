let vidaPersonaje = parseInt(prompt("Cuanta vida tiene tu personaje"))
if (vidaPersonaje < 0 || vidaPersonaje > 100) {
    console.log("valores menores a 0 y mayores a 100 no son validos");
} else {
    if (vidaPersonaje >= 0 && vidaPersonaje <= 20) {
        console.log("tu personaje huyó");
    } else if (vidaPersonaje >= 21 && vidaPersonaje <= 50) {
        console.log("Tu personaje esta en modo defensivo");
    } else if (vidaPersonaje >= 51 && vidaPersonaje <= 80) {
        console.log("Tu personaje esta en modo moderado");
    } else {
        "Tu personaje esta en modo ofensivo"
    }
}



if(vidaPersonaje >= 0){
    if(vidaPersonaje <= 20){
        console.log("tu personaje huyó")
    }
}if(vidaPersonaje >= 21){
    if(vidaPersonaje <= 50){
        console.log("Tu personaje esta en modo defensivo");
    }
}if(vidaPersonaje >= 51){
    if(vidaPersonaje <= 80){
        console.log("Tu personaje esta en modo moderado");
    }
}if(vidaPersonaje >= 81){
    if(vidaPersonaje <= 100){
        console.log("Tu personaje esta en modo ofensivo");
    }
}
