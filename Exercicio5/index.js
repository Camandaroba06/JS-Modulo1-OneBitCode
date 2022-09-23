let saldo = parseFloat(prompt("Digite Quanto money vc tem no começo!!"))
let solicitacao

do {
    solicitacao = parseInt(prompt("Saldo Inicial: " + saldo
        + "\n 1.Adicionar dinheiro"
        + "\n 2. Remover Dinheiro"
        + "\n 3. Sair da Aplicação"))
    switch (solicitacao) {
        case (1):
            let add = parseInt(prompt("Valor a ser Adicionado: "))
            saldo += add
            break
        case (2):
            let rmv = parseInt(prompt("Valor a ser Adicionado: "))
            saldo -= rmv
            break
        case (3):
            console.log(solicitacao)
            alert("Aplicação Finalizada!");
            break;

        default:
            alert("Digite algo Dentro das Opções. Tente Novamente !")
            break;
    }


} while (solicitacao != 3);
