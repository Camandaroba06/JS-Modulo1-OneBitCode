let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gand"];
console.log(arr)

// É válido ressaltar que qualquer uma das alterações feitas
// no array acabam por poderem ser salvas em variáveis tipo
// let variavel = arr.pop()


// Push : Add um elemento no final do array
arr.push("Jorge foi add no final");
console.log(arr);


// Unshift : Add um elemento no começo do Array
arr.unshift("Ricardo foi add no começo");
console.log(arr);

// Pop : Rmv o último elemento do Array
arr.pop();
console.log("Jorge foi Removido do Array");
console.log(arr);

// Shift : Rmv o primeiro elemento do Array
arr.shift()
console.log("Ricardo foi Removido do Array");
console.log(arr);

// Includes : Pesquisa um elemento no Array e devolve true or false
const incluido = arr.includes("Gand");
console.log(incluido);

// IndexOf : Devolve o indice do elemento pesquisado
const index = arr.indexOf("Gand")
console.log(index)

// Slice : Corta o Array ou seria copiar uma parte ?
const copia = arr.slice(0, 4)
console.log(copia)

// Concat : Concatenar o Array
const tudo = copia.concat(arr, "RICHARD");
console.log(tudo);

// Splice : Substituir elemento no Array
const a = tudo.splice(index, 1, "Substituto")
console.log(tudo)