let palavra = []
palavra = prompt("Veja de você é o douglas")
let invertida = []
let i2 = palavra.length - 1
let invertidaVar = ""
for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i])
    invertida[i] = palavra[i2]
    invertidaVar += invertida[i]
    i2--
}
console.log(invertidaVar)
if (palavra == invertidaVar) {
    console.log("A palavra é um palindrome")
}
