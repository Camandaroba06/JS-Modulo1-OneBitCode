const name1 = window.prompt("Digite o Nome do Primeiro Veículo:");
const velVeiculo1 = parseFloat(window.prompt("Digite a Velocidade do Carro 1:"));
const name2 = window.prompt("Digite o Nome do Segundo Veículo:");
const velVeiculo2 = parseFloat(window.prompt("Digite a Velocidade do Carro 2:"));

if (velVeiculo1 === velVeiculo2) {
    alert("A velocidade deles é igual, sendo ela: " + velVeiculo1);
} else {
    if (velVeiculo1 > velVeiculo2) {
        alert("O Primeiro Veiculo " + `(${name1})` + " é o mais rápido");
    }
    if (velVeiculo2 > velVeiculo1) {
        alert("O Segundo Veiculo " + `(${name2})` + " é o mais rápido");
    }
}
