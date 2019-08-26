function converter() {
    var n = parseFloat(document.forms[0].valor.value); // Salva o valor da entrada em uma variável;
    var origin = document.forms[0].origin.value; // Salva a unidade selecionada em uma variável;
    var destiny = document.forms[0].destiny.value; // Salva a unidade selecionada em uma variável;
    var resultado = document.getElementById("resultado"); // Salva o parágrafo com id "resultado" em uma variável;
    var calc;
    if (origin == 'C') { // Se a unidade de origem for "Célsius"
        if (destiny == 'Celsius') { // Se a unidade desejada for célsius;
            resultado.innerHTML = (n + "°C = " + n + "°C"); // Imprime no parágrafo o resultado;
        } else if (destiny == 'Farenheit') { // Se a unidade desejada for Fahrenheit;
            calc = (1.8 * n) + 32;
            resultado.innerHTML = (n + "°C = " + calc + "°F"); // Imprime no parágrafo o resultado;
        } else { // Se a unidade desejada for Kelvin;
            calc = n + 273;
        }
    } else if (origin == 'F') { // Se a unidade de origem for Fahrenheit
        if (destiny == 'Celsius') { // Se a unidade desejada for célsius;
            calc = (n - 32) / 1.8;
            resultado.innerHTML = (n + "°F = " + calc + "°C"); // Imprime no parágrafo o resultado;
        } else if (destiny == 'Farenheit') { // Se a unidade desejada for Fahrenheit;
            calc = n;
            resultado.innerHTML = (n + "°F = " + calc + "°F"); // Imprime no parágrafo o resultado;
        } else { // Se a unidade desejada for Kelvin;
            calc = ((5 * n) + 2282) / 9;
            resultado.innerHTML = (n + "°F = " + calc + "K"); // Imprime no parágrafo o resultado;
        }
    } else { // Se a unidade de origem for Kelvin
        if (destiny == 'Celsius') { // Se a unidade desejada for célsius;
            calc = n - 273;
            resultado.innerHTML = (n + "K = " + calc + "°C"); // Imprime no parágrafo o resultado;
        } else if (destiny == 'Farenheit') { // Se a unidade desejada for Fahrenheit;
            calc = ((9 * n) - 2282) / 5;
            resultado.innerHTML = (n + "K = " + calc + "°F"); // Imprime no parágrafo o resultado;
        } else { // Se a unidade desejada for Kelvin;
            calc = n;
            resultado.innerHTML = (n + "K = " + calc + "K"); // Imprime no parágrafo o resultado;
        }
    }
}