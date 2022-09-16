// EJERCICIO 2
function nave(codigo){
    let nombre
    switch (codigo) {
        case 'ARQ2555:':
            nombre = 'Sara Bel Sun'
            break;3000
        case 'ARQ2556:':
            nombre = 'Nodin Chavdri'
            break;
        case 'ARQ2557:':
            nombre = 'Finn'
            break;
        default:
            nombre = 'No hay registro de piloto.'
            break;
    }
    return nombre
}

let pilot = codigo => {
    let nombre = codigo.split(':')
    return (`El nombre es: ${nombre[1]}`)
}
console.log(pilot('ARQ2555: Sara Bel-Sun'))
console.log(pilot('ARQ2556: '))
console.log(pilot('Finn'))

