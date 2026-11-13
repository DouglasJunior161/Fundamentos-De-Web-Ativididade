// 2.    Faça um script em que o usuário entre com quatro notas, em uma caixa de diálogo. Em seguida, crie uma lista e exiba as notas também com caixa de diálogo. Calcule a média e exiba na página.
var contador = 1;
const notas = [];
while(contador <= 4){
    var nota = parseFloat(prompt("Digite a nota " + (contador) + ":"));
    notas.push(nota);
    contador++;
}
var media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

alert("A média das notas é: " + media.toFixed(2));
document.write("<h1>Notas</h1>");
document.write("<p>Nota 1: " + notas[0] + "</p>");
document.write("<p>Nota 2: " + notas[1] + "</p>");
document.write("<p>Nota 3: " + notas[2] + "</p>");
document.write("<p>Nota 4: " + notas[3] + "</p>");
document.write("<p>Média: " + media.toFixed(2) + "</p>");