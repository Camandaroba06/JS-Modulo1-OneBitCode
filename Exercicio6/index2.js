let palavra = []
palavra = prompt("Digite uma palavra para verificar se é um palindrome")
let invertida = []
let i2 = palavra.length - 1
let teste = ""
for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i])
    invertida[i] = palavra[i2]
    teste += invertida[i]
    i2--
}
console.log(teste)
if (palavra == teste) {
    console.log("É um palindrome")
}
