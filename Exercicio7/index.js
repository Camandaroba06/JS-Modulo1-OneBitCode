let filaEspera = ["Matheus", "Marcos"]
let alertaFila = ""
let escolha
let aux
do {
    for (let i = 0; i < filaEspera.length; i++) {
        alertaFila += `${i + 1}º: ${filaEspera[i]} \n`;
    }
    escolha = parseInt(prompt("Ordem da fila:\n" + alertaFila
        + "Escolha as opções:\n"
        + "1. Novo Paciente\n"
        + "2. Consultar Paciente\n"
        + "3. Finalizar Execução do Programa\n"));
    alertaFila = ""
    if (typeof (escolha) != "undefined") {
        switch (escolha) {
            case (1):
                aux = prompt("Digite o Nome do Novo Paciente:")
                filaEspera.push(aux);
                break;
            case 2:
                if (filaEspera.length === 0) {
                    alert("A fila está vazia !!");
                    break;
                }
                aux = filaEspera.shift();
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