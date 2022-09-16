function SablesLuz(){
    let Sables = [

        {
            color:"amarrillo",
            energia:50,
            portador:"daniel"
        },

        {
            color:"violeta",
            energia:20,
            portador:"sofia"
        },

        {
            color:"verde",
            energia:10,
            portador:"carlos"
        },

        {
            color:"azul",
            energia:11,
            portador:"mariana"},

        {
            color:"rojo",
            energia:12,
            portador:"monica"
        },

        {
            color:"amarillo",
            energia:17,
            portador:"alexander"
        },
        
        {
            color:"violeta",
            energia:21,
            portador:"Lucy"
        },

        {
            color:"verde",
            energia:40,
            portador:"Daniel"
        },

        {
            color:"amarrillo",
            energia:50,
            portador:"Paola"
        },

        {
            color:"rojo",
            energia:5,
            portador:"santiago"
        },

        {
            color:"verde",
            energia:18,
            portador:"valentin"
        },

        {
            color:"azul",
            energia:20,
            portador:"rebeca"
        },

        {
            color:"rojo",
            energia:34,
            portador:"Juan"
        },

        {
            color:"verde",
            energia:40,
            portador:"cristian"
        },

        {
            color:"azul",
            energia:60,
            portador:"danilo"
        },

        {
            color:"verde",
            energia:70,
            portador:"Yeison"
        },

        {
            color:"azul",
            energia:30,
            portador:"Andres"
        },

    ]

    let filt = Sables.filter(sable => sable.energia < 20)
    console.log(filt)
    console.log(filt.length)
}

SablesLuz()