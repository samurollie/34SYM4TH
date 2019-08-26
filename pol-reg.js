function p_quad() { //essa função calcula o perímetro do quadrado
    var base = parseFloat(prompt("Digite a medida da base:", "")); //a medida da base digitada pelo usuário é salva na variável "base"
    var altura = parseFloat(prompt("Digite a medida da altura:", "")); //a medida da altura digitada pelo usuário é salva na variável "altura" 

    var perimetro = (base * 2) + (altura * 2); //na variável "perímetro", a base é multiplicada por 2 e o resultado é somado com a multiplicação da altura por 2
    alert("O perímetro do quadrado é: " + perimetro); //o site mostra a mensagem descrita e o perímetro do quadrado
}

function a_quad() { //calcula a área do quadrado
    var base = parseFloat(prompt("Digite a medida da base:", "")); //a medida da base digitada pelo usuário é salva na variável "base"
    var altura = parseFloat(prompt("Digite a medida da altura:", "")); //a medida da altura digitada pelo usuário é salva na variável "altura" 

    var area = base * altura; //a variável "area" é a multiplicação da base pela altura
    alert("A área do quadrado é: " + area); //o site mostra a mensagem descrita e a área do quadrado
}

function p_tri() { //calcula o perímetro do triângulo
    var aresta = parseFloat(prompt("Digite a medida da aresta:", "")); //a medida da aresta digitada pelo usuário é salva na variável "aresta" 

    var perimetro = 3 * aresta; //a variável "perimetro" é a multiplicação da aresta por 3
    alert("O perímetro do triângulo é: " + perimetro); //o site mostra a mensagem descrita e o perímetro do triangulo
}

function a_tri() { //calcula a área do triângulo
    var aresta = parseFloat(prompt("Digite a medida da aresta:", "")); //a medida da aresta digitada pelo usuário é salva na variável "aresta"

    var area = (aresta * aresta * Math.sqrt(3)) / 4; //a variável "area" é a multiplicação da aresta ao quadrado pela raiz de 3
    alert("A área do triângulo é: " + area); //o site mostra a mensagem descrita e a área do triângulo
}

function p_hex() { //calcula o perímetro do hexágono
    var aresta = parseFloat(prompt("Digite a medida da aresta:", "")); //a medida da aresta digitada pelo usuário é salva na variável "aresta"

    var perimetro = 6 * aresta; //a variável "perímetro" é a multiplicação da aresta por 6
    alert("O perímetro do hexágono é: " + perimetro); //o site mostra a mensagem descrita e o perímetro do hexágono
}

function a_hex() { //calcula a área do hexágono
    var aresta = parseFloat(prompt("Digite a medida da aresta:", "")); //a medida da aresta digitada pelo usuário é salva na variável "aresta"

    var area = (3 * aresta * aresta * Math.sqrt(3)) / 2; //a variável "area" é a multiplicação da aresta ao quadrado, raiz de 3 e 3, e o resultado dessas operações dividido por 2
    alert("A área do hexágono é: " + area); //o site mostra a mensagem descrita e a área do hexágono
}
