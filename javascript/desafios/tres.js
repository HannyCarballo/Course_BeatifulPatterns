// desafio 3. triangulo
var espacio = "";
var anadir = "";
for (j=1;j<=26;j=j+2){
    var espacio = "";
var anadir = "";
for (i=1;i<=(36-j)/2; i++){
espacio= espacio.concat(" ");
}
for (i=1; i<=j; i++){
anadir= anadir.concat("*");
}
linea=espacio.concat(anadir)
console.log(linea)
}