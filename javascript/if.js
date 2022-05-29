// ciclo if (si)
var referencia = 2020
var este_año = 2022
if (referencia == este_año) {
    // los pasos que la consola necesita hacer si 
    // la condición esté satisfecha
    console.log("El año en que estoy es la referencia")
}
else if ( (referencia+1) == este_año ) {
    // los pasos que la consola necesita hacer si 
    // la condición esté satisfecha
    console.log("El año en que estoy es un año más adelante que la referencia")
}
else { // general
    // los pasos que la consola necesita hacer si 
    // ninguna de las condicionas estén satisfechas
    console.log("El año en que estoy no es la referencia ni la referencia más 1")
}