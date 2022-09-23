let arrayNum = []
let valEscolhido = parseFloat(prompt("Digite o valor na qual vc quer saber a tabuada"))
for (let i = 0; i <= 20; i++) {
    arrayNum[i] = i * valEscolhido
}
let string
for (i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i])
    string += `===> ${i}*${valEscolhido} = ${arrayNum[i]} \n`
}
alert(string)