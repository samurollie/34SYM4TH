function calculo() {
    var expre = document.forms[0].equacao.value;
    var i, flag = 0; // flag varia em 0 (sinaliza a) e 1 (sinaliza b).
    var n = expre.length;
    var a = 1,
        b = 1;
    var num; // servirá de auxiliar.

    for (i = 0; i < n; i++) { // looping que buca os sinais negativos para tornar os coeficientes negativos (caso haja).
        if (expre[i] == '-') {
            if (flag == 0) { // achou um sinal negativo e flag = 0, logo a < 0.
                a = -1;
            } else { // achou um sinal negativo e flag = 1, logo b < 0.
                b = -1;
            }
        } else if (expre[i] != 'x' && expre[i] != '+') { // Só entra nesta condição se o elemento do array expre[i] for um inteiro.
            if (flag == 0) { // se flag = 0, pegue o 'a'.
                num = parseInt(expre[i]); // como JS lê tudo em strings, fazemos um cast pra inteiro (será aplicado em todo elemento que quisermos tratar como inteiro).

                while (expre[i + 1] != 'x') { // pega o 'a' (o looping roda ate achar um 'x', pois a partir dele pegaremos o 'b' e antes dele pegaremos o 'a').
                    num = parseInt(num * 10) + parseInt(expre[i + 1]); // algoritmo para pegar o a (comentado no fim da página).
                    i++;
                }
                i++;
                a = parseInt(a * num);
                flag = 1;
            } else { // se flag = 1, pegue o 'b'.
                num = parseInt(expre[i]);

                while (i + 1 < n) { // pega o 'b' (o looping roda ate o fim do array).
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
    x = x.toFixed(4); // formata o numero com quatro casas decimais .
    // abaixo estão as descrições com as informações da equação.
    document.getElementById("raíz").innerHTML = ("raíz = " + x + "."); // printa na região "raiz" o x da equação.
    document.getElementById("descricao1").innerHTML = ("Esta equação é representada por uma <b>reta</b> (<i>Linear</i>) no plano <b>xOy</b>, que irá cortar o eixo das <i>Abscissas</i> no ponto (" + x + ", 0) e o das <i>Coordenadas</i> no ponto " + "(0, " + b + ').');
    document.getElementById("descricao2").innerHTML = ("Sendo assim, os coeficientes <b>angular</b> e <b>linear</b> da mesma são respectivamente, " + a + " e " + b + ".");
    
    /* ALGORITMO PARA PEGAR OS COEFICIENTES DA EXPRESSÃO DE TEXTO DE ENTRADA:
       A equação é do formato: ax + b = 0;
       Logo, tudo que vier antes do elemento "x", fará parte do "a";
       Da mesma maneira que tudo que vier após o "x", especificamente após o sinal que vem após o "x" (+ ou -), fará parte do "b";
       pegar o "a":
       fazemos um loop que busca elementos != de x, e de - ou +, e armazenamos
        pegar o "b":
    /* 
}
