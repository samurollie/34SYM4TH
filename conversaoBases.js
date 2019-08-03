function converter () {
    var numero = document.forms[0].valor.value;
    if (document.forms[0].decimalPara.checked) {
        parseInt (numero);
        decimal(numero);
    }
    else if (document.forms[0].binariaPara.checked) {
        parseInt (numero);        
        binaria(numero);
    }
    else if (document.forms[0].hexadecimalPara.checked) {
        hexadecimal(numero);
    }
    else if (document.forms[0].octalPara.checked) {
        parseInt (numero);        
        octal(numero);
    }
    else {
        alert("Selecione a base numérica de origem!");
    }
    document.getElementById("explicacao").innerHTML = ("EXPLICAÇÃO DO CALCULO")
}

function decimal (numero) {
    
}

function binaria (numero) {

}

function hexadecimal (numero) {

}

function octal (numero) {

}