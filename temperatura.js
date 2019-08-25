function converter() {
    var n = parseFloat(document.forms[0].valor.value);
    var origin = document.forms[0].origin.value;
    var destiny = document.forms[0].destiny.value;
    var resultado = document.getElementById("resultado");
    var calc;
    if (origin == 'C') {
        if (destiny == 'Celsius') {
            resultado.innerHTML = (n + "°C = " + n + "°C");
        } else if (destiny == 'Farenheit') {
            calc = (1.8 * n) + 32;
            resultado.innerHTML = (n + "°C = " + calc + "°F");
        } else {
            calc = n + 273;
            resultado.innerHTML = (n + "°C = " + calc + "K");
        }
    } else if (origin == 'F') {
        if (destiny == 'Celsius') {
            calc = (n - 32) / 1.8;
            resultado.innerHTML = (n + "°F = " + calc + "°C");
        } else if (destiny == 'Farenheit') {
            calc = n;
            resultado.innerHTML = (n + "°F = " + calc + "°F");
        } else {
            calc = ((5 * n) + 2282) / 9;
            resultado.innerHTML = (n + "°F = " + calc + "K");
        }
    } else {
        if (destiny == 'Celsius') {
            calc = n - 273;
            resultado.innerHTML = (n + "K = " + calc + "°C");
        } else if (destiny == 'Farenheit') {
            calc = ((9 * n) - 2282) / 5;
            resultado.innerHTML = (n + "K = " + calc + "°F");
        } else {
            calc = n;
            resultado.innerHTML = (n + "K = " + calc + "K");
        }
    }
}