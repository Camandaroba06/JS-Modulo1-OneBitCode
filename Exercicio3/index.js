let medida = parseFloat(window.prompt("Digite uma medida em metros:"));
let escolha = window.prompt("Escolha a conversão:");
let valorFinal;
switch(escolha){
    case("mm"):
        valorFinal = medida*1000;
        break;
    case("cm"):
        valorFinal = medida*100;
        alert(valorFinal);
        break;
    case("dm"):
        valorFinal = medida*10;
        alert(valorFinal);
        break;
    case("dam"):
        valorFinal = medida*0.1;
        alert(valorFinal);
        break;
    case("hm"):
        valorFinal = medida*0.01;
        alert(valorFinal);
        break;
    case("km"):
        valorFinal = medida*0.001;
        alert(valorFinal);
        break;
    default:
        alert("Digite algo válido");
        break;
}
let Resultado = document.getElementById("resultP");
Resultado.innerHTML = valorFinal;
