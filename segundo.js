function checagem(a, b, c) {
    if (a == 0) { // Se a = 0, a equação não será do seguno grau.
        alert('Esta equação não é de segundo grau. Por favor digite outra.');
    } else {
        document.getElementById("coeficientes").innerHTML = ("Coeficientes:</br>a = " + a + "</br>b = " + b + "</br>c = " + c + "<hr/>"); // Mostra o coeficientes.

        if (a > 0) {
            document.getElementById("coeficientes").innerHTML = ("<br>Como na equação acima o <b>a</b> é positivo, seu gráfico será uma parábola com concavidade para <b>cima</b>.");
        } else {
            document.getElementById("coeficientes").innerHTML = ("<br>Como na equação acima o <b>a</b> é negativo, seu gráfico será uma parábola com concavidade para <b>baixo</b>.");
        }
        d(a, b, c);
    }
}

function casa(num, cont) {
    cont = Math.pow(10, cont);

    return num * cont;
}

function digitos(n, digitado) { // contar a quantidade de digitos do a, b e c.
    var conta = -1,
        contb = -1,
        contc = -1; // cont conta os digitos de a, b e c.
    flag = 0;

    for (i = 0; i < n; i++) { // Busca a localização de x(ela pode variar dependendo da quantia de casas que o 'a' e o 'b' tiverem).
        if (digitado[i] == '-' || digitado[i] == '+') {
            i++;
        }
        if (digitado[i] != 'x') {
            if (flag == 0) {
                conta = conta + 1; // conta quantos digitos terá a.
            } else if (flag == 1) {
                contb = contb + 1;
            } else {
                contc = contc + 1;
            }
        } else {
            i++;
            if (digitado[i] == '²') {
                flag = 1; // sinaliza os digitos de b.
            } else {
                flag = 2; // sinaliza os digitos de c.
            }
        }
    }
    gerar(conta, contb, contc, digitado, n, flag);
}

function converter(numero) {
    if (numero > 0) {
        return numero - 1;
    } else {
        return numero + 1;
    }
}

function gerar(conta, contb, contc, digitado, n, flag) { // gerar os termos(a, b e c).
    var a = 1,
        b = 1,
        c = 1,
        num;
    flag = 0;

    for (i = 0; i < n; i++) {
        if (digitado[i] == '-' || digitado[i] == '+') {
            if (digitado[i] == '-') {
                if (flag == 0) {
                    a = -1;
                } else if (flag == 1) {
                    b = -1;
                } else {
                    c = -1;
                }
            }
            i++;
        }
        if (digitado[i] != 'x') {
            if (flag == 0) {
                num = 1;
                while (conta > -1) {
                    num += casa(digitado[i], conta);
                    conta--;
                    i++;
                }
                a = a * num;
                a = converter(a);
            } else if (flag == 1) {
                num = 1;
                while (contb > -1) {
                    num += casa(digitado[i], contb);
                    contb--;
                    i++;
                }
                b = b * num;
                b = converter(b);
            } else {
                num = 1;
                while (contc > -1) {
                    num += casa(digitado[i], contc);
                    contc--;
                    i++;
                }
                c = c * num;
                c = converter(c);
            }
            i -= 1;
        } else {
            i++;
            if (digitado[i] == '²') {
                flag = 1; // sinaliza os digitos de b.
            } else {
                flag = 2; // sinaliza os digitos de c.
            }
        }
    }
    console.log(a, b, c);
    checagem(a, b, c);
}

function calculo() {
    var digitado = document.forms[0].equacao.value;
    var i;
    var flag = 0;
    var n = digitado.length;

    for (i = 0; i < n; i++) { // Procura pelo ² para checar se a equação é quadrática.
        if (digitado[i] == '²') {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        alert("Não é uma equação do segundo grau.\nPor favor direcione-se à página de equações de primeiro grau.");
    } else {
        digitos(n, digitado, flag);
    }
}

function d(a, b, c) {
    var delta = (b * b) - (4 * a * c);

    if (delta > 0) {
        document.getElementById("delta").innerHTML = ("&Delta; = " + delta + ", logo, a equação possui duas raízes reais:");
        raiz(a, b, delta);

    } else if (delta == 0) {
        document.getElementById("delta").innerHTML = ("&Delta; = " + delta + ", logo, a equação possui uma única raiz real:");
        raiz(a, b, delta);

    } else { // delta menor que zero.
        document.getElementById("delta").innerHTML = ("&Delta; = " + delta + ", logo, a equação não possui raízes reais." + "Para <b>delta < 0</b>, a parábola não irá cortar o eixo x em nenhum ponto.");
        document.getElementById("raizes").innerHTML = ("(<i>x</i> &#8713; R)");

    }
}

function raiz(a, b, delta) { // Calcula a(s) raiz/ raizes da equacao, de acordo com o valor de delta.
    var x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
    var x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a);

    x1 = parseFloat(x1);
    x2 = parseFloat(x2);

    x1 = x1.toFixed(4);
    x2 = x2.toFixed(4);

    document.getElementById("descricao1").innerHTML = (delta == 0) ? ("<i>x</i> = " + x1 + "Para <b>delta = 0</b>, a parábola irá cortar o <b>eixo x</b> no ponto " + x1 + ".") :
        ("<i>x'</i> = " + x1 + "</br><i>x''</i> = " + x2 + "<br><br>Para <b>delta > 0</b>, a parábola irá cortar o <b>eixo x</b> nos pontos " + x1 + " e " + x2 + ".");
}
