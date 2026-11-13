// <!--1.Faça um script em que apareça uma mensagem na tela com a seguinte pergunta: “Você mora na cidade de São Paulo?” Se sim, carregar uma imagem qualquer de São Paulo; caso contrário, a imagem da sua cidade. --> 
var cidade = confirm("Você mora em São Paulo?\n\nOK = Sim | Cancelar = Não");
if (cidade === true) {
    document.write('<img src="imagens/SP.jpg" alt="São Paulo">');
} else {
    document.write('<img src="imagens/Aruja.jpg" alt="Arujá">');
}