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
function inscreveVaga(listagem) {
    let nomeCandidato = window.prompt("Digite seu Nome para se inscrever na vaga:")
    let indiceSelecionado = window.prompt("Digite o indice da vaga que quer se candidatar: ")
    window.prompt(`Verifique seus dados e vaga na qual deseja se candidatar:\nNome: ${nomeCandidato}\nVaga na qual irá se candidatar:\n${listagem[indiceSelecionado].nome}\n${listagem[indiceSelecionado].descricao}\nData Limite: ${listagem[indiceSelecionado].dataLimit}`)
    listagem[indiceSelecionado].candidatos.push(nomeCandidato);
    listagem[indiceSelecionado].quantidadeCandidatos+=1
}
function excluirVaga(listagem) {
    let indiceSelecionado = window.prompt("Digite o indice da vaga na qual deseja excluir do sistema:")
    let acao = parseInt(window.prompt(`Tem certeza de que deseja excluir a vaga:\n${listagem[indiceSelecionado].nome}\n${listagem[indiceSelecionado].descricao}\nData Limite: ${listagem[indiceSelecionado].dataLimit}\nDigite 1 para excluir 0 para manter`))
    if (acao === 1) {
        listagem.splice(indiceSelecionado,1);
    } else {
        alert("Não excluimos a vaga selecionada")
    }
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
            inscreveVaga(listagemVagas);
            break;
        case 5:
            excluirVaga(listagemVagas);
            break;
        default:
            break;
    }
} while (key != 6 );
