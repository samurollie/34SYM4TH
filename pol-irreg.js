function p_ret()
{
    var lado1=parseFloat(prompt("Digite o valor do lado 1:", ""));
    var lado2=parseFloat(prompt("Digite o valor do lado 2:", ""));

    var perimetro=lado1+lado1+lado2+lado2;
    alert("O perímetro do retângulo é: " +perimetro);
}
function a_ret()
{
    var base=prompt("Digite o valor da base:", "");
    var altura=prompt("Digite o valor da altura:", "");

    var area=base*altura;
    alert("A área do retângulo é: " +area);
}
function p_tri()
{
    var  base=parseFloat(prompt("Digite a medida da base:", ""));
    var lado1=parseFloat(prompt("Digite a medida do lado 1:", ""));
    var lado2=parseFloat(prompt("Digite a medida do lado 2:", ""));
    
    var perimetro=lado1+lado2+base;
    alert("O perímetro do triângulo é: " +perimetro);
}
function a_tri()
{
    var altura=prompt("Digite a medida da altura:", "");
    var   base=prompt("Digite a medida da base:", "");

    var area=altura*base/2;
    alert("A área do triângulo é: " +area);
}
function p_trap()
{
    var basemaior=parseFloat(prompt("Digite a medida da base maior:", ""));
    var basemenor=parseFloat(prompt("Digite a medida da base menor:", ""));
    var lado1=parseFloat(prompt("Digite a medida do lado 1:", ""));
    var lado2=parseFloat(prompt("Digite a medida do lado 2:", ""));

    var perimetro = basemaior+basemenor+lado1+lado2;
    alert("O perímetro do trapézio é: " +perimetro);
}
function a_trap()
{
    var basemaior=parseFloat(prompt("Digite a medida da base maior:", ""));
    var basemenor=parseFloat(prompt("Digite a medida da base menor:", ""));
    var altura=parseFloat(prompt("Digite a medida da altura:", ""));

    var area = ((basemaior+basemenor)*h)/2;
    alert("A área do trapézio é: " +area);
}
function p_para()
{
    var lado1=parseFloat(prompt("Digite a medida do lado 1:", ""));
    var lado2=parseFloat(prompt("Digite a medida do lado 2:", ""));
    var lado3=parseFloat(prompt("Digite a medida do lado 3:", ""));
    var lado4=parseFloat(prompt("Digite a medida do lado 4:", ""));

    var perimetro = lado1+lado2+lado3+lado4;
    alert("O perímetro do paralelogramo é: " +perimetro);
}
function a_para()
{
    var base=prompt("Digite a medida da base:", "");
    var altura=prompt("Digite a medida da altura:", "");

    var area=base*altura;
    alert("A área do paralelogramo é: " +area);
}
function p_los()
{
    var lado1=parseFloat(prompt("Digite a medida do lado 1:", ""));
    var lado2=parseFloat(prompt("Digite a medida do lado 2:", ""));
    var lado3=parseFloat(prompt("Digite a medida do lado 3:", ""));
    var lado4=parseFloat(prompt("Digite a medida do lado 4:", ""));

    var perimetro = lado1+lado2+lado3+lado4;
    alert("O perímetro do losango é: " +perimetro);
}
function a_los()
{
    var diagonal_maior=prompt("Digite a medida da diagonal maior:", "");
    var diagonal_menor=prompt("Digite a medida da diagonal menor:", "");

    var area=(diagonal_maior*diagonal_menor)/2;
    alert("A área do losango é: " +area);
}