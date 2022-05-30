// Calculadora para el digito check en ISBN 13 

function isbn_check(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12) {
    suma = x1 + 3*x2 + x3 + 3*x4 + x5 + 3*x6 + x7 + 3*x8 + x9 + 3*x10 + x11 + 3*x12;
    resto = suma % 10; // calculando el 'modulo', es decir, el resto de suma dividido por 10
    digito_check = 10 - resto; // diferencia entre el resto y 10
    if (digito_check == 10) {
        digito_check = 0; // para que el digito check es entre 0 y 9
    }
    return digito_check; 
}