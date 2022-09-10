let val1 = parseFloat(window.prompt("Digite 1 valor:"));
let val2 = parseFloat(window.prompt("Digite outro valor:"));

soma = val1 + val2;
sub = val1 - val2;
mult = val1 * val2;
div = val1 / val2;

window.alert(
    `O valor da soma: ${soma} "\n"O valor da subtração: ${sub}"\n"O valor da multiplicação: ${mult}"\n"valor da divisão ${div}`
);
document.write(
    "<p>Soma: " +
    soma +
    "<br>"
    + "Subtração: " +
    sub +
    "<br>"
    + "Multiplicação: " +
    mult +
    "<br>"
    + "Divisão: " +
    div +
    "</p>"
);
