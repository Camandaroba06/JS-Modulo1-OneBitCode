const exitConstante = 6
let listagemVagas = [
    {nome: "Engenheiro de Software", quantidadeCandidatos: 2, dataLimit: "04/06/23", descricao: "Vaga para desenvolvedor Software, requisitos: saber .NET", candidatos: ["Richard", "Jorge"]}
    ,{nome: "Dev web", quantidadeCandidatos: 10, dataLimit: "14/03/23", descricao: "Vaga para desenvolvedor Web, requisitos: saber JS/HTML/CSS"}
]
function listarVagas(listagem) {
    let stringConcatenada = ""
    for (let i = 0; i < listagem.length; i++) {
        if(i != listagem.length-1){
            stringConcatenada += `Vaga ${i}:\n  ${listagem[i].nome}\n       Descrição: ${listagem[i].descricao}\nQuantidade de Candidatos: ${listagem[i].quantidadeCandidatos}\n`
        }
        else{
            stringConcatenada += `Vaga ${i}:\n  ${listagem[i].nome}\n       Descrição: ${listagem[i].descricao}\nQuantidade de Candidatos: ${listagem[i].quantidadeCandidatos}`
        }
        
    }
    window.prompt(stringConcatenada)
}
function criaVaga(listagem) {
    let titleVaga = ""
    let dataLim = ""
    let descricao = ""
    let objetoCriado = {nome: "", quantidadeCandidatos: 0, dataLimit: "", descricao: ""}
    titleVaga = window.prompt("Digite um Título para sua Vaga:")
    descricao = window.prompt("Digite uma descrição para sua Vaga:")
    dataLim = window.prompt("Digite uma data limite para sua Vaga:")
    objetoCriado.nome = titleVaga
    objetoCriado.descricao = descricao
    objetoCriado.dataLimit = dataLim
    listagem.push(objetoCriado)
    window.prompt(listagem[2].nome)
}
function visuVaga(listagem) {
    let i = window.prompt("Digite o Indice da vaga que quer Visualizar:")
    window.prompt(`Vaga ${i}:\n  ${listagem[i].nome}\n       Descrição: ${listagem[i].descricao}\nQuantidade de Candidatos: ${listagem[i].quantidadeCandidatos}\nData Limite: ${listagem[i].dataLimit}`)
}


let key = -1
do {
    key = parseInt(window.prompt(
        
        "Selecione uma opção para prosseguir com a aplicação\n"
        +"1. Listar Vagas Disponíveis\n"
        +"2. Criar Vaga\n"
        +"3. Visualizar Vaga\n"
        +"4. Inscrever Candidato\n"
        +"5. Excluir uma Vaga\n"
        +"6. Exit\n"
        ))
    switch (key) {
        case 1:
            listarVagas(listagemVagas)
            break;
    
        case 2:
            criaVaga(listagemVagas);
            break;
        case 3:
            visuVaga(listagemVagas);
            break;
        case 4:
            visuVaga(listagemVagas);
            break;
        default:
            break;
    }
} while (key != 6 );
