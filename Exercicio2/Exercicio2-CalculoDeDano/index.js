let nomePersonagem1 = window.prompt("Digite o Nome do Personagem: ");
let poderAtaque = window.prompt("Digite o Poder De Ataque:");
let nomePersonagem2 = window.prompt("Digite o Nome do outro Personagem: ");
let pontosVida = window.prompt("Digite os Pontos de Vida: ");
let poderDefesa = window.prompt("Digite o Poder de Defesa do Personagem: ");
let hasShield = window.confirm("Tem escudo ?"); // da true ou false
let dano = undefined;
console.log(hasShield);
if (poderAtaque > poderDefesa && hasShield === false) {
    dano = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && hasShield === true) {
    dano = (poderAtaque - poderDefesa) / 2;
} else if (poderAtaque <= poderDefesa) {
    dano = 0;
}
pontosVida -= dano;
alert("Dano sofrido: " + dano + "\nPontos de Vida:" + pontosVida);

