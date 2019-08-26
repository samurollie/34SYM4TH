function p_quad()
{
    var base = parseFloat(prompt("Digite a medida da base:", ""));
    var altura = parseFloat(prompt("Digite a medida da altura:", ""));

    var perimetro = (base*2) + (altura*2);
    alert("O perímetro do quadrado é: " +perimetro);
}
function a_quad()
{
    var base = parseFloat(prompt("Digite a medida da base:", ""));
    var altura = parseFloat(prompt("Digite a medida da altura:", ""));

    var area = base*altura;
    alert("A área do quadrado é: " +area);
}
function p_tri()
{
    var aresta = parseFloat(prompt("Digite a medida da aresta:", ""));
    
    var perimetro = 3*aresta;
    alert("O perímetro do triângulo é: " +perimetro);
}
function a_tri()
{
    var aresta = parseFloat(prompt("Digite a medida da aresta:", ""));

    var area = (aresta * aresta * Math.sqrt(3))/4;
    alert("A área do triângulo é: " +area);
}
function p_hex()
{
    var aresta = parseFloat(prompt("Digite a medida da aresta:", ""));

    var perimetro = 6*aresta;
    alert("O perímetro do hexágono é: " +perimetro);
}
function a_hex()
{
    var aresta = parseFloat(prompt("Digite a medida da aresta:", ""));

    var area = (3*aresta*aresta*Math.sqrt(3))/2;
    alert("A área do hexágono é: " +area);
}