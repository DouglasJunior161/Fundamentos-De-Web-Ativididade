var cidade = confirm("Você mora em São Paulo?\n\nOK = Sim | Cancelar = Não");
if (cidade === true) {
    document.write('<img src="imagens/SP.jpg" alt="São Paulo">');
} else {
    document.write('<img src="imagens/Aruja.jpg" alt="Arujá">');
}