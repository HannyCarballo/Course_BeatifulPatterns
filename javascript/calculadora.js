//funciones de una calculadora

//suma
function suma(x,y){
    var resul = x+y;
    return resul;
}

//resta
function resta(x,y){
    var resul = x-y;
    return resul;
}

//multiplica
function multi(x,y){
    var resul = x*y;
    return resul;
}

//divide dos números
function divide(x,y){
    var resul = x/y;
    return resul;
}

//probando las funciones
multi((suma(2,3)), 4)   //20
resta((suma((3/4), 100)), 450)   //-349.25
suma(divide(suma(resta(multi(multi(4,5), 6), 7), 8), 9), 10)   //23.44444444