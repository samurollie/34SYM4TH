function converter() {
    var numero = document.forms[0].valor.value;
    if (document.forms[0].decimalPara.checked) {
        parseInt(numero);
        decimal(numero);
    } else if (document.forms[0].binariaPara.checked) {
        parseInt(numero);
        binaria(numero);
    } else if (document.forms[0].hexadecimalPara.checked) {
        hexadecimal(numero);
    } else if (document.forms[0].octalPara.checked) {
        parseInt(numero);
        octal(numero);
    } else {
        alert("Selecione a base numérica de origem!");
    }
    document.getElementById("explicacao").innerHTML = ("EXPLICAÇÃO DO CALCULO");
}

function ehDecimal (numero) {
    var flag = 1;
    for (i = 0; i < numero.length; i++) {
        switch (numero[i]) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                flag = 0;
                break;
            default:
                flag = 1;
                break;
        }
        if (flag == 1) {
            return 0;
        }
    }

    if (flag == 0) {
        return 1;
    }
}

function decimal(numero) {
    var resultado = document.getElementById("resultado");
    if (ehDecimal(numero) == 0) {
        alert ("Digite um número válido!\n");
        return;
    }
    if (document.forms[0].decimal.checked) {
        alert ("A base de destino é igual à base de origem!");
    } else {

    }
}

function binaria(numero) {

}

function hexadecimal(numero) {

}

function octal(numero) {

}