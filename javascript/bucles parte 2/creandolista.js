// codigo en base a magic.js y a circulo.html

var lista = [];
// anadir variables (las cuales son circulos) a esa lista
lista.push(crear());
lista.push(crear());
lista.push(crear());
lista.push(crear());

largo = lista.length; // numero de variables en la lista

// cambiar los colores dentro de mi lista
// (1) al azar
for(j=0;j<largo;j++) { // recuerdense que la numeracion de una lista empieza con 0!
    var circulo = lista[j];
    colorAlAzar(circulo)
}

// (2) especificando un color
for(j=0;j<largo;j++) { // recuerdense que la numeracion de una lista empieza con 0!
    var circulo = lista[j];
    color(circulo,7, 136, 242)
}
