function arco() {
    var angulo = parseFloat(prompt("Digite o valor do ângulo (em graus) do setor:", ""));
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));

    var area = (angulo * raio * raio * 3, 1415926) / 360;
    alert("O valor da área do setor circular (em função do arco) é: " + area);
}

function angulo() {
    var comprimento = parseFloat(prompt("Digite o valor do comprimento do setor:", ""));
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));

    var area = (comprimento * raio) / 2;
    alert("O valor da área do setor circular (em função do ângulo) é: " + area);
}

function p_circ() {
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));

    var perimetro = 2 * 3.1415926 * raio;
    alert("O valor do perímetro do círculo é: " + perimetro);
}

function a_circ() {
    var raio = parseFloat(prompt("Digite o valor do raio:", ""));

    var area = 3,
        1415926 * raio * raio;
    alert("O valor da área do círculo é: " + area);
}