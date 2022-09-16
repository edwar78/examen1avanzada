
function calcularDistancia(x1,x2,y1,y2){
    return(Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)))
}

let distancia=calcularDistancia(12,8,55,5)
console.log(`La distancia calculada fue ${distancia}`)
console.log("la distancia es: "+distancia)