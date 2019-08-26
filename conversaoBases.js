function converter() {
    var n = parseFloat(document.forms[0].valor.value);
    var origin = document.forms[0].origin.value;
    var destiny = document.forms[0].destiny.value;
    var resultado = document.getElementById("resultado");
    var calc;
    if (origin == 'Decimal') {
        if (destiny == 'd') {
            calc = n;
            resultado.innerHTML = (n + "(decimal) é igual a " + calc + "(decimal)");
        }
        else {

        }
    }
    else {
        if (destiny == 'b') {
            calc = n;
            resultado.innerHTML = (n + "(binário) é igual a " + calc + "(binário)");
        }
        else {

        }
    }
}

function decimalToBinaryu (n) {

}

function binToDessemau (n) {
    
}