
function converter() {
    var num = parseFloat(document.forms[0].valor.value);
    resultado = document.getElementById("resultado");
    origin = document.forms[0].origin.value;
    destiny = document.forms[0].destiny.value;
    if (origin == 'Km') {
        km(num);
    } else if (origin == 'Hm') {

    } else if (origin == 'Dam') {

    } else if (origin == 'M') {

    } else if (origin == 'Dm') {

    } else if (origin == 'Cm') {

    } else {

    }
}

function km(num) {
    if (destiny == 'Kilo') {
        resultado.innerHTML = (num + " Km é igual a " + num + "Km.");
    } else if (destiny == 'Hecto') {
        resultado.innerHTML = (num + " Km é igual a " + num / 10 + "Hm.");
    } else if (destiny == 'Deca') {
        resultado.innerHTML = (num + " Km é igual a " + num / 100 + "Dam.");
    } else if (destiny == 'Metros') {
        resultado.innerHTML = (num + " Km é igual a " + num / 1000 + "M.");
    } else if (destiny == 'Deci') {
        resultado.innerHTML = (num + " Km é igual a " + num / 10000 + "Dm.");
    } else if (destiny == 'Centi') {
        resultado.innerHTML = (num + " Km é igual a " + num / 100000 + "Cm.");
    } else {
        resultado.innerHTML = (num + " Km é igual a " + num / 1000000 + "Mm.");
    }
}