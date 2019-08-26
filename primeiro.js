function calculo() {
    var expre = document.forms[0].equacao.value;
    var i, flag = 0; // flag varia em 0 (sinaliza a) e 1 (sinaliza b).
    var n = expre.length;
    var a = 1,
        b = 1;
    var num; // servirá de auxiliar.

    for (i = 0; i < n; i++) {
        if (expre[i] == '-') {
            if (flag == 0) {
                a = -1;
            } else {
                b = -1;
            }
        } else if (expre[i] != 'x' && expre[i] != '+') { // Só entra nesta condição se for um inteiro.
            if (flag == 0) {
                num = parseInt(expre[i]);

                while (expre[i + 1] != 'x') {
                    num = parseInt(num * 10) + parseInt(expre[i + 1]);
                    i++;
                }
                i++;
                a = parseInt(a * num);
                flag = 1;
            } else {
                num = parseInt(expre[i]);

                while (i + 1 < n) {
                    num = parseInt(num * 10) + parseInt(expre[i + 1]);
                    i++;
                }
                b = parseInt(b * num);
                break;
            }
        }
    }
    raiz(a, b);
}

function raiz(a, b) {

    if (a == 0) {
        alert('Esta equação não existe! Tente mudar o valor de a.');
    }
    var x = parseFloat((-1 * b) / a);
    x = x.toFixed(4);

    document.getElementById("raíz").innerHTML = ("raíz = " + x + ".");
    document.getElementById("descricao1").innerHTML = ("Esta equação é representada por uma <b>reta</b> (<i>Linear</i>) no plano <b>xOy</b>, que irá cortar o eixo das <i>Abscissas</i> no ponto (" + x + ", 0) e o das <i>Coordenadas</i> no ponto " + "(0, " + b + ').');
    document.getElementById("descricao2").innerHTML = ("Sendo assim, os coeficientes <b>angular</b> e <b>linear</b> da mesma são respectivamente, " + a + " e " + b + ".");
}