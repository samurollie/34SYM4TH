function p_ret() { //calcula o perímetro do retângulo
    var lado1 = parseFloat(prompt("Digite o valor do lado 1:", ""));//a medida do lado 1 digitada pelo usuário é salva na variável "lado1"
    var lado2 = parseFloat(prompt("Digite o valor do lado 2:", ""));//a medida do lado 2 digitada pelo usuário é salva na variável "lado2"

    var perimetro = lado1 + lado1 + lado2 + lado2;//a variável "perimetro" é a soma de todos os lados
    alert("O perímetro do retângulo é: " + perimetro);//o site mostra a mensagem descrita e o perímetro do retângulo
}

function a_ret() { //calcula a área do retângulo
    var base = prompt("Digite o valor da base:", "");//a medida da base digitada pelo usuário é salva na variável "base"
    var altura = prompt("Digite o valor da altura:", "");//a medida da altura digitada pelo usuário é salva na variável "altura"

    var area = base * altura;//a variável "area" é a multiplicação da base pela altura
    alert("A área do retângulo é: " + area);//o site mostra a mensagem descrita e a área do retângulo
}

function p_tri() {//calcula o perímetro do triângulo
    var base = parseFloat(prompt("Digite a medida da base:", ""));//a medida da base digitada pelo usuário é salva na variável "base"
    var lado1 = parseFloat(prompt("Digite a medida do lado 1:", ""));//a medida do lado 1 digitada pelo usuário é salva na variável "lado1"
    var lado2 = parseFloat(prompt("Digite a medida do lado 2:", ""));//a medida do lado 2 digitada pelo usuário é salva na variável "lado2"

    var perimetro = lado1 + lado2 + base;//a variável "perimetro" é a soma de todos os lados e base
    alert("O perímetro do triângulo é: " + perimetro);//o site mostra a mensagem descrita e o perímetro do triângulo
}

function a_tri() {//calcula a área do triângulo
    var altura = prompt("Digite a medida da altura:", "");//a medida da altura digitada pelo usuário é salva na variável "altura"
    var base = prompt("Digite a medida da base:", "");//a medida da base digitada pelo usuário é salva na variável "base"

    var area = altura * base / 2; //a variável "area" é a multiplicação da base pela altura e o resultado, dividido por 2
    alert("A área do triângulo é: " + area);//o site mostra a mensagem descrita e a área do triângulo
}

function p_trap() {//calcula o perímetro do trapézio
    var basemaior = parseFloat(prompt("Digite a medida da base maior:", ""));//a medida da base maior digitada pelo usuário é salva na variável "basemaior"
    var basemenor = parseFloat(prompt("Digite a medida da base menor:", ""));//a medida da base menor digitada pelo usuário é salva na variável "basemenor"
    var lado1 = parseFloat(prompt("Digite a medida do lado 1:", ""));//a medida do lado 1 digitada pelo usuário é salva na variável "lado1"
    var lado2 = parseFloat(prompt("Digite a medida do lado 2:", ""));//a medida do lado 2 digitada pelo usuário é salva na variável "lado2"

    var perimetro = basemaior + basemenor + lado1 + lado2;//a variável "perimetro" é a soma de todos os lados e bases
    alert("O perímetro do trapézio é: " + perimetro);//o site mostra a mensagem descrita e o perímetro do trapézio
}

function a_trap() {//calcula a área do trapézio
    var basemaior = parseFloat(prompt("Digite a medida da base maior:", ""));//a medida da base maior digitada pelo usuário é salva na variável "basemaior"
    var basemenor = parseFloat(prompt("Digite a medida da base menor:", ""));//a medida da base menor digitada pelo usuário é salva na variável "basemenor"
    var altura = parseFloat(prompt("Digite a medida da altura:", ""));//a medida da altura digitada pelo usuário é salva na variável "altura"

    var area = ((basemaior + basemenor) * h) / 2;//a variável "área" é a multiplicação da altura pela soma das bases e o resultado, dividido por 2
    alert("A área do trapézio é: " + area);//o site mostra a mensagem descrita e a área do trapézio
}

function p_para() {//calcula o perímetro do paralelogramo
    var lado1 = parseFloat(prompt("Digite a medida do lado 1:", ""));//a medida do lado 1 digitada pelo usuário é salva na variável "lado1"
    var lado2 = parseFloat(prompt("Digite a medida do lado 2:", ""));//a medida do lado 2 digitada pelo usuário é salva na variável "lado2"
    var lado3 = parseFloat(prompt("Digite a medida do lado 3:", ""));//a medida do lado 3 digitada pelo usuário é salva na variável "lado3"
    var lado4 = parseFloat(prompt("Digite a medida do lado 4:", ""));//a medida do lado 4 digitada pelo usuário é salva na variável "lado4"

    var perimetro = lado1 + lado2 + lado3 + lado4; //a variável "perimetro" é a soma de todos os lados
    alert("O perímetro do paralelogramo é: " + perimetro);//o site mostra a mensagem descrita e o perímetro do paralelogramo
}

function a_para() {//calcula a área do paralelogramo
    var base = prompt("Digite a medida da base:", "");//a medida da base digitada pelo usuário é salva na variável "base"
    var altura = prompt("Digite a medida da altura:", "");//a medida da altura digitada pelo usuário é salva na variável "altura"

    var area = base * altura;//a variável "area" é a multiplicação da base pela altura
    alert("A área do paralelogramo é: " + area);//o site mostra a mensagem descrita e a área do paralelogramo
}

function p_los() {//calcula o perímetro do losango
    var lado1 = parseFloat(prompt("Digite a medida do lado 1:", ""));//a medida do lado 1 digitada pelo usuário é salva na variável "lado1"
    var lado2 = parseFloat(prompt("Digite a medida do lado 2:", ""));//a medida do lado 2 digitada pelo usuário é salva na variável "lado2"
    var lado3 = parseFloat(prompt("Digite a medida do lado 3:", ""));//a medida do lado 3 digitada pelo usuário é salva na variável "lado3"
    var lado4 = parseFloat(prompt("Digite a medida do lado 4:", ""));//a medida do lado 4 digitada pelo usuário é salva na variável "lado4"

    var perimetro = lado1 + lado2 + lado3 + lado4; //a variável "perimetro" é a soma de todos os lados
    alert("O perímetro do losango é: " + perimetro); //o site mostra a mensagem descrita e o perímetro do losango
}

function a_los() {//calcula a área do losango
    var diagonal_maior = prompt("Digite a medida da diagonal maior:", "");//a medida da diagonal maior digitada pelo usuário é salva na variável "diagonal_maior"
    var diagonal_menor = prompt("Digite a medida da diagonal menor:", "");//a medida da diagonal menor digitada pelo usuário é salva na variável "diagonal_menor"

    var area = (diagonal_maior * diagonal_menor) / 2;//a variável "area" é a multiplicaço da diagonal maior pela menor e o resultado, dividido por 2
    alert("A área do losango é: " + area);//o site mostra a mensagem descrita e a área do losango
}
