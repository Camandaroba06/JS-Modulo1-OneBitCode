let arrayCidadesVisitadas = [];
let arrayCidadesNAOVisitadas = [];
let i,i2 = 0;
let visitou = true;
let city, aux;
let jorge = true;
while(jorge === true){
    city = window.prompt("Digite a Cidade");
    aux = window.prompt("Visitou ? (responda com Sim ou Nao)");
    if(aux === "Sim"){
        visitou = true;
    }else if(aux === "Nao"){
        visitou = false;
    }else{
        alert("Digite algo Válido!!");
    }

    if(visitou === true){
        arrayCidadesVisitadas[i] = city;
        i++;
    }else{
        arrayCidadesNAOVisitadas[i2] = city;
        i2++;
    }
    aux = window.prompt("Deseja Encerrar o Programa ? (responda com Sim ou Nao)");
    if(aux === "Sim"){
        visitou = true;
    }else if(aux === "Nao"){
        visitou = false;
    }else{
        alert("Digite algo Válido!!");
    }    
}