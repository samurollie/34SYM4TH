function arco() {//calcula a área do setor circular em função do arco
    var angulo = parseFloat(prompt("Digite o valor do ângulo (em graus) do setor:", ""));//a medida do ângulo digitada pelo usuário é salva na variável "angulo"
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));//a medida do raio digitada pelo usuário é salva na variável "raio"

    var area = (angulo * raio * raio * 3, 1415926) / 360;//a variável "area" é a multiplicação do angulo, raio ao quadrado e pi e o resultado, dividir por 360
    alert("O valor da área do setor circular (em função do arco) é: " + area);//o site mostra a mensagem descrita e a área do setor circular em função do arco
}

function angulo() {//calcula a área do setor circular em função do ângulo
    var comprimento = parseFloat(prompt("Digite o valor do comprimento do setor:", ""));//a medida do comprimento do setor digitada pelo usuário é salva na variável "comprimento"
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));//a medida do raio digitada pelo usuário é salva na variável "raio"

    var area = (comprimento * raio) / 2; //a variável "area" é a multiplicação do comprimento com o raio e o resultado, dividir por 2
    alert("O valor da área do setor circular (em função do ângulo) é: " + area);//o site mostra a mensagem descrita e a área do setor circular em função do ângulo
}

function p_circ() {//calcula o perímetro do círculo
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));//a medida do raio digitada pelo usuário é salva na variável "raio"

    var perimetro = 2 * 3.1415926 * raio; //a variável "perimetro" é a multiplicação do raio, pi e 2
    alert("O valor do perímetro do círculo é: " + perimetro);//o site mostra a mensagem descrita e o perímetro do círculo
}

function a_circ() {//calcula a área do círculo
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));//a medida do raio digitada pelo usuário é salva na variável "raio"

    var area = 3,
        1415926 * raio * raio; //a variável "area" é a multiplicação do valor de pi pelo raio ao quadrado
    alert("O valor da área do círculo é: " + area);//o site mostra a mensagem descrita e a área do círculo
}
