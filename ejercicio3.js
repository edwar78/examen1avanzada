//EJERCICIO 3
let promedio = (temperatura) => {
    let temperaMax = Math.max(...temperatura) 
    let temperaMin = Math.min(...temperatura)

    let promedio = (temperaMax + temperaMin) / 2 

    console.log(`La temperatura promedio es de: ${promedio}°C`)
}

promedio([-250,-629,-400,-800])