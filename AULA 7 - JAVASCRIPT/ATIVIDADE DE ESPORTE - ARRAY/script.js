const esporte = ["Futebol", "Corinthians", 11, "preto", "branco", "Basquete", "Chicago Bulls", 5, "vermelho", "Formula 1", "Audi", 2, "cinza"];

document.write("<p>Esporte 1: " + esporte[0] + " | Time: " + esporte[1] + " | Cores predominante: " + esporte[3] + " e " + esporte[4] + " | Quantidade de jogadores: " + esporte[2] + "</p>");
document.write("<p>Esporte 2: " + esporte[5] + " | Time: " + esporte[6] + " | Cores predominante: " + esporte[8] + " | Quantidade de jogadores: " + esporte[7] + "</p>");
document.write("<p>Esporte 3: " + esporte[9] + " | Time: " + esporte[10] + " | Cores predominante: " + esporte[12] + " | Quantidade de jogadores: " + esporte[11] + "</p>");

var cor = prompt("Digite a cor que deseja pesquisar:");

if (cor !== null && cor.trim() !== "") {

    cor = cor.trim().toLowerCase();

    if (esporte.includes(cor)) {
        if (cor === "preto" || cor === "branco") {
            document.write("<p>A cor " + cor + " está presente no esporte " + esporte[0] + " e no time " + esporte[1] + " e com " + esporte[2] + " jogadores.</p>");
            document.write('<img src="imagens/corinthians.jpg" alt="Sport Club Corinthians Paulista">');

        } else if (cor === "vermelho") {
            document.write("<p>A cor " + cor + " está presente no esporte " + esporte[5] + " e no time " + esporte[6] + " e com " + esporte[7] + " jogadores.</p>");
            document.write('<img src="imagens/chicagobulls.png" alt="Chicago Bulls">');

        } else if (cor === "cinza") {
            document.write("<p>A cor " + cor + " está presente no esporte " + esporte[9] + " e no time " + esporte[10] + " e com " + esporte[11] + " jogadores.</p>");
            document.write('<img src="imagens/audi.png" alt="Audi">');
        }

    } else {
        document.write("<p>A cor " + cor + " não está presente na lista de cores dos meus times favoritos.</p>");
    }

} else {
    alert("Você cancelou ou não digitou nenhuma cor!");
}
