function PadawanAsignar(names,planeta,años,estatu,callback){
    setTimeout(function(){
        let padawans = 
            {
                nombre: names,
                planeta: planeta,
                edad: años,
                estatura: estatu
            }
        console.log(`Nombre: ${padawans.nombre} Edad: ${padawans.edad}`)
        callback(padawans)
    },10000)
}

PadawanAsignar('Edwar','septiembre',21,'1.70cm',function(padawan){
    if (padawan.edad < 15){
        console.log("Actividad: Manejo de la fuerza")
    }
    else{
        console.log("Actividad: Manejo del sable de luz")
    }
})  