const exitConstante = 6
let listagemVagas = [
    {nome: "Engenheiro de Software", quantidadeCandidatos: 19, dataLimit: 04/06/23}
    ,{nome: "Dev web", quantidadeCandidatos: 10, dataLimit: 14/03/23}
]
function listarVagas(listagem) {
    let stringConcatenada = ""
    for (let i = 0; i < listagem.length; i++) {
        if(i != listagem.length-1){
            stringConcatenada += `Vaga ${i}:\n  ${listagem[i].nome}\n       Quantidade de Candidatos:${listagem[i].quantidadeCandidatos}\n`
        }
        else{
            stringConcatenada += `Vaga ${i}:\n  ${listagem[i].nome}\n       Quantidade de Candidatos:${listagem[i].quantidadeCandidatos}`
        }
        
    }
    window.prompt(stringConcatenada)
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
    
        default:
            break;
    }
} while (key != 6 );