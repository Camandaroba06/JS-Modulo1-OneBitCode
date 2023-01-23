const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]
  //map

  const nomes = personagens.map(function (personagem){
    return personagem.nome
  })
  console.log(nomes)

  //filter

  const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
  })

  console.log(orcs)


  const racas = personagens.reduce(
    function(valorAcumulado, personagem){
        if(valorAcumulado[personagem.raca]){
            valorAcumulado[personagem.raca].push(personagem)
        }
        else{
            valorAcumulado[personagem.raca] = [personagem]
        }
        return valorAcumulado
    }
    ,{})
    console.log(racas)


//sort - esse modifica o array [ Ele deve retornar valores positivos ou negativos, comparando 2 a 2, por isso fazer a-b se der negativo(ele vai jgr o valor para o começo do array), se não vai jgr para o final]

personagens.sort(function (a,b){
    return a.nivel - b.nivel
})
console.log(personagens)

//caso não queria modificar o array, só usar o slice() sem argumentos junto do sort e ser feliz já q ele irá criar uma copia do arquivo
const copiaOrdenada = personagens.slice().sort(function (a,b){
    return b.nivel - a.nivel
})
console.log(copiaOrdenada)
