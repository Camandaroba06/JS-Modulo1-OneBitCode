let arrayCidadesVisitadas = [];
let arrayCidadesNAOVisitadas = [];
let i = 0;
let i2 = 0;
let visitou = true;
let city, aux;
let jorge = true;
while (jorge === true) {
    city = window.prompt("Digite a Cidade");
    aux = window.prompt("Visitou ? (responda com Sim ou Nao)");
    if (aux === "Sim") {
        visitou = true;
    } else if (aux === "Nao") {
        visitou = false;
    } else {
        alert("Digite algo Válido!!");
    }

    if (visitou === true) {
        arrayCidadesVisitadas[i] = city;
        i++;
    } else {
        arrayCidadesNAOVisitadas[i2] = city;
        i2++;
    }
    aux = window.prompt("Deseja Continuar o Programa ? (responda com Sim ou Nao)");
    if (aux === "Sim") {
        jorge = true;
    } else if (aux === "Nao") {
        jorge = false;
    } else {
        alert("Digite algo Válido!!");
    }
}
console.log("Cidades Visitadas:");
let elementoVisita = document.getElementById("tbody");
let elementoNaoVisitado = document.getElementById("naoVisitadas");
for (i = 0; i < arrayCidadesVisitadas.length; i++) {
    console.log(arrayCidadesVisitadas[i]);
    var corpoTabela = document.querySelector('#tbodyS');
    var tr = document.createElement('tr');
    var tdNome = document.createElement('td');
    tdNome.textContent = arrayCidadesVisitadas[i];
    tr.appendChild(tdNome);
    corpoTabela.appendChild(tr);
}
console.log("Cidades NAO Visitadas:");
for (i = 0; i < arrayCidadesNAOVisitadas.length; i++) {
    console.log(arrayCidadesNAOVisitadas[i]);
    var corpoTabela2 = document.querySelector('#tbodyS');
    var tr2 = document.createElement('tr');
    var tdNome2 = document.createElement('td');
    tdNome2.textContent = arrayCidadesNAOVisitadas[i];
    tr2.appendChild(tdNome2);
    corpoTabela2.appendChild(tr2);
}