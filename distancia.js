function converter() {
    resultado = document.getElementById("resultado");
    origin = document.forms[0].origin.value;
    destiny = document.forms[0].origin.value;
    // alert ("origin = " + origin);
    var num = parseFloat(document.forms[0].valor.value);
    switch (origin) {
        case "Km":
            km(num);
            break;
        case "Hm":

        case "Dam":

        case "M":

        case "Dm":

        case "Cm":

        case "Mm":

    }
}

function km(num) {
    switch (destiny) {
        case "Km":
            resultado.innerHTML = (num + " Km é igual a " + num + "Km.");
            break;
        case "Hm":
            resultado.innerHTML = (num + " Km é igual a " + num / 10 + "Hm.");
            break;
        case "Dam":
            resultado.innerHTML = (num + " Km é igual a " + num / 100 + "Dam.");
            break;
        case "M":
            resultado.innerHTML = (num + " Km é igual a " + num / 1000 + "M.");
            break;
        case "Dm":
            resultado.innerHTML = (num + " Km é igual a " + num / 10000 + "Dm.");
            break;
        case "Cm":
            resultado.innerHTML = (num + " Km é igual a " + num / 100000 + "Cm.");
            break;
        case "Mm":
            resultado.innerHTML = (num + " Km é igual a " + num / 1000000 + "Mm.");
    }
}