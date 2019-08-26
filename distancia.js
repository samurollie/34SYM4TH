function converter() {
    var num = parseFloat(document.forms[0].valor.value); // Salva o valor de digitado numa variável
    resultado = document.getElementById("resultado"); // Salva o parágrafo com id "resultado" numa variável
    origin = document.forms[0].origin.value; // Salva a unidade de origem numa variável
    destiny = document.forms[0].destiny.value; // Salva a unidade de destino numa variável
    if (origin == 'Km') { // Se a unidade de origem for quilômetros;
        km(num); // Converte
    } else if (origin == 'Hm') { // Se a unidade de origem for hectômetros;
        hm(num); // Converte
    } else if (origin == 'Dam') { // Se a unidade de origem for decâmetros;
        dam(num); // Converte
    } else if (origin == 'M') { // Se a unidade de origem for metros;
        m(num); // Converte
    } else if (origin == 'Dm') { // Se a unidade de origem for decímetros;
        dm(num); // Converte
    } else if (origin == 'Cm') { // Se a unidade de origem for centimetros;
        cm(num); // Converte
    } else { // Se a unidade de origem for milimetros;
        mm(num); // Converte
    }
}

function km(num) { // Converte de quilômetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Km é igual a " + num + "Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Km é igual a " + num / 10 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Km é igual a " + num / 100 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Km é igual a " + num / 1000 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Km é igual a " + num / 10000 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Km é igual a " + num / 100000 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Km é igual a " + num / 1000000 + " Mm.");
    }
}

function hm(num) { // Converte de hectômetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Hm é igual a " + num * 10 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Hm é igual a " + num + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Hm é igual a " + num / 10 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Hm é igual a " + num / 100 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Hm é igual a " + num / 1000 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Hm é igual a " + num / 10000 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Hm é igual a " + num / 100000 + "Mm.");
    }
}

function dam(num) { // Converte de decâmetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Dam é igual a " + num * 100 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Dam é igual a " + num * 10 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Dam é igual a " + num * 1 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Dam é igual a " + num / 10 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Dam é igual a " + num / 100 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Dam é igual a " + num / 1000 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Dam é igual a " + num / 10000 + "Mm.");
    }
}

function m(num) { // Converte de metros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " M é igual a " + num * 1000 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " M é igual a " + num * 100 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " M é igual a " + num * 10 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " M é igual a " + num * 1 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " M é igual a " + num / 10 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " M é igual a " + num / 100 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " M é igual a " + num / 1000 + "Mm.");
    }
}

function dm(num) { // Converte de decímetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Dm é igual a " + num * 10000 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Dm é igual a " + num * 1000 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Dm é igual a " + num * 100 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Dm é igual a " + num * 10 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Dm é igual a " + num * 1 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Dm é igual a " + num / 10 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Dm é igual a " + num / 100 + "Mm.");
    }
}

function cm(num) { // Converte de centímetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 100000 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 10000 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 1000 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 100 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 10 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Cm é igual a " + num * 1 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Cm é igual a " + num / 10 + "Mm.");
    }
}

function mm(num) { // Converte de milímetros para...
    if (destiny == 'Kilo') { // ...quilômetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 1000000 + " Km.");
    } else if (destiny == 'Hecto') { // ...hectômetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 100000 + " Hm.");
    } else if (destiny == 'Deca') { // ...decâmetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 10000 + " Dam.");
    } else if (destiny == 'Metros') { // ...metros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 1000 + " M.");
    } else if (destiny == 'Deci') { // ...decímetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 100 + " Dm.");
    } else if (destiny == 'Centi') { // ...centímetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 10 + " Cm.");
    } else { // ...milímetros;
        resultado.innerHTML = (num + " Mm é igual a " + num * 1 + "Mm.");
    }
}