let pilha = ["Rei", "Valete"]
let alertaPilha = ""
let escolha
let aux
do {
    for (let i = 0; i < pilha.length; i++) {
        alertaPilha += `${pilha.length - i}º: ${pilha[i]} \n`;
    }
    escolha = parseInt(prompt("Ordem da pilha:\n" + alertaPilha
        + "Escolha as opções:\n"
        + "1. Add Card\n"
        + "2. Pegar Card\n"
        + "3. Finalizar Execução do Programa\n"));
    alertaPilha = ""
    if (typeof (escolha) != "undefined") {
        switch (escolha) {
            case (1):
                aux = prompt("Digite o Nome do Novo Paciente:")
                pilha.push(aux);
                break;
            case 2:
                if (pilha.length === 0) {
                    alert("A fila está vazia !!");
                    break;
                }
                aux = pilha.pop();
                alert(`${aux} foi removido da fila e está a caminho da consulta`)
                break;
            case 3:
                alert("Finalizando...");
                break;

            default:
                alert("Digite algo válido");
                break;
        }
    }
} while (escolha != 3);