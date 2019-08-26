var calc;

function converter() {
    var resultado = document.getElementById("resultado");
    var n = document.forms[0].valor.value;
    var size = n.length;
    var origin = document.forms[0].origin.value;
    var destiny = document.forms[0].destiny.value;
    n =  parseFloat(n);
    if (origin == 'Decimal') {
        if (destiny == 'd') {
            calc = n;
            resultado.innerHTML = (n + "(decimal) é igual a " + calc + "(decimal)");
        }
        else {
            decimalToBinaryu(n,size);
            resultado.innerHTML = (n + "(decimal) é igual a " + calc.join('') + "(binário)");

        }
    }
    else {
        if (destiny == 'b') {
            calc = n;
            resultado.innerHTML = (n + "(binário) é igual a " + calc + "(binário)");
        }
        else {
            calc = binToDessemau (n);
            resultado.innerHTML = (n + "(binário) é igual a " + calc + "(decimal) ");
        }
    }
}

function decimalToBinaryu (n, size) {
    calc = new Array (size);
    var i;
    for (i = 0; i < size; i++) {
        // console.log ("calc = " + calc.join('') + "i == " + i + "n == " + n);
        calc[i] = n % 2;
        if (n == 2) {
            calc[i + 1] = n/2;
        }
        n /= 2;
    }
    // console.log (calc);
    calc.reverse();
    return;
}

function binToDessemau (n) {
    var resul = 0, i;
    for (i = 0; n >= 10; i++) {
        var a = n % 10;
        n /= 10;
        resul += (a * Math.pow(2,i));
    }
    resul += (n * Math.pow(2, i));
    return resul;
}