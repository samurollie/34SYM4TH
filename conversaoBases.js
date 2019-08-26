var calc; // Cria uma váriavel global que salva o resultado

function converter() {
    var resultado = document.getElementById("resultado");
    var n = document.forms[0].valor.value; // Salva o valor digitado numa variável (até então uma string)
    var size = n.length; // Salva o tamanho da string
    var origin = document.forms[0].origin.value; // Salva a base de origen numa variável
    var destiny = document.forms[0].destiny.value; // Salva a base de destino numa variável
    n = parseFloat(n); // Transforma n num número flutuante
    if (origin == 'Decimal') {
        if (destiny == 'd') { // Se eu desejo converter para decimal
            calc = n;
            resultado.innerHTML = (n + "(decimal) é igual a " + calc + "(decimal)"); // Imprime
        } else { // Se eu desejo converter para binária
            decimalToBinaryu(n, size); // converte
            resultado.innerHTML = (n + "(decimal) é igual a " + calc.join('') + "(binário)"); // Imprime 

        }
    } else {
        if (destiny == 'b') { // Se eu desejo converter para binário
            calc = n;
            resultado.innerHTML = (n + "(binário) é igual a " + calc + "(binário)"); // Imprime
        } else { // Se eu desejo converter para decimal
            calc = binToDessemau(n); // Converte
            resultado.innerHTML = (n + "(binário) é igual a " + calc + "(decimal) "); // Imprime
        }
    }
}

function decimalToBinaryu(n, size) { // Converte de decimal para binário;
    calc = new Array(size); // Transforma a variável calc em um array;
    var i;
    for (i = 0; i < size; i++) {
        // console.log ("calc = " + calc.join('') + "i == " + i + "n == " + n);
        calc[i] = n % 2; // Salva o valor da divisão por 2 no array;
        if (n == 2) {
            calc[i + 1] = n / 2;
        }
        n /= 2;
    }
    // console.log (calc);
    calc.reverse(); // Inverte as posições do array;
    return;
}

function binToDessemau(n) { // Transforma de binário para decimal
    var resul = 0,
        i;
    for (i = 0; n >= 10; i++) {
        var a = n % 10;
        n /= 10;
        resul += (a * Math.pow(2, i));
    }
    resul += (n * Math.pow(2, i));
    return resul; // retorna o resultado;
}